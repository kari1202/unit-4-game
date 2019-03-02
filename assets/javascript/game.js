
var randomNumber = 0;
var diamondRandom = 0;
var triangleRandom = 0;
var circleRandom = 0;
var squareRandom = 0;
var total = 0;
var wins = 0;
var losses = 0;
var gameStarted = false;

$(".btn-primary").click(startGame);

$("#diamond-img").click(function() {
    recordCrystal('diamond')
});
$("#triangle-img").click(function() {
    recordCrystal('triangle')
});
$("#circle-img").click(function() {
    recordCrystal('circle')
});
$("#square-img").click(function() {
    recordCrystal('square')
});


function recordCrystal(shape) {

    if (gameStarted) {
        console.log("hit record crystal");

        switch(shape) {
            case "diamond" :
                total += diamondRandom;
                console.log("Diamond random is " + diamondRandom);
                console.log("Hit diamond and total is " + total);
                break;
            case "triangle" :
                total += triangleRandom;
                break;
            case "circle" :
                total += circleRandom;
                break;
            case "square" :
                total += squareRandom;
                break;
        }

        $("#display-total").text(total);

        if (total === randomNumber) {
            wonGame();
        } else if (total > randomNumber) {
            lostGame();
        }

        console.log("This is working!");
        console.log("I've got a " + shape);
    } else {
        alert("You must start the game first by clicking the 'Start Game' button");
        }
}

function startGame() {

    console.log("Starting game");
    gameStarted = true;
    total = 0;
    randomNumber = Math.floor((Math.random() * 101) + 1) + 19;
    diamondRandom = Math.floor((Math.random() * 12) + 1);
    triangleRandom = Math.floor((Math.random() * 12) + 1);
    circleRandom = Math.floor((Math.random() * 12) + 1);
    squareRandom = Math.floor((Math.random() * 12) + 1);

    $("#display-random").text(randomNumber);
    console.log("Random number is " + randomNumber);

}

function wonGame() {
    wins++;
    $("#display-wins").text(wins);
    gameStarted = false;
}

function lostGame() {
    losses++;
    $("#display-losses").text(losses);
    gameStarted = false;
}

