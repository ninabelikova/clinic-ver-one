var app = angular.module("app",[]);

app.controller('PageController', function ($scope) {
  $scope.page = 1;
});

app.directive('about', function () {
  return {
    restrict: 'E',
    templateUrl: 'about.html'
  };
});

app.directive('home', function () {
  return {
    restrict: 'E',
    templateUrl: 'home.html'
  };
});
