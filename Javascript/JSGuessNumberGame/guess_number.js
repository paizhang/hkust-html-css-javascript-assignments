/**
 * Created by paizhang on 5/29/17.
 */
var target;
var guess_input_text;
var guess_input;
var finished = false;
var guesses = 0;

function do_game () {
    var random_number = Math.random() * 100;
    target = Math.floor(random_number) + 1;
    while (!finished) {
        guess_input_text = prompt("I have a number. Please guess:/n/n");
        guess_input = parseInt(guess_input_text);
        console.log(guess_input);
        guesses++;
        finished = check_number();
    }
}

function check_number() {
    if (isNaN(guess_input)) {
        alert("You have not entered a number!");
        return false;
    }
    if (guesses < 1 && guess_input > 100) {
        alert("Please input a number in the range 1 to 100");
        return false;
    }
    if (guess_input > target) {
        alert("Your number is too large!");
        return false;
    }
    if (guess_input < target) {
        alert("Your number is too small!");
        return false;
    }
    alert("You got it! The number is " + target + ". You guess " + guesses + " times. ");
    return true;
}

