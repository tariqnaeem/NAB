
var module = angular.module('calculator-app', ['CalculatorService']);

module.controller('CalculatorCtrl', function($scope, Calculator){

  /**
  INITIALIZATION
  **/
  $scope.num1 = 0;
  $scope.num2 = 0;
  
  $scope.operation = 'addition';
  
  /**
  OPERATION SELECTION
  **/
  
  $scope.operator = function(operation) {
    $scope.operation = operation;
	$scope.calculate();
  }
  
  /**
  CALCULATE RESULTS
  **/
  
 
	$scope.calculate = function(){
		switch($scope.operation){
			case 'addition':
			$scope.result = Calculator.addition($scope.num1, $scope.num2);
			break;
			case 'subtraction':
			$scope.result = Calculator.subtraction($scope.num1, $scope.num2);
			break;
			case 'multiplication':
			$scope.result = Calculator.multiplication($scope.num1, $scope.num2);
			break;
			case 'division':
			$scope.result = Calculator.division($scope.num1, $scope.num2);
			break;
		}
	}
  
  });
