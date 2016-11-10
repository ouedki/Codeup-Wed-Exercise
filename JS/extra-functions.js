'use strict';

var operation = prompt("Please choose between Add, Subtract, Divide or Multiply.");
while (!(a/1 ==a)) {
    var a = parseFloat(prompt("Please enter the First Number"));
}
while (!(a/1 ==a)) {
    var b = parseFloat(prompt("Please enter the second Number"));
}

function add(a, b) {
    return a+b;
}
// add(a, b);

function subtract(a, b) {
    return add(a, (b * -1));
}
// subtract(a, b);

function divide(a, b) {
    return a/b;
}
// divide(a, b);

function multiply(a, b) {
    var res = 0;
    for(var i = 0;i<b;i++){
        res += a;
    }
    return res;
}
// multiply(a, b);

if (operation=="add") {
    console.log(add(a, b));
}else if (operation=="subtract") {
    console.log(subtract(a, b));

}else if (operation=="divide") {
    console.log(divide(a, b));

}
else if (operation=="multiply") {
    console.log(multiply(a, b));

}





