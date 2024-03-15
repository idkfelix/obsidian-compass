const {Plugin, ItemView, PluginSettingTab, Setting, App} = require('obsidian')
const CompassClient = require('@idkfelix/compass.js').default

class SettingTab extends PluginSettingTab {
	constructor(app, plugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(){
		const {containerEl} = this;
		containerEl.empty();

		new Setting(containerEl)
			.setName('ASP.NET_SessionId=')
			.addText(text => text
				.setPlaceholder('Enter your SessionId')
				.setValue(this.plugin.settings.sessionId)
				.onChange(async (value) => {
					this.plugin.settings.sessionId= value;
					await this.plugin.saveSettings();
				}));
	}
}

async function getCalendar(sessionId){
  const client = await CompassClient('mullauna-vic.compass.education','ASP.NET_SessionId='+sessionId)
  const date = new Date().toISOString().slice(0,10)
  const res = await client.Calendar.getCalendarEventsByUser(client.userId,date,date)
  return res
}

const CompassView = "CompassView"

class compassView extends ItemView {
  constructor(leaf, sessionId) {
    super(leaf);
    this.sessionId = sessionId
  }

  getViewType() {return CompassView}
  getDisplayText() {return "Compass"}

  async onOpen() {
    const res = await getCalendar(this.sessionId)
    const container = this.containerEl.children[1];
    container.empty();
    container.createEl("h4", { text: JSON.stringify(res)});
  }
}

module.exports = class CompassPlugin extends Plugin {
  async loadSettings() {
    this.settings = Object.assign({}, {sessionId: ''}, await this.loadData());
  }

  async saveSettings() {
    await this.saveData(this.settings);
  }

  async onload() {
    // Load settings & Create the settings tab
    await this.loadSettings()
    this.addSettingTab(new SettingTab(this.app, this))

    // Bind CompassView
    this.registerView(
      CompassView,
      (leaf) => new compassView(leaf,this.settings.sessionId)
    );

    this.addRibbonIcon("dice", "Compass", () => {
      // Remove any existing leaf
      this.app.workspace.detachLeavesOfType(CompassView);
      // Create leaf on right
      this.app.workspace.getRightLeaf(false).setViewState({
        type: CompassView,
        active: true
      })
      // Reveal created leaf
      this.app.workspace.revealLeaf(
        this.app.workspace.getLeavesOfType(CompassView)[0]
      );
    });
  }

  async onUnload() {
    // remove leaf
    this.app.workspace.detachLeavesOfType(CompassView);
  }
}