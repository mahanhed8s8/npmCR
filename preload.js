const { contextBridge, ipcRenderer } = require('electron');

convertAnsi: (text) => {
    const AnsiToHtml = require('ansi-to-html');
    const converter = new AnsiToHtml();
    return converter.toHtml(text);
  }

contextBridge.exposeInMainWorld('api', {
    selectFolder: () => ipcRenderer.invoke('select-folder'),
    runCommand: (cwd, cmd) => ipcRenderer.invoke('run-command', cwd, cmd),
    stopCommand: () => ipcRenderer.invoke('stop-command'),
    onStdout: (fn) => ipcRenderer.on('stdout', (e, data) => fn(data)),
    onStderr: (fn) => ipcRenderer.on('stderr', (e, data) => fn(data)),
    onExit: (fn) => ipcRenderer.on('exit', (e, code) => fn(code)),
    convertAnsi: (text) => ansiConverter.toHtml(text)


});