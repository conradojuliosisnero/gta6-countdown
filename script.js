// elements
const clock = document.querySelector(".clock");
const indicators = document.querySelector(".indicators_clock");
const indicator = document.querySelectorAll(".indicator");
const numbers = document.querySelector(".numbers_clock_box");
const number = document.querySelectorAll(".number");

const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

// function for countdown
function updateCountdown() {
  const targetDate = new Date("September 22, 2025 00:00:00").getTime();
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  daysElement.innerHTML = days;
  hoursElement.innerHTML = hours;
  minutesElement.innerHTML = minutes;
  secondsElement.innerHTML = seconds;

  if (distance < 0) {
    clearInterval(countdownInterval);
    clock.innerHTML = "La espera ha terminado";
  }
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();


