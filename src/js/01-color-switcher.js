const startRef = document.querySelector('[data-start]');
const stopRef = document.querySelector('[data-stop]');
const bodyRef = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
let intervalId;

const startChangeColor = () => {
  startRef.disabled = true;
  stopRef.disabled = false;
  intervalId = setInterval(() => {
    bodyRef.style.backgroundColor = getRandomHexColor();
  }, 1000);
};

const stopChangeColor = () => {
  startRef.disabled = false;
  stopRef.disabled = true;

  clearInterval(intervalId);
};

startRef.addEventListener('click', startChangeColor);
stopRef.addEventListener('click', stopChangeColor);
