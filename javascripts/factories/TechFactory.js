"use strict";

app.factory('technologiesFactory', function ($q, $http) {

  const getAllTechDetails = () => {

    let technologies = [];

    return $q(function(resolve, reject){
      $http.get(`../data/techs.json`)
      .success(function(returnObject){
        Object.keys(returnObject).forEach((key) => {
          technologies.push(returnObject[key])
          })
          resolve(technologies[0]);
        })
        .error(function(error){
            reject(error);
        })
    });
  };

  return {getAllTechDetails};

});