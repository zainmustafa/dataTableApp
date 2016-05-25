

angular.module('app', ['ngNewRouter','firebase', 'ngMaterial'])
    .controller('AppController', function AppController($router, $location) {
        if('serviceWorker' in navigator) {
            navigator.serviceWorker
                .register('/service-worker.js')
                .then(function() { console.log('Service Worker Registered'); });
        }
        $router.config([
            {
                path: '/home',
                component: 'home'
            },
            {
                path: '/',
                component: 'view'
            },
            {
                path: '/add',
                component: 'add'
            },
            {
                path: '/view/edit/:id',
                component: 'edit'
            }
        ]);
        this.goToAdd = function () {
            $location.path('/add');
        };
        this.goToView = function () {
            $location.path('/');
        };
        this.goToHome = function () {
            $location.path('/home');
        };

    });