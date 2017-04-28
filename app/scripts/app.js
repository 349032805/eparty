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
            controller: 'MainCtrl'
        })
        .state("main.index", {
            url: "main/index",
            templateUrl: "/views/index.html",
            controller: 'IndexCtrl'
        })
        .state("main.seller", {
            url: "main/seller",
            cache:'false',
            templateUrl: "/views/seller.html"
        })
        .state("main.about", {
            url: "main/about",
            templateUrl: "/views/about.html"
        })
        .state("main.policy", {
            url: "main/policy",
            templateUrl: "/views/policy.html"
        });
       
        $urlRouterProvider.otherwise("main/index");
  });
