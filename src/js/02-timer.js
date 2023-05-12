import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const selector = document.getElementById('datetime-picker');
const startBtn = document.querySelector('[data-start]');
const date = new Date();
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');
startBtn.disabled = true;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (options.defaultDate > selectedDates[0]) {
        Notify.failure('Please choose a date in the future')
    } else {
      startBtn.disabled = false;
      function createTimer() {
        setInterval(() => {
          let futureDate = new Date(selectedDates[0]);
          let futureDateMs = new Date(selectedDates[0].getTime());

          let distance = futureDateMs - Date.now();
          days.textContent = addLeadingZero(convertMs(distance).days);
          hours.textContent = addLeadingZero(convertMs(distance).hours);
          minutes.textContent = addLeadingZero(convertMs(distance).minutes);
          seconds.textContent = addLeadingZero(convertMs(distance).seconds);
        }, 1000);
      }
      startBtn.addEventListener('click', createTimer);
    }
  },
};
flatpickr(selector, options);
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
function addLeadingZero(value) {
  let newVal = value.toString();
  return newVal.padStart(2, '0');
}
