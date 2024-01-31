const {BrowserWindow} = require('electron')

let window;


function createSpeedWindow(){
    window = new BrowserWindow({
        width:800,
        height:600,
        webPreferences:{
            nodeIntegration:true,
            contextIsolation: false,
        }
    });

    window.loadFile('mainfile/design/frontHTML.html')
}

module.exports = {
    createSpeedWindow
}