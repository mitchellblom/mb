"use strict";

app.controller("TechCtrl", function($location, $routeParams, $scope, TechFactory) {
  
  $scope.techs = [];

  TechFactory.getAllTechDetails().then((result) => {
    $scope.techs = result.techs;
  }).catch((error) => {
    console.log(error);
  });

});