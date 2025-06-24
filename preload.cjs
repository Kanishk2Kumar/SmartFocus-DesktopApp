// ✅ preload.cjs
const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  getScreenSources: () => ipcRenderer.invoke("get-screen-sources"),
  startMonitoringWindow: () => ipcRenderer.send("start-monitoring-window"),
  saveSession: (data) => ipcRenderer.send("save-session", data),
});
