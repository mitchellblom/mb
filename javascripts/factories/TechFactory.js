"use strict";

app.factory("TechFactory", function ($q, $http) {

  // const getAllTechDetails = () => {

    console.log("inside factory");
    // let techs = [];

    // return $q(function(resolve, reject){
    //   $http.get(`../data/techs.json`)
    //   .success(function(result){
    //     Object.keys(result).forEach((key) => {
    //       techs.push(result[key]);
    //       });
    //       console.log(techs);
    //       resolve(techs[0]);
    //     })
    //     .error(function(error){
    //         reject(error);
    //     });
    // });

  // };

  return {getAllTechDetails};

});