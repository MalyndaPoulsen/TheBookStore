(function () {
    'use strict';

    angular
        .module('bookstore')
        .component('ratingComponent', {
            bindings: {
              book: '<',
              numStars: '<',
              onUpdate: '<'  
            },
            template: '<ul class="star-rating" ng-class="{readonly: $ctrl.readonly}">' +
            '  <li ng-repeat="star in $ctrl.stars" class="star" ng-class="{filled: star.filled}" ng-click="$ctrl.toggle($index)">' +
            '    <i class="fa fa-star"></i>' + // or &#9733
            '  </li>' +
            '</ul>',
            controller: RatingController
        })

    function RatingController() {
        var rc = this;
        
        rc.stars = [];
        rc.book.rating = rc.book.rating || -1
        rc.numStars= rc.numStars || 5
        rc.$onInit = function(){
            addStars()
            updateStars()
        }
         
        function addStars(){
            for(var i = 0; i < rc.numStars; i++){                
                rc.stars[i] = {filled: false}
            }
        }
        
        rc.toggle = function($index){
            rc.book.rating = $index;
            updateStars()
        }
        
        function updateStars(){
            for(var i = 0; i < rc.stars.length; i++){
                var currentStar = rc.stars[i]
                if(i <= rc.book.rating){
                    currentStar.filled = true;
                }else{
                    currentStar.filled = false;
                }
            }
            rc.onUpdate(rc.book)
        }
        
    }
} ());

