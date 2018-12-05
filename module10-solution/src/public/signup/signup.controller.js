(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);


function SignupController() {
  this.firstName = "";
  this.lastName = "";
  this.email = "";
  this.phone = "";
  this.favDish = "";

  this.addPerson = function() {
  	console.log(this.firstName+" "+this.lastName+" "+this.email+" "+this.phone+" "+this.favDish);
  	//send to menu service for processing
  }
}

})();