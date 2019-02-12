(function() {
	'use strict';
	angular.module('ngSeedApp.controllers')
		.controller('aboutController', [
			'$scope', 'ngService', 'ngConstants',
			function($scope, ngService, ngConstants) {
				$scope.title = "About";
			}
		]);
}());