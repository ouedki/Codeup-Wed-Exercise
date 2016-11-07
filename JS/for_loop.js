'use strict';

var number = Math.floor(Math.random() * 10) + 1;
var multiply;
for (var i=1; i<=10; i++) {
    multiply=number*i;
    console.log(number + "x" +i + "=" + multiply);
}

console.log("****************************");

for (var j=100; j>=5; j-=5) {
    console.log(j);
}

console.log("****************************");


for (var z=0; z<10; z++) {
    var random = Math.floor(Math.random() * 180) + 20;
    if (random%2==0)
        console.log(random + ' is even');
    else {
        console.log(random + ' is odd');
    }
}

console.log("****************************");

var multiply2;
for (var a=1; a<=12; a++) {
    for(var b=1; b<=10; b++) {
        multiply2 = a * b;
        console.log(a + "x" + b + "=" + multiply2);
    }
}

console.log("****************************");

for (var c=1; c<=5; c++) {
    if(c==1) {
        console.log('  *  ');
    } else if (c==2) {
        console.log(' *** ');
    } else if (c==3) {
        console.log('*****');
    } else if (c==4) {
        console.log(' *** ');
    }else {
        console.log('  *  ');
    }

}