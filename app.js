/**
 * Created by hp on 6/29/2015.
 */

var app = angular.module('app', ['ngNewRouter', 'app.home', 'app.login', 'app.view', 'app.add', 'app.edit', 'ngMaterial'])
    .controller('AppController', function AppController($router, $location, $timeout) {
        $router.config([
            {
                path: '/',
                component: 'login'
            },
            {
                path: '/home',
                component: 'home'
            },
            {
                path: '/view',
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
            $location.path('/view');
        };
        this.goToHome = function () {
            $location.path('/home');
        };
        var ref = new Firebase("https://panadatabase.firebaseio.com");
        var that = this;
        that.getLogIn = function(){
            ref.authWithOAuthPopup("facebook", function(error, authData) {
                if (error) {
                    console.log("Login Failed!", error);
                } else {
                    $timeout(function(){
                        that.name = authData.facebook.displayName;
                        that.display = authData.facebook.cachedUserProfile.picture.data.url;
                        console.log("Authenticated successfully with payload:", authData.facebook.cachedUserProfile.picture.data.url);
                        $location.path('/view');
                    },0);
                }
            });
        };

    });

