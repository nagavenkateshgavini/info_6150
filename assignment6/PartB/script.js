let start_time = 0;
let elapsed_time = 0;
let current_time = 0;
let paused = true;

const time_display = document.querySelector("#time_display");
const BtnStart = document.querySelector("#BtnStart");
const BtnPause = document.querySelector("#BtnPause");
const BtnReset = document.querySelector("#BtnReset");

let interval_Id;
let hours = 0;
let minutes = 0;
let seconds = 0;

// This funtion is to update the time in web page
const updateTime = () => {
  elapsed_time = Date.now() - start_time;

  seconds = Math.floor((elapsed_time / 1000) % 60);
  minutes = Math.floor((elapsed_time / (1000 * 60)) % 60);
  hours = Math.floor((elapsed_time / (1000 * 60 * 60)) % 60);

  seconds = showZero(seconds);
  minutes = showZero(minutes);
  hours = showZero(hours);

  time_display.textContent = `${hours}:${minutes}:${seconds}`;
};

// This funtion is to pause the time
BtnPause.addEventListener("click", () => {
  if (!paused) {
    paused = true;
    elapsed_time = Date.now() - start_time;
    clearInterval(interval_Id);
  }
});

// This function is to Start the time
BtnStart.addEventListener("click", () => {
  if (paused) {
    paused = false;
    start_time = Date.now() - elapsed_time;
    interval_Id = setInterval(updateTime, 1000);
  }
});

// This funtion is to reset the time
BtnReset.addEventListener("click", () => {
  paused = true;
  clearInterval(interval_Id);
  start_time = 0;
  elapsed_time = 0;
  current_time = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;
  time_display.textContent = "00:00:00";
});

const showZero = (unit) => {
  return ("0" + unit).length > 2 ? unit : "0" + unit;
};



