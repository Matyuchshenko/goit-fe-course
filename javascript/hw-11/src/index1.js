const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const startBtnRef = document.querySelector('[data-action="start"]');
const stopBtnRef = document.querySelector('[data-action="stop"]');

const getRandomColor = () => {
  const color = colors[randomIntegerFromInterval(0, 5)];
  console.log(color);
  document.body.style.backgroundColor = color;
};

let intervalId = null;

const onClickStart = () => {
  intervalId = setInterval(getRandomColor, 1000);
  startBtnRef.disabled = true;
};

const onClickStop = () => {
  if (intervalId) {
    clearInterval(intervalId);
    startBtnRef.disabled = false;
  }
};

startBtnRef.addEventListener('click', onClickStart);
stopBtnRef.addEventListener('click', onClickStop);