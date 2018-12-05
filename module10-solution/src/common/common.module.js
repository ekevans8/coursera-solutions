(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://warm-everglades-81568.herokuapp.com/')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
