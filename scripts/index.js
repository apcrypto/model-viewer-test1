let toolbar = document.querySelector(".toolbar");
let wrapper = document.querySelector(".model-viewer-wrapper");
let modelViewer = document.querySelector("#orbit-test");
toolbar.addEventListener("click", eventHandler);

function eventHandler(e) {
  let position = e.target.attributes[0].value;
  let att = document.createAttribute("camera-orbit");
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
