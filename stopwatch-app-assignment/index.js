// TODO: answer here
let hour = 0;
let minute = 0;
let second = 0;
let stoptime = true;
let stopwatch = document.getElementById("stopwatch");
let startbtn = document.getElementsByClassName("btn-start")[0];
let stopbtn = document.getElementsByClassName("btn-stop")[0];
let resetbtn = document.getElementsByClassName("btn-reset")[0];

startbtn.addEventListener("click", start);
stopbtn.addEventListener("click", stop);
resetbtn.addEventListener("click", reset);


function start() {
  // TODO: answer here
 if (stoptime == true) {
  stoptime = false;
  runTime();
  }
}

function stop() {
  // TODO: answer here
 if (stoptime == false) {
  stoptime = true;
  }
}

function reset() {
  // TODO: answer here
  stopwatch.innerHTML = "00:00:00";
  stoptime = true;
  hour = 0;
  minute = 0;
  second = 0;
}

function runTime() {
  // TODO: answer here
  if (stoptime == false) {
    hour = parseInt(hour);
    minute = parseInt(minute);
    second = parseInt(second);

    second++;

    if (second == 60) {
      minute++;
      second = 0;
    } else if (minute == 60) {
      hour++;
      minute = 0;
      second = 0;
    } 
    if (hour < 10) {
      hour = "0" + hour;
    }
    if (minute < 10) {
      minute = "0" + minute;
    }
    if (second < 10) {
      second = "0" + second;
    }
  stopwatch.innerHTML = hour + ":" + minute + ":" + second;
  setTimeout(runTime, 100);
  }
  

}