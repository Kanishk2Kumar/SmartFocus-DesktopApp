console.log("Tab selection started");

const sourceGrid = document.getElementById("source-grid");

window.electronAPI.getScreenSources().then((sources) => {
  sources.forEach((source) => {
    const div = document.createElement("div");
    div.classList.add("source-box");

    const thumb = document.createElement("img");
    thumb.src = source.thumbnail;
    thumb.alt = source.name;
    thumb.style.width = "100%";
    thumb.style.borderRadius = "10px";

    const label = document.createElement("p");
    label.innerText = source.name;
    label.style.textAlign = "center";
    label.style.marginTop = "8px";

    div.appendChild(thumb);
    div.appendChild(label);

    div.onclick = () => {
      startScreenRecording(source.id);
    };

    sourceGrid.appendChild(div);
  });
});

async function startScreenRecording(sourceId) {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: {
        mandatory: {
          chromeMediaSource: "desktop",
          chromeMediaSourceId: sourceId,
        },
      },
    });

    window.sessionStream = stream;
    window.electronAPI.startMonitoringWindow();
    window.close(); // optional
  } catch (err) {
    alert("Screen capture failed: " + err.message);
  }
}
