let timer = document.getElementById("timer");
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");

let startTime = 0;
let elapsedTime = 0;
let timeInterval;

function updateTime(){
    elapsedTime = Date.now() - startTime;
    let totalSecond = Math.floor(elapsedTime / 1000);
    let hour = Math.floor(totalSecond / 3600);
    let minute = Math.floor((totalSecond % 3600) /60);
    let second = Math.floor(totalSecond % 60);
    let milliseconds =  Math.floor((elapsedTime % 1000) / 10);

    timer.textContent =  (
        (hour ? (hour > 9 ? hour : "0" + hour) : "00") +
        ":" +
        (minute ? (minute > 9 ? minute : "0" + minute) : "00") +
        ":" +
        (second ? (second > 9 ? second : "0" + second) : "00") +
        "." +
        (milliseconds > 9 ? milliseconds : "0" + milliseconds)
      );
    
    // const formattedMilliseconds = String(milliseconds).padStart(2, '0');
    // const formattedSeconds = String(second).padStart(2, '0');
    // const formattedMinutes = String(minute).padStart(2, '0');
    // const formattedHours = String(hour).padStart(2, '0');

    // timer.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}:${formattedMilliseconds}`;
}

function startTimer(){
    startTime = Date.now() - elapsedTime;
    timeInterval = setInterval(updateTime, 10); 
    startBtn.disabled = true;
    stopBtn.disabled = false;
    resetBtn.disabled = false;
}

function stopTimer(){
    clearInterval(timeInterval);
    startBtn.disabled = false;
    stopBtn.disabled = true;
}

function resetTimer(){
    clearInterval(timeInterval);
    elapsedTime = 0;
    timer.textContent = '00:00:00';
    startBtn.disabled = false;
    stopBtn.disabled = true;
    // resetBtn.disabled = true;
}
startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);