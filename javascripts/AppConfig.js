"use strict";

app.run(function($location, $rootScope) {});

app.config(function($routeProvider) {
    $routeProvider
    .when("/home", {
        templateUrl: "partials/about.html",
        controller:  "AboutCtrl"
    })
    .when("/project/:projectName", {
        templateUrl: "partials/project-show.html",
        controller:  "projectShowCtrl",
    })
    .otherwise("/about");

});