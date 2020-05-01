const position1 = document.querySelector(".position1");
const position2 = document.querySelector(".position2");
const position3 = document.querySelector(".position3");
const position4 = document.querySelector(".position4");
const modelViewer = document.querySelector("#orbit-test");
const progress = document.querySelector("#progress");
const bar = progress.querySelector(".bar");
const headbandHotspot = document.querySelector(".hotspot-headband");

const pos1ThetaPhi = {
  theta: 1.5707963267948966,
  phi: 1.3089969389957472,
};
const pos2ThetaPhi = {
  theta: 0,
  phi: 0.39269908169872414,
};
const pos3ThetaPhi = {
  theta: 0,
  phi: 2.748893571891069,
};

const toolbar = document
  .querySelector(".toolbar")
  .addEventListener("click", eventHandler);

function eventHandler(e) {
  const position = e.target.attributes[0].value;
  const att = document.createAttribute("camera-orbit");

  if (position == "position1") {
    att.value = "90deg auto 80%";
    modelViewer.setAttributeNode(att);

    position2.style.backgroundColor = "#000";
    position2.style.borderColor = "#0000";
    position3.style.backgroundColor = "#000";
    position3.style.borderColor = "#0000";
    position4.style.backgroundColor = "#000";
    position4.style.borderColor = "#0000";
    position1.style.backgroundColor = "#ff0000";
    position1.style.borderColor = "#ff0000";

    // setTimeout(function () {
    //   const pos = modelViewer.getCameraOrbit();
    //   if (pos.theta == pos1ThetaPhi.theta && pos.phi == pos1ThetaPhi.phi) {
    //     position1.style.backgroundColor = "#ff0000";
    //     position1.style.borderColor = "#ff0000";
    //   }
    // }, 600);
  } else if (position == "position2") {
    att.value = "auto -180deg 90%";
    modelViewer.setAttributeNode(att);

    position1.style.backgroundColor = "#000";
    position1.style.borderColor = "#0000";
    position3.style.backgroundColor = "#000";
    position3.style.borderColor = "#0000";
    position4.style.backgroundColor = "#000";
    position4.style.borderColor = "#0000";
    position2.style.backgroundColor = "#ff0000";
    position2.style.borderColor = "#ff0000";

    // setTimeout(function () {
    //   const pos = modelViewer.getCameraOrbit();
    //   if (pos.theta == pos2ThetaPhi.theta && pos.phi == pos2ThetaPhi.phi) {
    //     position2.style.backgroundColor = "#ff0000";
    //     position2.style.borderColor = "#ff0000";
    //   }
    // }, 600);
  } else if (position == "position3") {
    const cameraOrbit = modelViewer.getCameraOrbit();
    att.value = "-90deg 170deg 85%";
    modelViewer.setAttributeNode(att);
    position1.style.backgroundColor = "#000";
    position1.style.borderColor = "#0000";
    position2.style.backgroundColor = "#000";
    position2.style.borderColor = "#0000";
    position4.style.backgroundColor = "#000";
    position4.style.borderColor = "#0000";
    position3.style.backgroundColor = "#ff0000";
    position3.style.borderColor = "#ff0000";

    // setTimeout(function () {
    //   const pos = modelViewer.getCameraOrbit();
    //   if (pos.theta == pos3ThetaPhi.theta && pos.phi == pos3ThetaPhi.phi) {
    //     position3.style.backgroundColor = "#ff0000";
    //     position3.style.borderColor = "#ff0000";
    //   }
    // }, 600);
  } else if (position == "position4") {
    const cameraOrbit = modelViewer.getCameraOrbit();
    att.value = "auto auto auto";
    modelViewer.setAttributeNode(att);
    position1.style.backgroundColor = "#000";
    position1.style.borderColor = "#0000";
    position2.style.backgroundColor = "#000";
    position2.style.borderColor = "#0000";
    position3.style.backgroundColor = "#000";
    position3.style.borderColor = "#0000";
    console.log("pos4 theta", cameraOrbit.theta);
    console.log("pos4 phi", cameraOrbit.phi);
    // console.log("position4", modelViewer.getCameraOrbit());
  }
}

modelViewer.addEventListener("progress", (event) => {
  const { totalProgress } = event.detail;
  progress.classList.toggle("show", totalProgress < 1);
  bar.style.transform = `scaleX(${totalProgress})`;
});

modelViewer.addEventListener("mouseout", function (e) {});
