"use strict";

var app = angular.module("MBportfolio", ["ngRoute"]);
// var app = angular.module("MBportfolio", ["ngAnimate", "ngRoute", "ngSanitize", "ngToast"]);;"use strict";

app.run(function($location, $rootScope) {});

app.config(function($routeProvider) {
    $routeProvider
    .when("/home", {
        templateUrl: "partials/home.html",
        controller:  "HomeCtrl"
    })
    .when("/project/:projectName", {
        templateUrl: "partials/project-show.html",
        controller:  "projectShowCtrl",
    })
    .otherwise("/home");

});;"use strict";

app.controller("HomeCtrl", function($location, $scope) {

});;"use strict";

app.controller("NavBarCtrl", function($routeParams, $scope) {

});