const startBtn = document.querySelector("[data-start]");
const stopBtn = document.querySelector("[data-stop]");
const body = document.querySelector("body");

let intervaColors = null;

startBtn.addEventListener("click", changeColorBody)
stopBtn.addEventListener("click", stopChangeColorBody)


function changeColorBody() {
    intervaColors = setInterval(changeColor, 1000);
    startBtn.disabled = true;

}

function changeColor() {
    body.style.backgroundColor = getRandomHexColor();
}

function stopChangeColorBody() {
    clearInterval(intervaColors);
    startBtn.disabled = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

