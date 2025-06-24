let seconds = 0;
let sessionData = {
  startTime: new Date().toISOString(),
  events: [],
};

function updateTimer() {
  const min = String(Math.floor(seconds / 60)).padStart(2, '0');
  const sec = String(seconds % 60).padStart(2, '0');
  document.getElementById("monitor-timer").innerText = `${min}:${sec}`;
}

setInterval(() => {
  seconds++;
  updateTimer();
}, 1000);

window.addEventListener("blur", () => {
  sessionData.events.push({ type: "blur", time: new Date().toISOString() });
});

window.addEventListener("focus", () => {
  sessionData.events.push({ type: "focus", time: new Date().toISOString() });
});

window.addEventListener("beforeunload", () => {
  sessionData.endTime = new Date().toISOString();
  sessionData.duration = seconds;
  window.electronAPI.saveSession(sessionData);
});
