const positions = {
  position1: { orbit: "90deg auto 80%", element: ".position1" },
  position2: { orbit: "auto -180deg 90%", element: ".position2" },
  position3: { orbit: "-90deg 170deg 85%", element: ".position3" },
  position4: { orbit: "auto auto auto", element: ".position4" },
};

const modelViewer = document.querySelector("#orbit-test");
const progress = document.querySelector("#progress");
const bar = progress.querySelector(".bar");

document.querySelector(".toolbar").addEventListener("click", (e) => {
  const positionKey = e.target.className;
  if (positions[positionKey]) {
    updateCameraOrbit(positions[positionKey].orbit);
    updateButtonStyles(positionKey);
  }
});

modelViewer.addEventListener("progress", (event) => {
  const { totalProgress } = event.detail;
  progress.classList.toggle("show", totalProgress < 1);
  bar.style.transform = `scaleX(${totalProgress})`;
});

modelViewer.addEventListener("touchend", () => {
  resetButtonStyles();
});

function updateCameraOrbit(orbit) {
  const att = document.createAttribute("camera-orbit");
  att.value = orbit;
  modelViewer.setAttributeNode(att);
}

function updateButtonStyles(activePosition) {
  Object.keys(positions).forEach((key) => {
    const element = document.querySelector(positions[key].element);
    if (key === activePosition) {
      element.style.backgroundColor = "#ff0000";
      element.style.borderColor = "#ff0000";
    } else {
      element.style.backgroundColor = "#000";
      element.style.borderColor = "#0000";
    }
  });
}

function resetButtonStyles() {
  Object.keys(positions).forEach((key) => {
    const element = document.querySelector(positions[key].element);
    element.style.backgroundColor = "#000";
    element.style.borderColor = "#0000";
  });
}
