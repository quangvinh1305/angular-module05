(function () {
"use strict";

angular.module('common')
.service('RegisterService', RegisterService);


RegisterService.$inject = ['$http', 'ApiPath'];
function RegisterService($http, ApiPath) {
  var service = this;
  service.user = null;

  service.getfavoriteItem = function (favoriteItem) {
	return $http({
		method: "GET",
		url: ApiPath + '/menu_items/' + favoriteItem + '.json',
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
