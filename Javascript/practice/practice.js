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
//alert(result)

// For loop
var arr = ["one", "two", "three", "four", "five"];
for (var index = 0;index < arr.length;index++) {
    //alert(arr[index]);
}

for (var index in arr) {
    //alert(arr[index]);
}

for (var element of arr) {
    //alert(element);
}

// Array sort
var chars = ["c", "d", "e", "a", "b"];
chars.sort();
//alert(chars.join());

// Array reverse
chars.reverse();
//alert(chars.join());

// Array searching
//alert(chars.indexOf("c"));

// Array slice
var chs = ["one", "two", "three", "four", "five"];
var new_chs = chs.slice(1,4);
//alert(chs);

// Array splice().  This method returns extracted elements and change the original array.
var chs_splice = chs.splice(1,1);
//alert(chs);

chs.splice(1,0,"two");   // splice() can also be used to insert a element in a array. array.splice(position, 0, element).
//alert(chs);

chs.splice(1,1,"two1", "two2");   // splice() can be used to replace. array.splice(position, quantity, element(s)).
//alert(chs);

// Array forEach function.
var nums = [1,2,3,4,5];
nums.forEach(function (element, index, arr) {
    arr[index] = element * element;
});
//alert(nums);

// Array mapping function
var nums_arr = [1,2,3,4,5];
var new_arr = nums_arr.map(function (element, index, arr) {
    return element * element;
});
alert(nums_arr);

