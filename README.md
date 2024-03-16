<h1  align='center'>Obsidian-Compass</h1>
<h3  align='center'>Compass Education integration For Obsidian.md</h3>

## Install
1. Clone repo into your vaults plugin folder
```bash
$ git clone https://github.com/idkfelix/obsidian-compass.git path/to/vault/.obsidian/plugins/
```
2. Enable Compass in your vaults settings: "Settings" > "Community Plugins" > "Compass"
3. Set your Compass SessionId and Domain under "Compass" in Settings
  - Open Compass in your browser and press F12
  - Click "application" > "Cookies" > "Your Compass Domain"
  - Copy the value of "ASP.NET_SessionId"
4. Click the Compass icon ribbon to load your schedule

## Development
```bash
$ git clone https://github.com/idkfelix/obsidian-compass.git
```
```bash
$ npm install
```
```bash
$ npm run build
```