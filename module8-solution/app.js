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
    				console.log("1: "+ result.data.menu_items[i].description);
    				console.log("2: "+searchTerm.toLowerCase());
    				if(result.data.menu_items[i].description.includes(searchTerm.toLowerCase())){
    					var item = {
    						name: result.data.menu_items[i].name,
    						short_name: result.data.menu_items[i].short_name,
    						description: result.data.menu_items[i].description
    					};
    					//console.log(item);
    					foundItems.push(item);
    				}
    			}
    			//console.log(foundItems);
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
      			found: '<',
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
		narrow.found = [];
		narrow.getItems = function() {
			var listPromise = MenuSearchService.getMatchedMenuItems(narrow.searchTerm);
			listPromise.then(function(value){
				narrow.found = value;
				console.log(narrow.found);
			});
		}
		narrow.removeItem = function(itemIndex) {
			narrow.found.splice(itemIndex, 1);
		}

		narrow.clearOutput = function () {
			narrow.found = [];
		}
	}

})();