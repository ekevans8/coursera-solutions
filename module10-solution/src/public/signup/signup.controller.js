(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['MenuService'];
function SignupController(MenuService) {
  this.firstName = "";
  this.lastName = "";
  this.email = "";
  this.phone = "";
  this.favDish = "";
  this.errorFound = false;
  this.saved = false;

  this.addPerson = function() {
  	this.saved = true;
  	//console.log("Add person to newsletter");
  	//console.log(this.firstName+" "+this.lastName+" "+this.email+" "+this.phone+" "+this.favDish);
  	//send to menu service for processing
  	MenuService.setInfo(this.firstName,this.lastName,this.email,this.phone,this.favDish);
  }

  this.unsave = function() {
  	this.saved = false;
    this.errorFound = false;
  }

  this.checkInput = function(favDish) {
    if(favDish.length > 1){
    	this.favDish = favDish;
    	//console.log(this.favDish);
    	MenuService.setFavDish(this.favDish);
    	this.errorFound = MenuService.getDataFromPromise();
      console.log("output: "+this.errorFound);
    }
  }
}

})();