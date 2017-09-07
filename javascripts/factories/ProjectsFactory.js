"use strict";

app.factory("ProjectsFactory", function ($q, $http, $routeParams) {

  const getAllProjectsDetails = () => {

    let projects = [];

    return $q(function(resolve, reject){
      $http.get(`../../data/projects.json`)
      .then(function(result){
        Object.keys(result).forEach((key) => {
          projects.push(result[key]);
          });
          resolve(projects[0].projects);
        })
        .catch(function(error){
            reject(error);
        });
    });

  };

  return {
    getAllProjectsDetails
  };

});