const {createSpeedWindow} = require('./main')
const {app} = require('electron')


require('electron-reload')(__dirname)

app.allowRendererProcessReuse = true
app.whenReady().then(createSpeedWindow)