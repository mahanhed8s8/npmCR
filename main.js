const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');
const spawn = require('cross-spawn');

let currentProcess = null;

function createWindow() {
  const win = new BrowserWindow({
    width: 900,
    height: 700,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true
    }
  });
  win.loadFile('index.html');
}

app.whenReady().then(createWindow);

// Browse folder
ipcMain.handle('select-folder', async () => {
  const { canceled, filePaths } = await dialog.showOpenDialog({ properties: ['openDirectory'] });
  return canceled ? null : filePaths[0];
});

// Run npm commands
ipcMain.handle('run-command', (event, cwd, cmd) => {
  if (currentProcess) currentProcess.kill();

  const parts = cmd.split(' ');
  const subprocess = spawn(parts[0], parts.slice(1), { cwd, shell: true });
  currentProcess = subprocess;

  // ❌ Output handling intentionally missing to mimic old broken state

  subprocess.on('close', code => {
    currentProcess = null;
  });
});

// Stop current process
ipcMain.handle('stop-command', () => {
  if (currentProcess) currentProcess.kill();
});
