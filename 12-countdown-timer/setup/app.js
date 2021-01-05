const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

const currentDate = new Date();
const cmonth = currentDate.getMonth() + 1;
const cyear = currentDate.getFullYear();
let futureDate = new Date(cyear, cmonth, 13, 12, 11);
const year = futureDate.getFullYear(); //getHours,getMinutes,getMonth,getDate,getTime

giveaway.textContent = `giveaway ends on ${
  weekdays[futureDate.getDay()]
}, ${futureDate.getDate()} ${months[futureDate.getMonth()]} ${year}`;

getRemainingTime = () => {
  const newDate = new Date();
  const t = futureDate.getTime() - newDate.getTime();
  // 1s=1000ms, 1m=60s, 1hr=60min, 1d=24hrs
  // values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  let days = Math.floor(t / oneDay);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  // set values arrays
  const values = [days, hours, minutes, seconds];
  format = (item) => {
    if (item > 0 && item < 10) {
      return (item = `0${item}`);
    }
    return item;
  };
  items.forEach((item, index) => {
    item.innerHTML = format(values[index]);
  });

  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class ="expired">sorry, this giveaway has expired!</h4>`;
  }
};

// countdown
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();
