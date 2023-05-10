function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
let intervalId = null;
stopBtn.disabled = true;

startBtn.addEventListener('click', () => {
  stopBtn.disabled = false;
  startBtn.disabled = true;

  intervalId = setInterval(() => {
    document.body.style.background = getRandomHexColor();
  }, 1000);
});
stopBtn.addEventListener('click', () => {
  startBtn.disabled = false;
  stopBtn.disabled = true;

  clearInterval(intervalId);
});
