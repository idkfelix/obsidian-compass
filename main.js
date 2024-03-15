const {Plugin, ItemView, PluginSettingTab, Setting} = require('obsidian')

const HTMLView = "HTML View"
class viewContent extends ItemView {
  constructor(leaf, settings) {
    super(leaf);
    this.settings = settings
  }

  getViewType() {
    return HTMLView;
  }

  getDisplayText() {
    return "Compass";
  }

  async onOpen() {
    let sessionId = this.settings.sessionId
    const container = this.containerEl.children[1];
    container.empty();
    container.createEl("h4", { text: sessionId });
  }
}

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

module.exports = class CompassPlugin extends Plugin {
  async onload() {
    // Bind HTMLView to content
    this.registerView(
      HTMLView,
      (leaf) => new viewContent(leaf)
    );

    // Load settings & Create the settings tab
    await this.loadSettings()
    this.addSettingTab(new SettingTab(this.app, this))

    this.addRibbonIcon("dice", "Compass", () => {
      // Remove any existing leaf
      this.app.workspace.detachLeavesOfType(HTMLView);
      // Create leaf on right
      this.app.workspace.getRightLeaf(false).setViewState({
        type: HTMLView,
        active: true
      })
      // Reveal created leaf
      this.app.workspace.revealLeaf(
        this.app.workspace.getLeavesOfType(HTMLView)[0]
      );
    });
  }

  async loadSettings() {
    this.settings = Object.assign({}, {sessionId: ''}, await this.loadData());
  }

  async saveSettings() {
    await this.saveData(this.settings);
  }

  async onUnload() {
    // remove leaf
    this.app.workspace.detachLeavesOfType(HTMLView);
  }
}