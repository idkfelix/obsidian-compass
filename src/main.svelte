<script>
  import CompassClient from './lib/compass'
  import './lib/types/calendar'

  export let sessionId
  let date = new Date().toISOString().slice(0,10)
  const client = await CompassClient('mullauna-vic.compass.education','ASP.NET_SessionId='+sessionId)

  /** @type {Promise<CalendarResponse>} */
  let data

  async function incrementDate(offset) {
    const newDate = new Date(date)
    newDate.setDate(newDate.getDate() + offset)
    date = newDate.toISOString().slice(0,10)
    data = fetchData(date)
  }

  async function fetchData(date) {
    let periods = await client.Calendar.getCalendarEventsByUser(client.userId, date, date)
    return periods.sort((a,b) => a.period - b.period)
  }

  $: {data = fetchData(date)}
</script>

<div style="max-width: 300px;max-height:75px">
  <h2 class="HyperMD-header HyperMD-header-2 cm-line">{date}</h2>
  <button on:click={()=>{incrementDate(-1)}}>Previous</button>
  <button on:click={()=>{incrementDate(+1)}}>Next</button>
  {#await data}
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
