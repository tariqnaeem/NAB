var CalculatorService = angular.module('CalculatorService', []);

CalculatorService.service('Calculator', function () {
    this.addition = function (a, b) { return (a-0) + (b-0)};
	this.subtraction = function (a, b) { return a - b };
	this.multiplication = function (a, b) { return a * b };
	this.division = function (a, b) { return a / b };
});
