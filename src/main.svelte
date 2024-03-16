<script>
  import CompassClient from './lib/compass'
  import './lib/types/accounts'
  import './lib/types/calendar'

  export let sessionId
  let date = new Date()

  /** @type {Promise<CalendarResponse>} */
  let data
  /** @type {{userInfo:AccountResponse,userId:number,domain:string,Calendar:any}}*/
  let client

  async function incrementDate(offset) {
    date = new Date(date)
    date.setDate(date.getDate() + offset)
    data = fetchData(date.toISOString().slice(0,10))
  }

  async function fetchData(date) {
    client = await CompassClient('mullauna-vic.compass.education','ASP.NET_SessionId='+sessionId)
    let periods = await client.Calendar.getCalendarEventsByUser(client.userId, date, date)
    return periods.sort((a,b) => a.period - b.period)
  }

  $: {data = fetchData(date.toISOString().slice(0,10))}
</script>

<div class="compass-container menu">
  <h2>{date.toDateString()}</h2>
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

<style>
  .compass-container{
    width: 90% !important;
    min-width: 200px;
    max-width: 400px;
    text-align: center;
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 10px;
  }

  h2{
    margin: 10px;
  }

  button{
    margin-left: 8px;
    margin-right: 8px;
    width: 80px;
  }
</style>
