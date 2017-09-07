"use strict";

app.controller("TechCtrl", function($location, $routeParams, $scope, TechFactory) {
  
  console.log("inside tech ctrl");
  $scope.techs = [];

  TechFactory.getAllTechDetails().then((techs) => {
    console.log(techs);
    $scope.techs = techs;
  }).catch((error) => {
    console.log(error);
  });

});