(function () {
	'use strict';

	var app = angular.module('NarrowItDownApp', [])
	.controller('NarrowItDownController', NarrowItDownController)
	.service('MenuSearchService', MenuSearchService)
	.directive('foundItems', FoundItemsDirective);

	MenuSearchService.$inject = ['$http'];
	function MenuSearchService($http) {
		var service = this;

		service.getMatchedMenuItems = function(searchTerm) {
			return $http({
			method: "GET",
			url: "https://davids-restaurant.herokuapp.com/menu_items.json"
			}).then(function(result) {
				// process result and only keep items that match
    			var foundItems = [];

    			for(var i = 0; i < result.data.menu_items.length; i++) {
    				if(result.data.menu_items[i].description.match(searchTerm)){
    					var item = {};
    					item.name = result.data.menu_items[i].name;
    					item.short_name = result.data.menu_items[i].short_name;
    					item.description = result.data.menu_items[i].description;
    					console.log(item);
    					foundItems.push(item);
    				}
    			}

    			// return processed items
    			return foundItems;			
			});
		}
	}

	function FoundItemsDirective() {
		//name, short_name, description
		var ddo = {
			templateUrl: 'foundItems.html',
    		scope: {
      			menu_items: '<',
      			onRemove: '&'
    		},
    		controller: NarrowItDownController,
    		controllerAs: 'narrow',
    		bindToController: true
		};
		return ddo;
	}

	NarrowItDownController.$inject = ['MenuSearchService'];
	function NarrowItDownController(MenuSearchService) {
		var narrow = this;
		narrow.searchTerm = "";
		narrow.getItems = function() {
			narrow.found = MenuSearchService.getMatchedMenuItems(narrow.searchTerm);
			console.log(narrow.found.menu_items.length);
		}
		narrow.removeItem = function(itemIndex) {
			narrow.found.splice(itemIndex, 1);
		}
	}

})();