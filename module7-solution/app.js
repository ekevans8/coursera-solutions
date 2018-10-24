(function () {
	'use strict';

	var app = angular.module('ShoppingListCheckOff', [])
	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController);

	app.service('ShoppingListCheckOffService', function() {
		var toBuyList = [{name: "cookies", quantity: 24}, 
				{name: "bananas", quantity: 8}, 
				{name: "mangoes", quantity: 3}, 
				{name: "bags of spinach", quantity: 2}, 
				{name: "almond milk", quantity: 1}];
		var alreadyBoughtList = [];
		var buyFull = {};
		var boughtFull = {};

		return {
			getToBuyList: function (){
				return toBuyList;
			},

			getBoughtList: function (){
				return alreadyBoughtList;
			},

			buyAnItem: function(item) {
				var newItem = {
      				name: item.name,
      				quantity: item.quantity
    			};
			    alreadyBoughtList.push(newItem);
			    var index = toBuyList.indexOf(item);
			    toBuyList.splice(index, 1);
			}
		}
	});

	ToBuyController.$inject = ['ShoppingListCheckOffService'];
	function ToBuyController(ShoppingListCheckOffService) {
		var buy = this;
		buy.buyList = ShoppingListCheckOffService.getToBuyList();
		buy.buyItem = function(item) {
			ShoppingListCheckOffService.buyAnItem(item);
		}
	}

	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtController(ShoppingListCheckOffService) {
		var bought = this;
		bought.boughtList = ShoppingListCheckOffService.getBoughtList();
	}

	
})();