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
  delay = +delay.value;
  step = +step.value;
  amount = +amount.value;
  for (let i = 1; i <= amount; i++) {
    delay += step;
    setTimeout(() => {
      createPromise(i, delay)
        .then(({ position, delay }) => {
          Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        });
    }, delay);
  }
}
form.addEventListener('submit', formSubmit);
