(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);


MenuDataService.$inject = ['$q', '$timeout']
function MenuDataService($q, $timeout) {
  var service = this;

  service.getAllCategories = function () {
  	return $http({
			method: "GET",
			url: "https://davids-restaurant.herokuapp.com/categories.json"
			}).then(function(result) {
				return result;			
			});
  };

  service.getItemsForCategory = function (categoryShortName) {
  	var newCategoryName = "https://davids-restaurant.herokuapp.com/menu_items.json?category="+categoryShortName; 	return $http({
			method: "GET",
			url: newCategoryName
			}).then(function(result) {
				return result;			
			});
  };

}
})();