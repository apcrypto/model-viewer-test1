const toolbar = document.querySelector(".toolbar");
const modelViewer = document.querySelector("#orbit-test");
const progress = document.querySelector("#progress");
const bar = progress.querySelector(".bar");
toolbar.addEventListener("click", eventHandler);

function eventHandler(e) {
  const position = e.target.attributes[0].value;
  const att = document.createAttribute("camera-orbit");
  if (position == "position1") {
    att.value = "90deg auto 100%";
    modelViewer.setAttributeNode(att);
  } else if (position == "position2") {
    att.value = "auto -180deg auto";
    modelViewer.setAttributeNode(att);
  } else if (position == "position3") {
    att.value = "auto 180deg auto";
    modelViewer.setAttributeNode(att);
  } else if (position == "position4") {
    att.value = "auto 90deg auto";
    modelViewer.setAttributeNode(att);
  }
}

modelViewer.addEventListener("progress", (event) => {
  const { totalProgress } = event.detail;
  progress.classList.toggle("show", totalProgress < 1);
  bar.style.transform = `scaleX(${totalProgress})`;
});
