(function () {
	'use strict';
	angular.module('app')
		.component('products', {
			templateUrl: 'app/products/products-component.html',
			controller: ('ProductsCtrl', ProductsCtrl)
		});
	ProductsCtrl.$inject = ['ProductsConfig'];
	function ProductsCtrl(ProductsConfig) {
		var vm = this;
		vm.products = ProductsConfig.products;

		vm.hideProducts = function (type) {
			angular.forEach(vm.products, function (value) {
				if (value.type === type) {
					if (value.hasOwnProperty('hide')) {
						value.hide = !value.hide;
					}
					else {
						value.hide = true;
					}
				}
			});
		};
	}
})();