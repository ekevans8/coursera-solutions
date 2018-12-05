(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['favDish']

function MyInfoController(favDish) {
  this.favDish = favDish;
  console.log("FavDish: " + this.favDish);
}

})();