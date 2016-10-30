(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ["RegisterService"];

function SignupController(RegisterService) {
  var $ctrl = this;
  $ctrl.user = null;
  $ctrl.success = false;
  $ctrl.failure = false;

  $ctrl.submit = function(){

	  	if($ctrl.user.favoriteItem === undefined){
			$ctrl.user.favoriteItem = "";
		}

		RegisterService.getfavoriteItem($ctrl.user.favoriteItem).then(function successCallback(response){
			$ctrl.success = true;
			$ctrl.failure = false;
			$ctrl.user.fav = response.data;
			RegisterService.saveUser($ctrl.user);
		}, function errorCallback(response){
			$ctrl.success = false;
			$ctrl.failure = true;
		});
	}
}

})();
