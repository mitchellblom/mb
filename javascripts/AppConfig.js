"use strict";

var app = angular.module("MBportfolio", ["ngAnimate", "ngRoute", "ngSanitize"]);

app.run(function($location, $rootScope) {});

app.config(function($routeProvider) {
    $routeProvider
    .when("/about", {
        templateUrl: "partials/about.html",
        controller:  "AboutCtrl"
    })
    .when("/projects", {
        templateUrl: "partials/project-list.html",
        controller:  "ProjectsCtrl"
    })
    .when("/tech", {
        templateUrl: "partials/tech.html",
        controller:  "TechCtrl"
    })
    .when("/fun", {
        templateUrl: "partials/fun.html",
        controller:  "AboutCtrl"
    })
    .when("/project/:projectName", {
        templateUrl: "partials/project-show.html",
        controller:  "ProjectShowCtrl",
    })
    .when("/private-repo", {
        templateUrl: "partials/private-repo.html",
        controller:  "PrivateRepoCtrl",
    })
    .otherwise("/about");
});