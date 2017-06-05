function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    var __timer = setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(__timer);
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var oneMinute = 60 * 1,
        display = document.querySelector('#time');
    startTimer(oneMinute, display);
    console.log('timer started');
};

$(document).ready(function() {
    console.log( "ready!" );

// Counters for Game
var numberCorrect = 0;
var numberIncorrect = 0;

// Keep track of correct and incorrect answers
$(".correctAnswer").on("click", function () {
    console.log(numberCorrect++)
    return numberCorrect;
});

$(".incorrectAnswer").on("click", function () {
    console.log(numberIncorrect++)
    return numberIncorrect;
});
// Click Button that ends game and displays final scores
$("#doneButton").on("click", function(){

    var finalCorrect = ("You answered " + numberCorrect + " questions correctly");
    $("#finalScore").html(finalCorrect);
})

});

