(() => {
  const timer = document.querySelectorAll('.present__countdown');
  const sdays = document.querySelectorAll('[data-days]');
  const shours = document.querySelectorAll('[data-hours]');
  const sminutes = document.querySelectorAll('[data-minutes]');
  const sseconds = document.querySelectorAll('[data-seconds]');

  let timerId = null;

  let dateBase = '2024-03-31 00:00:00';
  const appointedTime = moment(dateBase, 'YYYY-MM-DD HH:mm:ss');

  timerId = setInterval(() => {
    const subtractTime = moment(appointedTime).diff(moment(), 'milliseconds');

    if (subtractTime <= 0) {
      clearInterval(timerId);
      return;
    }

    const time = convertMs(subtractTime);

    timeDisplays(time);
  }, 1000);

  function timeDisplays({ days, hours, minutes, seconds }) {
    for (let i = 0; i < timer.length; i += 1) {
      sdays[i].textContent = `${days}`;
      shours[i].textContent = `${hours}`;
      sminutes[i].textContent = `${minutes}`;
      sseconds[i].textContent = `${seconds}`;
    }
  }

  function addLeadingZero(value) {
    return String(value).padStart(2, '0');
  }

  function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = addLeadingZero(Math.floor(ms / day));
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

    return { days, hours, minutes, seconds };
  }
})();
