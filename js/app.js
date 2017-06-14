var app = angular.module('jobApp', ['ngRoute']);

app.run(function($rootScope, $location) {

    localStorage.setItem('AUTH_TOKEN', "sdtjsdr4508rhe0fhr");
    $rootScope.$on('$routeChangeStart', function(event, next, previous, error) {
        if ( ! localStorage.hasOwnProperty('AUTH_TOKEN')) {
            $location.path('/login');
         }//Auth Required
    }); //$routeChangeStart
}); //run



app.config(function($routeProvider){

    $routeProvider.when('/login', {
        templateUrl: 'views/login.html',
        controller: 'AuthController'
    }).when('/jobs', {
        templateUrl: 'views/manage-jobs.html',
        controller: 'JobsController'
    }).
    when('/add-job', {
        templateUrl: 'views/add-job.html',
        controller: 'AddJobController'
    }).
    otherwise({
        redirectTo: 'jobs'
    })
});
