(function () {
	'use strict';

	angular.module('LunchCheck', [])

	.controller('LunchCheckController', function ($scope) {
		$scope.lunchList = "";
		$scope.outputMessage = "";
		$scope.color = "black";

		$scope.checkTooMuch = function () {
			$scope.outputMessage = calculateOutput($scope.lunchList);
		};

		$scope.clearOutput = function () {
			$scope.outputMessage = "";
			$scope.color = "black";
		};

		function calculateOutput(string) {
			if (string === "") {
				$scope.color = "red";
				return "Please enter data first!";
			} 
			var words = string.split(',');
			var length = words.length;
			if (words.includes(" ")) {
				length = length - 1;
			}
			$scope.color = "green";
			if (length <= 3) {
				return "Enjoy!";
			} else {
				return "Too much!";
			}
		}
	});
})();