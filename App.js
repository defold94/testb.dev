'use strict';

angular.module('app', [])

.directive('fileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;
            
            element.bind('change', function(){
                scope.$apply(function(){
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
}])

.controller('AddFormController', ['$rootScope', '$scope','$http', function($rootScope, $scope,$http) {
    var _self = this;
    
    this.uploadFileToUrl = function(file, uploadUrl){
        var fd = new FormData();
        fd.append('file', file);
        
        $http.post(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        })
        .success(function(){
        })
        .error(function(){
        });
    }

    $scope.uploadClick = function(){
        var file = $scope.csvfile;
        
        _self.uploadFileToUrl(file, 'http://localhost:3000/');
    }
}]);