"use strict";

app.controller("ProjectsCtrl", function($location, $routeParams, $scope, ProjectsFactory) {
  
  $scope.projects = [];

  ProjectsFactory.getAllProjectsDetails().then((result) => {
    $scope.projects = result;
  }).catch((error) => {
    console.log(error);
  });

});