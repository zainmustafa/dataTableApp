/**
 * Created by Administrator on 6/30/2015.
 */

angular.module('app')
    .controller('AddController', function ($location) {

        var ref = new Firebase("https://panadatabase.firebaseio.com/messages/data");
        var myRef = new Firebase("https://panadatabase.firebaseio.com/messages/myData");

        this.submit = function() {
            ref.child(this.name).set({
                name: this.name,
                phone: this.phone,
                email: this.email,
                address: this.address
            });
            myRef.child(this.name).set({
                name: this.name,
                phone: this.phone,
                email: this.email,
                address: this.address
            });
            $location.path('/');
        };
    });