(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    // TODO: Convert planetsString to an array, save it to planetsArray.
    planetsArray = planetsString.split('|');

    console.log(planetsArray);


    // TODO: Create a string with <br> tags between each planet. console.log() your results.
    planetsString = planetsArray.join('<br>');
    console.log(planetsString);
    document.write(planetsString);


    //       Why might this be useful?

    // Bonus: Create a second string that would display your planets in an undordered list.
    //        You will need an opening AND closing <ul> tags around the entire string, and <li> tags around each planet.
    //        console.log() your results.

    var days = "<ul><li>Monday</li><li>Tuesday</li><li>Wednesday</li><li>Thursday</li><li>Friday</li><li>Saturday</li><li>Sunday</li></ul>";
    console.log(days);
    document.write(days);
})();

