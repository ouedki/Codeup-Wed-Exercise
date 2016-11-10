'use strict';

// var ryan = "Ryan";
// var cameron = "Cameron";
// var george = "George";
// var amountSpentByRyan = 250;
// var amountSpentByCameron = 180;
// var amountSpentByGeorge = 320;
// var discount = 20;
// var amount;


// if (amountSpentByRyan>200) {
//     amount = -(discount * amountSpentByRyan*0.01)+amountSpentByRyan;
//     console.log(ryan + " you have spent " + amountSpentByRyan + " and your total after discount is: " + amount);
// }else {
//     console.log(ryan + " your total is " + amountSpentByRyan);
// }
// if (amountSpentByCameron>200) {
//     amount= -(discount * amountSpentByCameron*0.01)+amountSpentByCameron;
//     console.log(cameron + " you have spent " + amountSpentByCameron + " and your total after discount is: " + amount);
// }else {
//     console.log(cameron + " your total is " + amountSpentByCameron);
// }
// if (amountSpentByGeorge>200) {
//     amount= -(discount * amountSpentByGeorge*0.01)+amountSpentByGeorge;
//     console.log(george + " you have spent " + amountSpentByGeorge + " and your total after discount is: " + amount);
// }else {
//     console.log(george + " your total is " + amountSpentByGeorge);
// }
//
// var flipACoin = Math.floor(Math.random()* 2);
// console.log("the random number is: " + flipACoin);
// if (flipACoin==0) {
//     console.log("Buy a car");
// }else {
//     console.log("Buy a house");
// }



var shopperName = prompt("Please enter your name");
var groceryTotal= prompt("Please enter the amount that you have spent?");
var amount;
var discountPercent = 0.2;

function calculateHEBDiscount(shopperName, groceryTotal, discountPercent) {

    if (groceryTotal>200) {
        amount = groceryTotal-(discountPercent * groceryTotal);

    }else {
        amount= groceryTotal;
    }
    return amount;

}
var result = calculateHEBDiscount(shopperName, groceryTotal, discountPercent);
console.log(shopperName + "'s total is " + groceryTotal + " he will pay " + result);




console.log("******************************");

// will take in two strings, and randomly pick one of the two strings to return


function decideBetweenOptions(theFirstOption, theSecondOption) {
    var rand = Math.floor((Math.random() * 1) + 0);
    // (rand) ? return theFirstOption : return theSecondOption;
    if (rand) {
        return theFirstOption;
    } else {
        return theSecondOption;
    }
}
var chosenOption = decideBetweenOptions("option 1", "option 2");
console.log(chosenOption);

console.log("******************************");

// will take in a lucky number and a total, and return the new total
// applying a discount based on the lucky number (possibly none at all)

var luckyNumber = Math.floor(Math.random() * 5) + 1;
console.log("your Lucky number is: " + luckyNumber);

function applyLuckyNumberDiscount(luckyNumber, totalBeforeDiscount) {
    var total;
    switch(luckyNumber){
        case 1:
            return total= totalBeforeDiscount - (totalBeforeDiscount*0.1);
            break;
        case 2:
            return total= totalBeforeDiscount - (totalBeforeDiscount*0.25);
            break;
        case 4:
            return total= totalBeforeDiscount - (totalBeforeDiscount*0.5);
            break;
        case 5:
            return total= totalBeforeDiscount - (totalBeforeDiscount*1);
            break;
        default:
            return total= totalBeforeDiscount;
    }

}

var priceAfterDiscount = applyLuckyNumberDiscount(luckyNumber, 60);
console.log('You will pay ' + priceAfterDiscount);



console.log("******************************");


// will take in a starting number of cones and simulate customers coming and buying cones
// it's okay to console.log here
var allCones = Math.floor(Math.random() * 50) + 50;
console.log('The total cones to sell are' + allCones);
function sellCones(coneTotal) {
    do {
        var cones = Math.floor(Math.random() * 5) + 1;
        if (cones > coneTotal) {
            console.log("I cannot sell you " + cones + ", I only have " + coneTotal + " left.")
        } else {
            coneTotal -= cones;
            console.log("I sold " + cones + " cones.");
        }
    } while (coneTotal > 0){
        console.log("Yay! I sold them all!");
    }
}


sellCones(allCones);

// skip the last one with the powers of two




console.log("******************************");

// will take in a number and generate multiplication tables for it
// okay to console.log in this one
var res;
function generateMultiplicationTables(number){
    for (var i = 1; i<=10; i++) {
        res = number*i;
        console.log(number + "x" +i + "=" + res);
    }
}
generateMultiplicationTables(9);




console.log("******************************");

// skip number Ex. 3

// will count down from the start number to the stop number
// by step
// console.log is okay here
// ex. countDown(6, 0, 2); output is below
//     6
//     4
//     2
//     0
function countDown(start, stop, step) {
for (var i=start; i>=stop; i-=step) {
    console.log(i)
}
}
countDown(50, 0, 5);



console.log("******************************");


// BONUS
// =====
// rewrite generateMultiplicationTables to take in two numbers and show all
// of the multiplication tables for the combination of those two
// ex. generateMultiplicationTables(2,3); // will output
//     1 x 1 = 1
//     1 x 2 = 2
//     1 x 3 = 3
//     2 x 1 = 2
//     2 x 2 = 4
//     2 x 3 = 6
//
// make your countDown function more generic
//  - it should take in any two numbers in any order and count either down
//    or up by the step depending on which is greater

function generateMultiplicationTables2(y,z) {
    var multiply2;
    for (var a = 1; a <= y; a++) {
        for (var b = 1; b <= z; b++) {
            multiply2 = a * b;
            console.log(a + "x" + b + "=" + multiply2);
        }
    }
}
generateMultiplicationTables2(5, 7)