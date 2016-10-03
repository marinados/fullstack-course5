(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunchList = '';
  $scope.result = '';

  $scope.checkIfTooMuch = function() {
    var number = $scope.lunchList.split(',').length;
    console.log(number);

    if($scope.lunchList == ''){
      $scope.result = 'Please enter data first'
    }else if (number <= 3) {
      $scope.result = 'Enjoy!'
    }else{
      $scope.result = 'Too much!'
    }
  }
}

})();