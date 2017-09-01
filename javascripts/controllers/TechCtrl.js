"use strict";

console.log("in tech ctrl");

app.controller("TechCtrl", function($location, $scope, TechFactory) {
  $scope.techs = [];

  TechFactory.getAllTechDetails().then((techs) => {
    $scope.techs = techs;
    console.log(techs);
  });

});