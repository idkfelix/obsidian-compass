import Calendar from "./requests/Calendar.js";
import Accounts from "./requests/Accounts.js";
import fetch from "node-fetch";

/**
 * API Client for Compass Edu
 * @module CompassClient
 * @param {string} domain - School domain for Compass
 * @param {string} cookies - Cookies to authorise API requests
 * @example const client = CompassClient('school.compass.education','ASP.NET_SessionId=...')
 */
async function CompassClient(domain, cookies){
  /**
   * @memberof module:CompassClient
   * @param {"Accounts"|"Calendar"|"Activity"|"FileAssets"|"TaskService"|"LearningTasks"|"User"} service - API service to use
   * @param {string} location - API location to use
   * @param {any} [data] - Data to send with request (optional).
   * @param {"POST"|"GET"} [method] - HTTP Method for request, default to POST
   * @returns {Promise<any>} Promise resolves reponse JSON
   * @example client.newRequest("Accounts","getAccount",null,"POST")
   */
  async function newRequest(service,location,data,method) {
    let url = `https://${domain}/Services/${service}.svc/${location}`
    const res = await fetch(url, {
      "method": method || "POST",
      "body": JSON.stringify(data),
      "headers": {
        "accept": "*/*",
        "content-type": "application/json",
        "cookie": cookies,
      }
    })
    if(!res.ok) throw new Error(res.statusText+" "+res.url.replace('https://'+domain,''))
    // console.log(res.status+' '+res.statusText+' | '+res.url)
    let json = await res.json()
  // @ts-ignore
    return json.d
  }

  const _Accounts = Accounts(newRequest)
  const initRes = await _Accounts.getAccount()

  return{
    domain: domain,
    userId: initRes.userId,
    userInfo: initRes,

    newRequest,
    
    Accounts: _Accounts,
    Calendar: Calendar(newRequest),
  }
}
export default CompassClient