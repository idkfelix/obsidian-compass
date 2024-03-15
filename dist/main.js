(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require2() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // node_modules/@idkfelix/compass.js/src/requests/Users.js
  function Users(newRequest) {
    function getAllStaff(limit) {
      let data = { "limit": limit || 1e3 };
      return newRequest("User", "GetAllStaff", data);
    }
    return {
      getAllStaff
    };
  }
  var Users_default;
  var init_Users = __esm({
    "node_modules/@idkfelix/compass.js/src/requests/Users.js"() {
      Users_default = Users;
    }
  });

  // node_modules/@idkfelix/compass.js/src/requests/Calendar.js
  function Calendar(newRequest) {
    function getCalendarEventsByUser(userId, startDate, endDate) {
      let data = { "userId": userId, "startDate": startDate, "endDate": endDate };
      return newRequest("Calendar", "GetCalendarEventsByUser", data);
    }
    return {
      getCalendarEventsByUser
    };
  }
  var Calendar_default;
  var init_Calendar = __esm({
    "node_modules/@idkfelix/compass.js/src/requests/Calendar.js"() {
      Calendar_default = Calendar;
    }
  });

  // node_modules/@idkfelix/compass.js/src/requests/Activity.js
  function Activity(newRequest) {
    function getLessonsByActivityIdQuick(activityId) {
      let data = { "activityId": activityId };
      return newRequest("Activity", "GetLessonsByActivityIdQuick", data);
    }
    function getLessonsByActivityId(activityId) {
      let data = { "activityId": activityId };
      return newRequest("Activity", "GetLessonsByActivityId", data);
    }
    function getLessonsByInstanceIdQuick(instanceId) {
      let data = { "instanceId": instanceId };
      return newRequest("Activity", "GetLessonsByInstanceIdQuick", data);
    }
    function getLessonsByInstanceId(instanceId) {
      let data = { "instanceId": instanceId };
      return newRequest("Activity", "GetLessonsByInstanceId", data);
    }
    return {
      getLessonsByActivityId,
      getLessonsByActivityIdQuick,
      getLessonsByInstanceId,
      getLessonsByInstanceIdQuick
    };
  }
  var Activity_default;
  var init_Activity = __esm({
    "node_modules/@idkfelix/compass.js/src/requests/Activity.js"() {
      Activity_default = Activity;
    }
  });

  // node_modules/@idkfelix/compass.js/src/requests/Accounts.js
  function Accounts(newRequest) {
    function getAccount() {
      return newRequest("Accounts", "GetAccount");
    }
    return {
      getAccount
    };
  }
  var Accounts_default;
  var init_Accounts = __esm({
    "node_modules/@idkfelix/compass.js/src/requests/Accounts.js"() {
      Accounts_default = Accounts;
    }
  });

  // node_modules/@idkfelix/compass.js/src/requests/TaskService.js
  function TaskService(newRequest) {
    function getAllTaskItems(limit) {
      return newRequest(
        "TaskService",
        "GetAllTaskItems",
        { "page": 1, "start": 0, "limit": limit || 1e3 }
      );
    }
    function getTaskItems(limit) {
      return newRequest(
        "TaskService",
        "GetTaskItems",
        { "page": 1, "start": 0, "limit": limit || 1e3 }
      );
    }
    function saveTaskItem(task) {
      let data = { "task": task };
      return newRequest("TaskService", "SaveTaskItem", data);
    }
    function deleteTaskItem(task) {
      let data = { "task": task };
      return newRequest("TaskService", "DeleteTaskItem", data);
    }
    function updateTaskItem(task) {
      let data = { "task": task };
      return newRequest("TaskService", "UpdateTaskItem", data);
    }
    return {
      getAllTaskItems,
      getTaskItems,
      saveTaskItem,
      deleteTaskItem,
      updateTaskItem
    };
  }
  var TaskService_default;
  var init_TaskService = __esm({
    "node_modules/@idkfelix/compass.js/src/requests/TaskService.js"() {
      TaskService_default = TaskService;
    }
  });

  // node_modules/@idkfelix/compass.js/src/requests/LearningTasks.js
  function LearningTasks(newRequest) {
    function getAllLearningTasksByUserId(userId, limit, showHiddenTasks) {
      let data = { "userId": userId, "limit": limit || 1e3, "showHiddenTasks": showHiddenTasks || false };
      return newRequest("LearningTasks", "GetAllLearningTasksByUserId", data);
    }
    function getAllLearningTasksByActivityId(activityId, limit, showHiddenTasks) {
      let data = { "activityId": activityId, "limit": limit || 1e3, "showHiddenTasks": showHiddenTasks || false };
      return newRequest("LearningTasks", "GetAllLearningTasksByActivityId", data);
    }
    return {
      getAllLearningTasksByActivityId,
      getAllLearningTasksByUserId
    };
  }
  var LearningTasks_default;
  var init_LearningTasks = __esm({
    "node_modules/@idkfelix/compass.js/src/requests/LearningTasks.js"() {
      LearningTasks_default = LearningTasks;
    }
  });

  // node_modules/@idkfelix/compass.js/src/index.js
  var src_exports = {};
  __export(src_exports, {
    default: () => src_default
  });
  async function CompassClient(domain, cookies) {
    async function newRequest(service, location, data, method) {
      let url = `https://${domain}/Services/${service}.svc/${location}`;
      const res = await fetch(url, {
        "method": method || "POST",
        "body": JSON.stringify(data),
        "headers": {
          "accept": "*/*",
          "content-type": "application/json",
          "cookie": cookies
        }
      });
      if (!res.ok)
        throw new Error(res.statusText + " " + res.url.replace("https://" + domain, ""));
      let json = await res.json();
      return json.d;
    }
    async function downloadFile(id, nodeId) {
      let url = `https://${domain}/Services/FileAssets.svc/DownloadFile?id=${id}&nodeId=${nodeId}`;
      const res = await fetch(url, {
        "method": "GET",
        "headers": {
          "accept": "*/*",
          "content-type": "application/json",
          "cookie": cookies
        }
      });
      if (!res.ok)
        throw new Error(res.statusText + " " + res.url.replace("https://" + domain, ""));
      return res.text();
    }
    const _Accounts = Accounts_default(newRequest);
    const initRes = await _Accounts.getAccount();
    return {
      domain,
      userId: initRes.userId,
      userInfo: initRes,
      newRequest,
      downloadFile,
      Accounts: _Accounts,
      Activity: Activity_default(newRequest),
      Calendar: Calendar_default(newRequest),
      LearningTasks: LearningTasks_default(newRequest),
      TaskService: TaskService_default(newRequest),
      Users: Users_default(newRequest)
    };
  }
  var src_default;
  var init_src = __esm({
    "node_modules/@idkfelix/compass.js/src/index.js"() {
      init_Users();
      init_Calendar();
      init_Activity();
      init_Accounts();
      init_TaskService();
      init_LearningTasks();
      src_default = CompassClient;
    }
  });

  // src/main.js
  var require_main = __commonJS({
    "src/main.js"(exports, module) {
      var { Plugin, ItemView, PluginSettingTab, Setting } = __require("obsidian");
      var CompassClient2 = (init_src(), __toCommonJS(src_exports)).default;
      var SettingTab = class extends PluginSettingTab {
        constructor(app, plugin) {
          super(app, plugin);
          this.plugin = plugin;
        }
        display() {
          const { containerEl } = this;
          containerEl.empty();
          new Setting(containerEl).setName("ASP.NET_SessionId=").addText((text) => text.setPlaceholder("Enter your SessionId").setValue(this.plugin.settings.sessionId).onChange(async (value) => {
            this.plugin.settings.sessionId = value;
            await this.plugin.saveSettings();
          }));
        }
      };
      async function getCalendar(sessionId) {
        const client = await CompassClient2("mullauna-vic.compass.education", "ASP.NET_SessionId=" + sessionId);
        const date = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
        const res = await client.Calendar.getCalendarEventsByUser(client.userId, date, date);
        return res;
      }
      var CompassView = "CompassView";
      var compassView = class extends ItemView {
        constructor(leaf, sessionId) {
          super(leaf);
          this.sessionId = sessionId;
        }
        getViewType() {
          return CompassView;
        }
        getDisplayText() {
          return "Compass";
        }
        async onOpen() {
          const res = await getCalendar(this.sessionId);
          const container = this.containerEl.children[1];
          container.empty();
          container.createEl("h4", { text: JSON.stringify(res) });
        }
      };
      module.exports = class CompassPlugin extends Plugin {
        async loadSettings() {
          this.settings = Object.assign({}, { sessionId: "" }, await this.loadData());
        }
        async saveSettings() {
          await this.saveData(this.settings);
        }
        async onload() {
          await this.loadSettings();
          this.addSettingTab(new SettingTab(this.app, this));
          this.registerView(
            CompassView,
            (leaf) => new compassView(leaf, this.settings.sessionId)
          );
          this.addRibbonIcon("dice", "Compass", () => {
            this.app.workspace.detachLeavesOfType(CompassView);
            this.app.workspace.getRightLeaf(false).setViewState({
              type: CompassView,
              active: true
            });
            this.app.workspace.revealLeaf(
              this.app.workspace.getLeavesOfType(CompassView)[0]
            );
          });
        }
        async onUnload() {
          this.app.workspace.detachLeavesOfType(CompassView);
        }
      };
    }
  });
  require_main();
})();
