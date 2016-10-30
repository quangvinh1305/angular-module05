(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://sheltered-savannah-48919.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
