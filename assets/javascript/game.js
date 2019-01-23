$(document).ready(function () {
    var wins= 0;
    var losses= 0;
    var computer_guess= 0;
    var user_guess= 0;

    var $wins = document.getElementById("wins");
    var $losses = document.getElementById("losses");
    var $computer_guess = document.getElementById("computer_guess");
    var $user_guess = document.getElementById("user_guess");





// function getRandomArbitrary(){
    // return Math.random() * (max - min) + min;
// }

//initiating computer_guess
var computer_guess = Math.floor(Math.random() * 101) + 19;

console.log(computer_guess);
$("#computer_guess").append("" + computer_guess);

var jewelButton1 = Math.floor(Math.random()* 12) + 1;
console.log(jewelButton1);

$("#button1").on("click", function () {
    console.log(jewelButton1);
    user_guess += jewelButton1;
    $($user_guess).text(user_guess);
    match();

});

var jewelButton2 = Math.floor(Math.random()* 12) + 1;
console.log(jewelButton2);

$("#button2").on("click", function () {
    console.log(jewelButton2);
    user_guess += jewelButton2;
    $($user_guess).text(user_guess);
    match();
});

var jewelButton3 = Math.floor(Math.random()* 12) + 1;
console.log(jewelButton3);

$("#button3").on("click", function () {
    console.log(jewelButton3);
    user_guess += jewelButton3;
    $($user_guess).text(user_guess);
    match();
});

var jewelButton4 = Math.floor(Math.random()* 12) + 1;
console.log(jewelButton4);

$("#button4").on("click", function () {
    console.log(jewelButton4);
    user_guess += jewelButton4;
    $($user_guess).text(user_guess);
    match();
});

function match(){
    if(user_guess === computer_guess){
    wins++;
    console.log(wins + "wins");
    $($wins).text(wins);
    user_guess = 0;
    computer_guess = Math.floor(Math.random() * 101) + 19;
    jewelButton1 = Math.floor(Math.random()* 12) + 1;
    jewelButton2 = Math.floor(Math.random()* 12) + 1;
     jewelButton3 = Math.floor(Math.random()* 12) + 1;
    jewelButton4 = Math.floor(Math.random()* 12) + 1;

    
    computer_guess = Math.floor(Math.random() * 101) + 19;

    console.log(computer_guess);
    $("#computer_guess").empty();
    $("#computer_guess").append("" + computer_guess);

    }
    else if(user_guess > computer_guess){
    losses++;
    console.log(losses + "losses");
    $($losses).text(losses);
    user_guess = 0;

    jewelButton1 = Math.floor(Math.random()* 12) + 1;
    jewelButton2 = Math.floor(Math.random()* 12) + 1;
    jewelButton3 = Math.floor(Math.random()* 12) + 1;
    jewelButton4 = Math.floor(Math.random()* 12) + 1;

    
    computer_guess = Math.floor(Math.random() * 101) + 19;

    console.log(computer_guess);
    $("#computer_guess").empty();
    $("#computer_guess").append("" + computer_guess); 

    }

    

};


})
