$(document).ready(function() {
    console.log( "ready!" );

// var oneMinute = ; 

// Timer
function startTimer(duration, display) {
    var start = Date.now(),
        diff,
        minutes,
        seconds;
    function timer() {
        // get the number of seconds that have elapsed since 
        // startTimer() was called
        diff = duration - (((Date.now() - start) / 1000) | 0);

        // does the same job as parseInt truncates the float
        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds; 

        if (diff <= 0) {
            // add one second so that the count down starts at the full duration
            // example 05:00 not 04:59
            start = Date.now() + 1000;
        }
    };
    // we don't want to wait a full second before the timer starts
    timer();
    setInterval(timer, 1000);
}

function stopTimer () {
    window.clearTimeout(oneMinute)
    alert('game over!');
}

// Starts timer when webpage loads

window.onload = function () {
        var oneMinute = 5 * 1,
        display = document.querySelector('#time');
    startTimer(oneMinute, display);
        if (oneMinute === 0) {
            stopTimer ();
        }
};


});

// Counters for Game
var numberCorrect = 1;
var numberIncorrect = 1;

// Keep track of correct and incorrect answers
$(".correctAnswer").on("click", function () {
    console.log(numberCorrect++)
    return numberCorrect;
});

$(".incorrectAnswer").on("click", function () {
    console.log(numberIncorrect++)
    return numberIncorrect;
});

