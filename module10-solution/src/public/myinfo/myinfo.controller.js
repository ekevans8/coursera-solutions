(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['MenuService', 'ApiPath']

function MyInfoController(MenuService, ApiPath) {
  this.firstName = MenuService.getFirstName();
  this.lastName = MenuService.getLastName();
  this.email = MenuService.getEmail();
  this.phone = MenuService.getPhone();
  this.favDish = MenuService.getFavDish();
  //console.log("FavDish: " + this.favDish);
  this.favDishTitle = MenuService.getFavDishTitle();
  this.favDishDesc = MenuService.getFavDishDesc;
  this.favDishImg = MenuService.getFavDishImg();
  this.basePath = ApiPath;
  

  this.foundInfo = function () {
  	if(this.favDish == "NONE" || this.favDish == ""){
  		return false;
  	}
  	return true;
  }
}

})();