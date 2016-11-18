(function(){
    "use strict";
    var leftDisplay = document.getElementById("leftDisplay");
    var midDisplay = document.getElementById("midDisplay");
    var rightDisplay = document.getElementById("rightDisplay");
    var numbersButton = document.getElementsByClassName("digit");
    var operatorButton = document.getElementsByClassName("operator");
    var equalButton = document.getElementById("equals");
    var clearButton = document.getElementById("clear");
    var powerButton = document.getElementById("power");
    var sqrtButton = document.getElementById("sqrt");
    var plusMinButton = document.getElementById("plusMin");
    var percentageButton = document.getElementById("percentage");
    var expButton = document.getElementById("ex");
    var decimalButton = document.getElementById("decimal");
    var num;
    var counter = 0;


    var display = function () {
        num= this.innerHTML;
        if (midDisplay.value == '') {
            leftDisplay.value += num;
        }else {
            rightDisplay.value += num;
        }

    };
    var displayMid = function () {
        counter=0;
        console.log(counter);
        num= this.innerHTML;
        midDisplay.value = num;

    };


    for(var i=0; i < numbersButton.length; i++) {
        numbersButton[i].addEventListener('click', display)

    }
    for(var j=0; j < operatorButton.length; j++) {
        operatorButton[j].addEventListener('click', displayMid)

    }

    var opEqual = function() {

        var leftNum = parseFloat(leftDisplay.value);
        var rightNum = parseFloat(rightDisplay.value);
        var result;
        var operator = midDisplay.value;
        switch (operator) {
            case "+":
                result = (leftNum + rightNum);
                break;
            case "-":
                result = (leftNum - rightNum);
                break;
            case "x":
                result = (leftNum * rightNum);
                break;
            case "/":
                result = (leftNum / rightNum);
                break;
            default:
                result = ("Err0r");
        }

        leftDisplay.value = result;
        rightDisplay.value = "";
        midDisplay.value = "";
    };
    equalButton.addEventListener("click", opEqual);

    var clearDisplay = function () {
        counter = 0;
        rightDisplay.value = "";
        midDisplay.value = "";
        leftDisplay.value = "";
    };
    clearButton.addEventListener("click", clearDisplay);

    var power = function () {
        var x =leftDisplay.value;
        x=Math.pow(x, 2);
        leftDisplay.value=x;

    };
    powerButton.addEventListener("click", power);

    var sqrt = function () {
        var x =leftDisplay.value;
        x=Math.sqrt(x);
        leftDisplay.value=x;

    };
    sqrtButton.addEventListener("click", sqrt);

    var plusMin = function () {
        if ((leftDisplay.value !== '') && (rightDisplay.value == '')) {
            leftDisplay.value *= -1;

        }
        if ((rightDisplay.value !== '')) {
            rightDisplay.value *= -1;

        }


    };
    plusMinButton.addEventListener("click", plusMin);


    var percentage = function () {
        if ((leftDisplay.value !== '') && (rightDisplay.value == '')) {
            var m =parseFloat(leftDisplay.value);
            m/=100;
            leftDisplay.value=m;
        }
        if (rightDisplay.value !== '') {
            var n =parseFloat(rightDisplay.value);
            m/=100;
            rightDisplay.value=n;
        }

    };
    percentageButton.addEventListener("click", percentage);

    var exp = function () {
        var x =leftDisplay.value;
        x=Math.exp(x);
        leftDisplay.value=x;

    };
    expButton.addEventListener("click", exp);

    var decimalCheck = function () {
        num= this.innerHTML;
        counter += 1;
        if ((leftDisplay.value !== '') && (rightDisplay.value == '')) {
            if (counter > 1) {
                console.log("no");
            } else {
                leftDisplay.value += num;
            }
        }
        if (rightDisplay.value !== '') {
            if (counter > 1) {
                console.log("no");
            } else {
                rightDisplay.value += num;
            }
        }


    };
    decimalButton.addEventListener("click", decimalCheck);

})();
