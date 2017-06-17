/**
 * Created by paizhang on 6/16/17.
 */

//alert("John is a type of " + typeof "John" + "\n")

//Simple additon function 
function additon(a, b) {
    return a  + b;
}

//alert(additon(3, 4))

function check_user_age() {
    if (age_of_user() < 18)
        alert("You are not allowed to visit this page!")
}

function age_of_user() {
    var age_text, age;
    age_text = prompt("What is your age?");   //Get user input
    age = parseInt(age_text);
    return age;
}

// check_user_age()

//String
var str = "This cat has a wet!"
result = str.indexOf("cat")
alert(result)

