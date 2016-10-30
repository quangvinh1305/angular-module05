(function () {
"use strict";

angular.module('common')
.service('RegisterService', RegisterService);


RegisterService.$inject = ['$http', 'ApiPath'];
function RegisterService($http, ApiPath) {
  var service = this;
  service.user = null;

  service.getFavItem = function (favItem) {
	return $http({
		method: "GET",
		url: ApiPath + '/menu_items/' + favItem + '.json',
	})
  };

  service.saveUser = function (user) {
	  service.user = user;
  }

  service.getUser = function(){
	  return service.user;
  }

 }

})();
