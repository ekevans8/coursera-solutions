(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;
  service.firstName = "";
  service.lastName = "";
  service.email = "";
  service.phone = "";
  service.favDish = "";
  service.favDishTitle = "";
  service.favDishDesc = "";
  service.favDishImg = "";

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.checkForFavDish = function() {
    var newUrl = "https://warm-everglades-81568.herokuapp.com/menu_items/"+service.favDish+".json";
    return $http({
      method: "GET",
      url: newUrl
      }).then(function(result) {
        // process result
        var info = [];
        info.push(result.data.name);
        info.push(result.data.description);
        return info;      
      });
  }

  service.getDataFromPromise = function() {
    var promiseList = service.checkForFavDish();
    promiseList.then(function(value){
      var words = [];
      words = value;
      console.log(words);
      console.log(words[0]+" "+words[1]);
      service.favDishTitle = words[0]+"";
      service.getFavDishDesc = words[1]+"";

      service.getFavDishImg = service.getFavDish;
    });
    return service.favDishTitle == "";
  }

  service.getFavDish = function () {
    return service.favDish;
  };

  service.setFavDish = function(favDish) {
    service.favDish = favDish
  }

  service.setInfo = function (firstName,lastName,email,phone,favDish) {
    service.firstName = firstName;
    service.lastName = lastName;
    service.email = email;
    service.phone = phone;
    service.favDish = favDish;
  }

  service.getFirstName = function () {
    return service.firstName;
  }

  service.getLastName = function () {
    return service.lastName;
  }

  service.getEmail = function () {
    return service.email;
  }

  service.getPhone = function () {
    return service.phone;
  }

  service.getFavDishTitle = function () {
    return service.favDishTitle;
  }

  service.getFavDishDesc = function () {
    return service.favDishDesc;
  }

  service.getFavDishImg = function () {
    return service.favDishImg;
  }

}



})();
