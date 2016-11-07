'use strict'

for (var i=1; i<=50; i++) {
    var random = Math.floor((Math.random() * 50) + 1);
    if (random%2==1) {
        console.log("Random odd number to skip is: " + random);
        break;
    }


}

for (var j=1; j<=50; j++) {

    if (j%2 == 0) {
        continue;
    }

    if (j==random) {
        console.log("Yikes! Skipping number: " + j);
    }else {
        console.log("Here is an odd number: " + j);
    }

}