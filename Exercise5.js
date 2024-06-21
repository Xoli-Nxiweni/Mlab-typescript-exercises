var Calculator = /** @class */ (function () {
    function Calculator() {
        var _this = this;
        this.validator = function (parameter1, parameter2) {
            if (typeof parameter1 !== 'number' || typeof parameter2 !== 'number') {
                console.log("One");
            }
        };
        this.addition = function (parameter1, parameter2) {
            _this.validator(parameter1, parameter2);
            return parameter1 + parameter2;
        };
        this.subtraction = function (parameter1, parameter2) {
            _this.validator(parameter1, parameter2);
            return parameter1 - parameter2;
        };
        this.multiplication = function (parameter1, parameter2) {
            _this.validator(parameter1, parameter2);
            return parameter1 * parameter2;
        };
        this.division = function (parameter1, parameter2) {
            _this.validator(parameter1, parameter2);
            if (parameter2 === 0) {
                return 'Cannot divide by 0 by law!!';
            }
            else {
                return parameter1 / parameter2;
            }
        };
    }
    return Calculator;
}());
var calc = new Calculator();
var sum = calc.addition(5, 5);
var difference = calc.subtraction(5, 2);
var product = calc.multiplication(5, 2);
var quotient = calc.division(4, 4);
console.log("sum = ".concat(sum, "\n    difference = ").concat(difference, "\n    product = ").concat(product, "\n    quotient = ").concat(quotient));
