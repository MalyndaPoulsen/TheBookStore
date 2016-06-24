(function () {
    angular.module('bookstore')
        .component('bookstoreComponents', {
            templateUrl: 'app/components/bookstore/bookstore-components.html',
            controller: BookstoreController,
        })
    function BookstoreController($firebaseArray) {
        var bs = this;
        var bookstoreRef = new Firebase('https://favs15.firebaseio.com/books');
        bs.store = $firebaseArray(bookstoreRef);

        bs.addBook = function (book) {
            bs.store.$add(book)
            bs.newBook = ""
        }
        bs.removeBook = function (book) {
            bs.store.$remove(book)
        }
        
        bs.changeRating = function(book){
            bs.store.$save(book)
        }
    }
} ())