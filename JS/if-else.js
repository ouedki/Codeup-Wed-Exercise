'use strict';
var grades = (70+80+95)/3;
if (grades>80) {
    console.log("You're awesome");
}else {
    console.log("You need to practice more");
}

var ryan = "Ryan";
var cameron = "Cameron";
var george = "George";
var amountSpentByRyan = 250;
var amountSpentByCameron = 180;
var amountSpentByGeorge = 320;
var discount = 20;
var amount;


if (amountSpentByRyan>200) {
    amount = -(discount * amountSpentByRyan*0.01)+amountSpentByRyan;
    console.log(ryan + " you have spent " + amountSpentByRyan + " and your total after discount is: " + amount);
}else {
    console.log(ryan + " your total is " + amountSpentByRyan);
}
if (amountSpentByCameron>200) {
    amount= -(discount * amountSpentByCameron*0.01)+amountSpentByCameron;
    console.log(cameron + " you have spent " + amountSpentByCameron + " and your total after discount is: " + amount);
}else {
    console.log(cameron + " your total is " + amountSpentByCameron);
}
if (amountSpentByGeorge>200) {
    amount= -(discount * amountSpentByGeorge*0.01)+amountSpentByGeorge;
    console.log(george + " you have spent " + amountSpentByGeorge + " and your total after discount is: " + amount);
}else {
    console.log(george + " your total is " + amountSpentByGeorge);
}

var flipACoin = Math.floor(Math.random()* 2);
console.log("the random number is: " + flipACoin);
if (flipACoin==0) {
    console.log("Buy a car");
}else {
    console.log("Buy a house");
}