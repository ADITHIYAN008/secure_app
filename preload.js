const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("secureAPI", {
  navigate: (url) => ipcRenderer.send("navigate", url),
  navControl: (action) => ipcRenderer.send("nav-control", action),
  emergencyExit: () => ipcRenderer.send("emergency-exit"),
});
