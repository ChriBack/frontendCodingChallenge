(function () {
	'use strict';
	angular.module('app')
		.factory('ProductsConfig', ProductsConfig);

	ProductsConfig.inject = [];

	function ProductsConfig() {

		var products = [
			{
				'id': 1,
				'title': 'Apple',
				'description': 'Lorem ipsum dolor sit amet, consectetuer adispiscing elit. ' +
				'Aenean commodo ligula eget dolor. Aeneasn massa. Cum sociis natoque penatibus ' +
				'et magnis dis parturient montes, nascetur ridiculus mus.',
				'type': 'fruit'
			},
			{
				'id': 2,
				'title': 'Aubergine',
				'description': 'Lorem ipsum dolor sit amet, consectetuer adispiscing elit. ' +
				'Aenean commodo ligula eget dolor. Aeneasn massa. Cum sociis natoque penatibus ' +
				'et magnis dis parturient montes, nascetur ridiculus mus.',
				'type': 'vegetable'
			},
			{
				'id': 3,
				'title': 'Banana',
				'description': 'Lorem ipsum dolor sit amet, consectetuer adispiscing elit. ' +
				'Aenean commodo ligula eget dolor. Aeneasn massa. Cum sociis natoque penatibus ' +
				'et magnis dis parturient montes, nascetur ridiculus mus.',
				'type': 'fruit'
			},
			{
				'id': 4,
				'title': 'Broccoli',
				'description': 'Lorem ipsum dolor sit amet, consectetuer adispiscing elit. ' +
				'Aenean commodo ligula eget dolor. Aeneasn massa. Cum sociis natoque penatibus ' +
				'et magnis dis parturient montes, nascetur ridiculus mus.',
				'type': 'vegetable'
			},
			{
				'id': 5,
				'title': 'Chicken',
				'description': 'Lorem ipsum dolor sit amet, consectetuer adispiscing elit. ' +
				'Aenean commodo ligula eget dolor. Aeneasn massa. Cum sociis natoque penatibus ' +
				'et magnis dis parturient montes, nascetur ridiculus mus.',
				'type': 'meat'
			},
			{
				'id': 6,
				'title': 'Orange',
				'description': 'Lorem ipsum dolor sit amet, consectetuer adispiscing elit. ' +
				'Aenean commodo ligula eget dolor. Aeneasn massa. Cum sociis natoque penatibus ' +
				'et magnis dis parturient montes, nascetur ridiculus mus.',
				'type': 'fruit'
			},
			{
				'id': 7,
				'title': 'Beef',
				'description': 'Lorem ipsum dolor sit amet, consectetuer adispiscing elit. ' +
				'Aenean commodo ligula eget dolor. Aeneasn massa. Cum sociis natoque penatibus ' +
				'et magnis dis parturient montes, nascetur ridiculus mus.',
				'type': 'meat'
			},
			{
				'id': 8,
				'title': 'Zucchini',
				'description': 'Lorem ipsum dolor sit amet, consectetuer adispiscing elit. ' +
				'Aenean commodo ligula eget dolor. Aeneasn massa. Cum sociis natoque penatibus ' +
				'et magnis dis parturient montes, nascetur ridiculus mus.',
				'type': 'vegetable'
			}
		];

		return {
			products: products
		};
	}
})();