import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

let step = document.querySelector('.step');
let delay = document.querySelector('.delay');
let amount = document.querySelector('.amount');
const form = document.querySelector('.form');
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    if (shouldResolve) {
      resolve({ position, delay });
    } else {
      reject({ position, delay });
    }
  });
}
function formSubmit(e) {
  e.preventDefault();
  step = +step.value;
  amount = +amount.value;
  delay = +delay.value;
  for (let i = 1; i <= amount; i++) {
    let newDelay = delay;
    setTimeout(() => {
      createPromise(i, newDelay)
        .then(({ position, delay }) => {
          Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        });
    }, delay);
    delay += step;
  }
}
form.addEventListener('submit', formSubmit);
