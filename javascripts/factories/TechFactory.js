"use strict";

app.factory("TechFactory", function ($q, $http, $routeParams) {

  const getAllTechDetails = () => {

    let techs = [];

    return $q(function(resolve, reject){
      $http.get(`../../data/techs.json`)
      .then(function(result){
        Object.keys(result).forEach((key) => {
          techs.push(result[key]);
          });
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