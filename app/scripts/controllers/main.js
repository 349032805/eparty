'use strict';

angular.module('eparty')
  .controller('MainCtrl', function ($scope,$location) {
    var path = $location.path();
    if(path =="/main/index"){
        $scope.currentPage = 0;
    }

    if(path =="/main/seller"){
        $scope.currentPage = 1;
    }

    if(path =="/main/about"){
        $scope.currentPage = 2;
    }
      
 });