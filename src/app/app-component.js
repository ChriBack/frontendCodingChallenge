(function () {
	'use strict';
	angular.module('app', ['ui.router', 'ui.router.components'])
		.component('app', {
			templateUrl: 'app/app-component-template.html',
			controller: function () {
			}
		})

		.config(function ($stateProvider, $urlRouterProvider) {

			$urlRouterProvider.otherwise('/');

			$stateProvider
				.state('products', {
					url: '/',
					component: 'products'
				});
		})
		.value('app')
		.run(runBlock);

	runBlock.$inject = [];

	function runBlock() {
	}
})();