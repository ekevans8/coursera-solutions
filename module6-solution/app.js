(function () {
	'use strict';

	angular.module('LunchCheck', [])

	.controller('LunchCheckController', function ($scope) {
		$scope.lunchList = "";
		$scope.outputMessage = "";

		$scope.checkTooMuch = function () {
			$scope.outputMessage = calculateOutput($scope.lunchList);
		};

		$scope.clearOutput = function () {
			$scope.outputMessage = "";
		};

		function calculateOutput(string) {
			if (string === "") {
				return "Please enter data first!";
			} 
			var words = string.split(',');
			var length = words.length;
			if (words.includes(" ")) {
				length = length - 1;
			}

			if (length <= 3) {
				return "Enjoy!";
			} else {
				return "Too much!";
			}
		}
	});
})();