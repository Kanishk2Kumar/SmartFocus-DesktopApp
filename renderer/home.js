console.log("Home Page Loaded");

document.getElementById("startSession").onclick = () => {
  window.location.href = "../pages/tab-select.html";
};

document.getElementById("viewSessions").onclick = () => {
  // Simulate dashboard open - open external dashboard in browser
  require("electron").shell.openExternal("https://example.com/dashboard");
};
