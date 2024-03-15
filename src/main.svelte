<script>
  import './lib/types/calendar'
  import CompassClient from './lib/compass'

  export let sessionId
  let date = new Date().toISOString().slice(0,10)
  let client

  /** @type {Promise<CalendarResponse>} */
  let res
  $: {res = fetchData(date)}

  async function incrementDate(offset) {
    const newDate = new Date(date)
    newDate.setDate(newDate.getDate() + offset)
    date = newDate.toISOString().slice(0,10)
    res = fetchData(date)
  }

  async function fetchData(date) {
    client = await CompassClient('mullauna-vic.compass.education','ASP.NET_SessionId='+sessionId)
    let periods = await client.Calendar.getCalendarEventsByUser(client.userId, date, date)
    return periods.sort((a,b) => a.period - b.period)
  }
</script>

<div style="max-width: 300px;max-height:75px">
  <h2 class="HyperMD-header HyperMD-header-2 cm-line">{date}</h2>
  <button on:click={()=>{incrementDate(-1)}}>Previous</button>
  <button on:click={()=>{incrementDate(+1)}}>Next</button>
  {#await res}
    <h3>Loading...</h3>
  {:then periods} 
    {#each periods as period}
    <a href={`https://${client.domain}/Organise/Activities/Activity.aspx?targetUserId=${client.userId}#session/${period.instanceId}`}>
      <div class="">
        {#if period.period}
        <h4>{period.period} - {period.title}</h4>
        {/if}
      </div>
    </a>
    {/each}
  {:catch}
    <h3>Error Fetching Data</h3>
  {/await}
</div>