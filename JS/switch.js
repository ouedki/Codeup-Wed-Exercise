'use strict';
var luckyNumber = Math.floor(Math.random()* 6);
var total = 60;
var discountPercent;
var discount;

switch(luckyNumber) {
    case 1:
        discountPercent = 0.1;
        break;
    case 2:
        discountPercent = 0.25;
        break;
    case 4:
        discountPercent = 0.5;
        break;
    case 5:
        discountPercent = 1;
        break;
    default:
        discountPercent = 0;
}

// apply the discountPercent
discount = total * discountPercent;

console.log('Your original price: ' + total);
console.log('Your lucky number is: ' + luckyNumber);
console.log('You get a discount of ' + (discountPercent * 100) + '%.');
console.log('You saved $' + discount + '.');
console.log('You will pay $' + (total - discount) + '.');

console.log("-----------------------------------------------------------");

var monthInNumber = Math.floor(Math.random()* 13);
console.log(monthInNumber);

switch (monthInNumber) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;

    case 4:
        console.log("April");
        break;
    case 5:
        console.log("Mai");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;

    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Try again");
}