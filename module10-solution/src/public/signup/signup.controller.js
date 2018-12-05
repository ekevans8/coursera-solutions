(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = [''];
function SignupController(firstName, lastName, email, phone, favDish) {
  var $ctrl = this;
  $ctrl.firstName = firstName;
  $ctrl.lastName = lastName;
  $ctrl.email = email;
  $ctrl.phone = phone;
  $ctrl.favDish = favDish;
}

})();