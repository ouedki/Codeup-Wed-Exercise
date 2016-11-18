(function () {
    "use strict";

// write a function `chunk` that splits an array into chunks of 3


    function chunk(array, size) {
        var results = [];
        while (array.length) {
            results.push(array.splice(0, size));
        }
        console.log(results)

    }

    chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);


    console.log("_____________________________________");

// write a function that generates a range of numbers as an array

    function range(x, y, z) {

        var arry = [];
        for (var i = x; i < y; i += z) {
            arry.push(i);
        }
        console.log(arry);

    }

    range(2, 11, 2);

    console.log("_____________________________________");


// write a function that takes an array, and returns an object
// whose keys are each value in the array, and whose values
// are the number of occurances of each key
// ex
// > getCount([6, 7, 4, 4])
// {6: 1, 7: 1, 4: 2}

    var counts = {};

    function occurn(arr1) {

        for (var i = 0; i < arr1.length; i++) {
            var num = arr1[i];
            counts[num] = counts[num] ? counts[num] + 1 : 1;
        }
        console.log(counts);
    }

    occurn([1, 1, 5, 5, 2, 2, 5, 2, 9, 4, 3, 3, 3, 3, 3, 3]);


    console.log("_____________________________________");

// convert back and forth from 24 hour to 12 hour time with 2 functions
// ex
// convertToTwentyFourHour('1:30pm') // 13:30
// convertToTwelveHourTime('14:40') // 2:20pm


    var format24 = document.getElementById('format_24');
    var format12 = document.getElementById('format_12');
    var hours = document.getElementById('hours');
    var minutes = document.getElementById('minutes');

    function convertToTwentyFourHour() {

    }

    format24.addEventListener('click', convertToTwentyFourHour);

    function convertToTwelveHourTime() {

    }

    format12.addEventListener('click', convertToTwelveHourTime);

    //------------------puppies-------------------

    var puppies = [
        {
            name: 'muffins',
            description: 'this dog is as cute as a muffin!',
            image_url: 'http://placehold.it/500',
            spayed: true
        },
        {
            name: 'buddy',
            description: 'buddy is just waiting to be your best friend!',
            image_url: 'http://placehold.it/500',
            spayed: false
        },
        {
            name: 'ein',
            description: 'this corgi has quite seems like he\'s seen outer space...',
            image_url: 'http://placehold.it/500',
            spayed: true
        },
        {
            name: 'nibler',
            description: 'this puppy like to nibble, but she won\'t bite!',
            image_url: 'http://placehold.it/500',
            spayed: false
        }
    ];

    var puppiesHtml = '';

    puppies.forEach(function (puppy) {
        puppiesHtml += '<div>';
        puppiesHtml += '<h2>' + puppy.name + '</h2>';
        puppiesHtml += '<img src="' + puppy.image_url + '">';
        puppiesHtml += '<p>' + puppy.description + '</p>';
        puppiesHtml += '</div>';

    });

    document.getElementById('puppies').innerHTML = puppiesHtml;

    console.log("_____________________________________");

    // write a function that checks if a string is a palindrome
    // *bonus*: ignore special characters, whitespace, and casing


    function palindrome(myString) {
        var symbols = /\W|_/g;
        myString = myString.replace(symbols, '').toLowerCase();
        var palindromic = myString.split('').reverse().join('');

        console.log("Is " + myString + " a Palindrome?");
        return Boolean(myString === palindromic);

    }

    console.log(palindrome("Madam"));
    console.log(palindrome("2,3*&,45,3,2"));
    console.log(palindrome("car % PLAN nalp^^rac"));

})();

