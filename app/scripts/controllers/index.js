'use strict';

angular.module('eparty')
  .controller('IndexCtrl', function () {

   $(".slideBox").slide({ 
        mainCell:".bd ul",
        autoPlay:true,
        effect:"leftLoop",
        delayTime:800,
        interTime:5000,
        mouseOverStop:false
    });
      
});
