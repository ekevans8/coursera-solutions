(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;
  this.firstName = "";
  this.lastName = "";
  this.email = "";
  this.phone = "";
  this.favDish = "";
  this.favDishTitle = "";
  this.favDishDesc = "";
  this.favDishImg = "";

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

  service.getFavDish = function () {

    
    return this.favDish;
  };

  service.setInfo = function (firstName,lastName,email,phone,favDish) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
    this.favDish = favDish;
  }

  service.getFirstName = function () {
    return this.firstName;
  }

  service.getLastName = function () {
    return this.lastName;
  }

  service.getEmail = function () {
    return this.email;
  }

  service.getPhone = function () {
    return this.phone;
  }

  service.getFavDishTitle = function () {
    return this.favDishTitle;
  }

  service.getFavDishDesc = function () {
    return this.favDishDesc;
  }

  service.getFavDishImg = function () {
    return this.favDishImg;
  }

}



})();
