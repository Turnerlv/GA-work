// Try making the traffic light work - Think through the problem BEFORE you code!
// You'll use addEventListener and getElementById if you're doing it right...

//function that turns off all other lights

function turnOff(){
    document.querySelector('#stopLight').classList.remove('stop');
    document.querySelector('#slowLight').classList.remove('slow');
    document.querySelector('#golight').classList.remove('go');
}

//go function

function go(){
    turnOff;
    document.getElementById('goLight').classList.add('go');
    console.log("it works");
}

//slow function

function slow(){
    turnOff;
    document.getElementById('slowLight').classList.add('slow');
}

//stop function

function stop(){
    document.turnOff();
    document.getElementById('stopLight').classList.add('stop');
}

//bind to clicks

document.getElementById('stopButton').addEventListener('click', stop);
document.getElementById('slowButton').addEventListener('click', slow);
document.getElementById('goButton').addEventListener('click', go);
