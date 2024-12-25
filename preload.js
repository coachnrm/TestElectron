const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  printDocument: () => ipcRenderer.send('print-document')

   
});