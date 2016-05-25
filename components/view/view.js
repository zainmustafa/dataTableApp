/**
 * Created by Administrator on 6/30/2015.
 */
angular.module('app')
    .controller('ViewController', function ($firebaseArray, $location) {

        this.data = [];

        var ref = new Firebase("https://panadatabase.firebaseio.com/messages/data");
        // create a synchronized array
        this.table = true;
        this.circular = false;
        var that = this;
        this.data = $firebaseArray(ref);
        this.data.$loaded()
            .then(
                function () {
                    that.circular = true;
                    that.table = false;
                });
        this.update = function (id) {
            $location.path('/view/edit/' + id);
            counter = 1;
        };
    });