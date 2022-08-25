"use script";

const hr = document.querySelector(".hour");
const min = document.querySelector(".min");
const sec = document.querySelector(".secs");

const clock = function () {
  const day = new Date();
  const seconds = day.getSeconds();

  const secondsDegree = (seconds / 60) * 360 + 90;
  sec.style.transform = `rotate(${secondsDegree}deg)`;

  const minutes = day.getMinutes();
  const minutesDegree = (minutes / 60) * 360 + (seconds / 60) * 6;
  min.style.transform = `rotate(${minutesDegree}deg)`;

  const hour = day.getHours();
  const hourDegree = (hour / 12) * 360 + (minutes / 60) * 30;
  hr.style.transform = `rotate(${hourDegree}deg)`;

  console.log(hour, minutes, seconds);
};

setInterval(clock, 1000);
clock();
