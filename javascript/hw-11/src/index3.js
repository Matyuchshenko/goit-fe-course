const getTimeRemaining = (endTime) => {
  const time = Date.parse(endTime) - Date.parse(new Date());
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const minutes = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const seconds = pad(Math.floor((time % (1000 * 60)) / 1000));
  return {
    time,
    days,
    hours,
    minutes,
    seconds,
  };
};

const pad = value => {
  return String(value).padStart(2, 0);
};

const initializeClock = (id, endTime) => {
  const clock = document.getElementById(id);
  const daysSpan = clock.querySelector('[data-value="days"]');
  const hoursSpan = clock.querySelector('[data-value="hours"]');
  const minutesSpan = clock.querySelector('[data-value="mins"]');
  const secondsSpan = clock.querySelector('[data-value="secs"]');

  const updateClock = () => {
    const time = getTimeRemaining(endTime);
    daysSpan.textContent = time.days;
    hoursSpan.textContent = time.hours;
    minutesSpan.textContent = time.minutes;
    secondsSpan.textContent = time.seconds;
    if (time.total <= 0) {
      clearInterval(timeInterval);
    };
  };
  updateClock();
  const timeInterval = setInterval(updateClock, 1000);
};

const deadLineFormat = new Date(Date.parse('October 30, 2020'));
initializeClock('timer-1', deadLineFormat);