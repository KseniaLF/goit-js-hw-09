// console.log("1")
// setTimeout(y => {
//     console.log("2")
// console.log(y)}, 2000, 5)
// setTimeout(() => { console.log("3") }, 2000)
// console.log("4")

// const logger = time => {
//     console.log(`${time} ${Date.now()}`)
// }

// const timerId = setTimeout(logger, 2000, "mew");
// console.log(timerId)
// if (false) {
//     clearTimeout(timerId);
// }

// const intervaId = setInterval(logger, 1000, 5)
// if (false) {
//     clearInterval(intervaId);
// }

// ===========

// let timeoutId = null;
// const refs = {
//     notification: document.querySelector(".js-alert")
// };
// refs.notification.addEventListener("click", onNotificClick);

// showNotificClick();

// function onNotificClick() {
//     hideNotification();
//     clearTimeout(timeoutId)
// };

// function showNotificClick() {
//     refs.notification.classList.add("is-visible");
//     timeoutId = setTimeout(hideNotification,3000)
// }

// function hideNotification() {
//     refs.notification.classList.remove("is-visible")
// }



// let promt = 0;
// const intervalId = setInterval(() => {
//     if (promt === 3) {
//         clearInterval(intervalId);
//         return
//     }
//     console.log('ded');
//     promt += 1;
// },2000)





// =================================


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

