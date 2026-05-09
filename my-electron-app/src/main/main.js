const { app, BrowserWindow, ipcMain } = require('electron/main')
require('update-electron-app')
const path = require('node:path')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  win.loadFile('src/renderer/index.html')
}
app.whenReady().then(() => {
  if (require('electron-squirrel-startup')) app.quit();
  ipcMain.handle('ping', () => 'pong')
  createWindow();
  autoUpdateApp();
})