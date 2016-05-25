/**
 * Created by Administrator on 6/30/2015.
 */
var counter = 1;
var myId = '';
var app = angular.module('app.edit', [])
    .controller('EditController', function ($routeParams,$firebaseObject, $location) {
        if(counter === 1){
            myId = $routeParams.id;
            counter++;
        }
        this.myData = {};
        var ref = new Firebase("https://panadatabase.firebaseio.com/messages/data");
        this.myData = $firebaseObject(ref.child(myId));

        this.mySubmit = function() {
            ref.child(myId).update({
                name: this.myData.name,
                phone: this.myData.phone,
                email: this.myData.email,
                address: this.myData.address
            });
            $location.path('/');

        };

    });