(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject=['$scope'];
function LunchCheckController($scope){
  $scope.MenuList = '';
  $scope.x = '';

  $scope.Enter = function (){
    $scope.y = $scope.MenuList.toString().split(',').length;
      if($scope.MenuList.toString().length === 0){
        $scope.y = 0;
      }
      if($scope.y === 0){
        $scope.x = 'Please enter data first';
      }
      else{
        if($scope.y < 4){
          $scope.x = 'Enjoy!';
        }
        else{
          $scope.x = 'Too much!';
        }
      } 
  };
};


})();
