import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

let selectedTimes = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        selectedTimes = selectedDates[0].getTime();

        if (selectedTimes < Date.now()) {
            refs.startTimer.disabled = true;
            alert("Please choose a date in the future")
        } else {
            refs.startTimer.disabled = false;
        }
    },
};

flatpickr("#datetime-picker", options)


const refs = {
    startTimer: document.querySelector("[data-start]"),
}

refs.startTimer.disabled = true;

const timer = {
    intervalId: null,

    start() {
        refs.startTimer.disabled = true;


        this.intervalId = setInterval(() => {
            const currentTime = Date.now();
            const differenceTime = selectedTimes - currentTime;

            if (differenceTime <= 0) {
                timer.stop();
                return;
                
            }

            const { days, hours, minutes, seconds } = convertMs(differenceTime);
            // console.log(`${days}:${hours}:${minutes}:${seconds}`)

            document.querySelector("[data-days]").textContent = addLeadingZero(days);
            document.querySelector("[data-hours]").textContent = addLeadingZero(hours);
            document.querySelector("[data-minutes]").textContent = addLeadingZero(minutes);
            document.querySelector("[data-seconds]").textContent = addLeadingZero(seconds);
            
        }, 1000);
    },
    stop() {
        clearInterval(this.intervalId);
    }
}

refs.startTimer.addEventListener("click", () => timer.start())

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    return String(value).padStart(2, "0")
}