(function(){
    "use strict";

    // TODO: Create an array of 4 people's names using literal array notation, in a variable called 'names'.
    var names = ["Jesse", "Mike", "Alex", "Tim"];

    // TODO: Create a log statement that will log the number of elements in the names array.
    console.log(names.length);

    // TODO: Create log statements that will print each of the names array elements individually.
    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);

    console.log("***************");
    console.log("Using For Loop.");
    console.log("***************");

    for(var i = 0; i<names.length; i+=1) {
        console.log(names[i]);
    }

    console.log("*******************");
    console.log("Using ForEach Loop.");
    console.log("*******************");

    names.forEach(function(name){
        console.log(name);
    })

    console.log("****************");
    console.log("Using a function");
    console.log("****************");

    function forEach (fnct, arry) {
        for (var j=0; j<arry.length; j+=1) {
            fnct(arry[j]);
        }

    }
    forEach(function(name){
        console.log(name)
    } ,names)

})();
