<script>
  import './lib/types/calendar'
  import CompassClient from './lib/compass'

  export let sessionId
  let client
  let date = new Date().toISOString().slice(0,10)

  /** @type {Promise<CalendarResponse>} */
  let res = CompassClient('mullauna-vic.compass.education','ASP.NET_SessionId='+sessionId).then(async(c) => {
    let x = await c.Calendar.getCalendarEventsByUser(c.userId,date,date)
    client = c; return x
  }).then(x => x.sort((a,b) => a.period - b.period))
</script>

<div style="max-width: 300px;max-height:75px">
  <h2 class="HyperMD-header HyperMD-header-2 cm-line">{date}</h2>
  {#await res}
    <h3>Loading...</h3>
  {:then periods} 
    {#each periods as period}
    <a href={`https://${client.domain}/Organise/Activities/Activity.aspx?targetUserId=${client.userId}#session/${period.instanceId}`}>
      <div class="">
        <h4>{period.period} - {period.title}</h4>
      </div>
    </a>
    {/each}
  {:catch}
    <h3>Error Fetching Data</h3>
  {/await}
</div>