angular
    .module('PartipantApp')
    .directive('wscPageNav', function(){
        return {
            restrict: "E",
            templateUrl: "assets/templates/directives/wscPageNav.html",
            controller: function ($scope, $location){
                $scope.isPage = function (name){
                    return new RegExp("^\/"+name+"($|\/\w+)").test($location.path());
                }
            }
        };
    });