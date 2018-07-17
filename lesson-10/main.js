var app = angular.module('app', []);

app.directive('fooBar', function () {

    var bookmarks = [
        {
            id: 1,
            name: 'EmberJs'
        },
        {
            id: 2,
            name: 'AngularJs'
        },
        {
            id: 3,
            name: 'Kozy-Mozy'
        }
    ];

    return {
        restrict: 'E',
        templateUrl: 'bookmarks.html',
        link: function (scope, element, attrs) {
            // console.log('directive');
            scope.bookmarks = bookmarks;
        }
    };
});