'use strict'
var grades = 82;
if (grades>80) {
    console.log("You're awesome");
}else {
    console.log("You need to practice more");
}

var name1 = "Ryan";
var name2 = "Cameron";
var name3 = "George";
var amoutSpentByRyan = 250;
var amoutSpentByCameron = 180;
var amoutSpentByGeorge = 320;
var discount = 20;
var amount;


if (amoutSpentByRyan>200) {
    amount = -(discount * amoutSpentByRyan*0.01)+amoutSpentByRyan
    console.log(name1 + " you have spent " + amoutSpentByRyan + " your total after discount is: " + amount );
}else {
    console.log(name1 + " your total is " + amoutSpentByRyan);
}
if (amoutSpentByCameron>200) {
    amount= -(discount * amoutSpentByRyan*0.01)+amoutSpentByRyan
    console.log(name2 + " you have spent " + amoutSpentByCameron + " your total after discount is: " + amount );
}else {
    console.log(name2 + " your total is " + amoutSpentByCameron);
}
if (amoutSpentByGeorge>200) {
    amount= -(discount * amoutSpentByGeorge*0.01)+amoutSpentByGeorge;
    console.log(name3 + " you have spent " + amoutSpentByGeorge + " your total after discount is: " + amount );
}else {
    console.log(name3 + " your total is " + amoutSpentByGeorge);
}

var flipACoin = Math.floor(Math.random()* 2);
console.log("the random number is: " + flipACoin);
if (flipACoin==0) {
    console.log("Buy a car");
}else {
    console.log("Buy a house");
}