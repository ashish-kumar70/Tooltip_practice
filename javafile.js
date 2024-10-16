let a = document.querySelector("#maincontent");
let b = document.querySelector("#showme");
let c = document.querySelector("#cross_img");
function showPopup() {
  if (a.style.display == "none") {
    a.style.display = "block";
  } else {
    a.style.display = "none";
  }
  b.style.display = "inline-block";
  // b.style.justify-content = "center";
  c.style.display = "block";
  c.style.float = "right";
  a.style.transition = "all 5s ease-out";
}

function closePopup() {
  c.style.display = "none";
  b.style.display = "none";
  a.style.display = "inline-block";
  // a.style.align-items = "center";
}
function myfunction(show) {
  if (show) {
    a.style.visibility = "visible";
  }
}
