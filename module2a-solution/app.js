(function () {
    'use strict';
    
    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);
    
    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var item = this;
        item.ToBuy = ShoppingListCheckOffService.getToBuyItems();

        item.removeItem = function (itemIndex) {
            //item.ToBuy.splice(itemIndex, 1);
            ShoppingListCheckOffService.removeItem(itemIndex);
        };

        item.checkToBuy = function(){
            console.log('1');
            if(item.ToBuy.length === 0){
                return true;
            };
            return false;
        }

    }
    
    
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var parent = this;
        parent.Bought = ShoppingListCheckOffService.getBoughtItems();

        parent.checkBought = function(){
            console.log('2');
            if(parent.Bought.length === 0){
                return true;
            };
            return false;
        }
    }

    function ShoppingListCheckOffService(){
        var service = this;
        console.log("In service controller");

        var ToBuy = [{name:"Cookies", quantity:"10"},{name:"Apples", quantity:"20"},{name:"Bananas", quantity:"50"},{name:"Donuts", quantity:"40"},{name:"Eggs", quantity:"30"}];
        var Bought = [];

        service.getToBuyItems = function () {
            return ToBuy;
        };

        service.getBoughtItems = function () {
            return Bought;
        };

        service.removeItem = function (itemIndex) {       
            Bought.push(ToBuy[itemIndex]);
            // console.log(ToBuy[itemIndex]);
            console.log(Bought);
            ToBuy.splice(itemIndex, 1);
        };
       
    }
    
})();