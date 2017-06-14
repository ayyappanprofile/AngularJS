/**
 * Created by jide on 11/06/17.
 */

app.controller('AuthController', function AuthController($http, $scope) {

    var auth = this;

    auth.user = localStorage.getItem('AUTH_TOKEN');

    angular.isEmpty()

});
