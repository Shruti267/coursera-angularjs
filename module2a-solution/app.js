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
    }
    
    
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var parent = this;
        parent.Bought = ShoppingListCheckOffService.getBoughtItems();
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

        service.removeItem = function () {
            items.splice(itemIndex, 1);
        };
    }
    
})();