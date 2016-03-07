angular.module("myApp", [])
.controller("myCtrl", function($scope) {
	$scope.data = {};
	$scope.submitted = false;
	$scope.showMadLibs = false;
	$scope.showInputBoxes = true;

	$scope.hideInputShowOutput = function() {
		$scope.submitted = true;
		if($scope.madLibsForm.$valid) {
			$scope.showMadLibs = true;
			$scope.showInputBoxes = false;
			$scope.submitted = false;
		}

	}
	$scope.submit = function() {
		hideInputShowOutput();
	}
	$scope.startNewGame = function() {
		$scope.showMadLibs = false;
		$scope.showInputBoxes = true;
		$scope.data = {};
	}
});