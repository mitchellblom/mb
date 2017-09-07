"use strict";

var app = angular.module("MBportfolio", ["ngRoute"]);

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

app.controller("TechCtrl", function($location, $routeParams, $scope, TechFactory) {
  
  console.log("inside tech ctrl");
  $scope.techs = [];

  TechFactory.getAllTechDetails().then((techs) => {
    console.log(techs);
    $scope.techs = techs;
  }).catch((error) => {
    console.log(error);
  });

});;"use strict";

app.factory("TechFactory", function ($q, $http, $routeParams) {

  const getAllTechDetails = () => {

    console.log("inside factory");
    let techs = [];

    return $q(function(resolve, reject){
      $http.get(`../../data/techs.json`)
      .then(function(result){
        Object.keys(result).forEach((key) => {
          techs.push(result[key]);
          });
          console.log(techs);
          resolve(techs[0]);
        })
        .catch(function(error){
            reject(error);
        });
    });

  };

  return {
    getAllTechDetails
  };

});