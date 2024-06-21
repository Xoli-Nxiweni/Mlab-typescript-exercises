//1
var sumCalculator = function (number1, number2) {
    return number1 + number2;
};
console.log(sumCalculator(50, 50));
//2
var fixedNumber = function () {
    return 1;
};
console.log(fixedNumber());
//3
var doStuff = function (text, bool) {
    var result = (bool) ? text.toUpperCase() : text.toLowerCase();
    return result;
};
console.log(doStuff('typescript is fun honestly!', true));
