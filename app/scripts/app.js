'use strict';

angular
  .module('eparty', [
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when("", "main/index");
     $stateProvider
        .state("main", {
            url: "/",
            templateUrl: "/views/main.html",
            cache:'false',
            controller: 'MainCtrl'
        })
        .state("main.index", {
            url: "main/index",
            templateUrl: "/views/index.html",
            cache:'false',
            controller: 'IndexCtrl'
        })
        .state("main.seller", {
            url: "main/seller",
            cache:'false',
            templateUrl: "/views/seller.html"
        })
        .state("main.about", {
            url: "main/about",
            cache:'false',
            templateUrl: "/views/about.html"
        });
       
        $urlRouterProvider.otherwise("main/index");
  });
