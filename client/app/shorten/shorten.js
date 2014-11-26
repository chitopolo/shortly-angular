angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  $scope.addLink = function(newLink){
  	Links.addLink(newLink)
  	.catch(function (error) {
  	  console.error(error);
  	});

  };
  
});
