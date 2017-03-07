(function (){
  'use strict';

  angular.module('lunchChecker', [])
  .controller('lunchController', lunchController);
  lunchController.$inject = ['$scope'];
  function lunchController($scope){

    $scope.lunchMenuFunc = function(){
    $scope.menu = $scope.lunchMenu;
    $scope.menu1 = $scope.menu.split(',');
     $scope.message = reply($scope.menu1);
      };

function reply(string){
    if(string == ""){
      return "Please enter data first"
    } else{
    if(string.length <= 3){
    return "Enjoy!"
  }else {
    return "Too Much!"
  };
  };
}
  }
})();
