angular.module("myApp", [])
.controller("myCtrl", function($scope) {
	$scope.showMadLibs = false;
	$scope.showInputBoxes = true;
	$scope.hideInputShowOutput = function() {
		$scope.showMadLibs = true;
		$scope.showInputBoxes = false;
	}
	$scope.startNewGame = function() {
		$scope.showMadLibs = false;
		$scope.showInputBoxes = true;
		$scope.name = null;
		$scope.dirtyTask = null;
		$scope.obnoxiousCelebrity = null;
		$scope.jobTitle = null;
		$scope.celebrity = null;
		$scope.hugeNumber = null;
		$scope.tediousTask = null;
		$scope.uselessSkill = null;
		$scope.adjective = null;
		$scope.data.gender = null;
	}
});