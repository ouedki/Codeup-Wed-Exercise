'use strict';

console.log("Using While loop.");

var allCones = Math.floor(Math.random() * 50) + 50;
console.log(allCones);

while (allCones > 0) {
    var cones = Math.floor(Math.random() * 5) + 1;
    if (cones > allCones) {
        console.log("I cannot sell you " + cones + ", I only have " + allCones + " left.")
    } else {
        allCones -= cones;
        console.log("I sold " + cones + " cones.");
    }
}
console.log("Yay! I sold them all!")

console.log("Using Do While loop.");

    var allCones = Math.floor(Math.random() * 50) + 50;
    console.log(allCones);

do {
    var cones = Math.floor(Math.random() * 5) + 1;
    if (cones > allCones) {
        console.log("I cannot sell you " + cones + ", I only have " + allCones + " left.")
    } else {
        allCones -= cones;
        console.log("I sold " + cones + " cones.");
    }
} while (allCones > 0){
    console.log("Yay! I sold them all!");
}

console.log("-------------------------------------");

var i = 2;
while (i<=65536) {
    console.log(i);
    i*=2;

}