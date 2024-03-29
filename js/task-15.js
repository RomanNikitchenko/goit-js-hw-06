const timer = document.querySelectorAll(".present__countdown"); 
const sdays = document.querySelectorAll("[data-days]"); 
const shours = document.querySelectorAll("[data-hours]"); 
const sminutes = document.querySelectorAll("[data-minutes]"); 
const sseconds = document.querySelectorAll("[data-seconds]"); 

let timerId = null;

const appointedTime = new Date(Date.UTC(2023, 3, 4, 22, 59, 59, 999));
appointedTime.setHours(appointedTime.getHours() - 2);

timerId = setInterval(() => {
  const subtractTime = appointedTime - new Date();

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
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );
  return { days, hours, minutes, seconds };
}
