"use strict";

var app = angular.module("MBportfolio", ["ngRoute"]);
// var app = angular.module("MBportfolio", ["ngAnimate", "ngRoute", "ngSanitize", "ngToast"]);;"use strict";

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
    .otherwise("/about");
});;"use strict";

app.controller("ProjectShowCtrl", function($location, $scope) {

});;"use strict";

app.controller("AboutCtrl", function($location, $scope) {

});;"use strict";

app.controller("NavBarCtrl", function($routeParams, $scope) {

});;"use strict";

app.controller("ProjectsCtrl", function($location, $scope) {

});;"use strict";

console.log("in tech ctrl");

app.controller("TechCtrl", function($location, $scope, TechFactory) {
  $scope.techs = [];

  TechFactory.getAllTechDetails().then((techs) => {
    $scope.techs = techs;
    console.log(techs);
  });

});