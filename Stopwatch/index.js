let secondsElapsed =0;
let interval=null;

const time =document.getElementById("time");

function setTime(){
    time.innerHTML=secondsElapsed
}

function timer(){
    secondsElapsed++;
    setTime();
   
    
}

function startClock(){
    interval=setInterval(timer,1000);

}


function stopClock(){}
function resetClock(){}