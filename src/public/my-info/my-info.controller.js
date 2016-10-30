(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ["RegisterService", 'ApiPath'];

function MyInfoController(RegisterService, ApiPath) {
  var $ctrl = this;
  $ctrl.user = RegisterService.getUser();
  if($ctrl.user !== null){
  	$ctrl.user.fav.imgUrl = ApiPath + "/images/" + $ctrl.user.fav.short_name + ".jpg"
  }
}

})();
