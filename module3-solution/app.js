(function () {
    'use strict';
    
    angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems', foundItems);

    function foundItems() {
        var ddo = {
            templateUrl: 'foundItems.html',
            scope: {
              items: '<',
              onRemove: '&'
            },
            // controller: NarrowItDownControlle,
            // controllerAs: 'found',
            // bindToController: true
        };     
        return ddo;
    }
    
    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var menu = this;
        menu.textInput = "";
        menu.foundItems = [];

        menu.narrow = function(){
            console.log("menu.TextInput is ", menu.textInput);
            menu.foundItems = MenuSearchService.getAllMenuItems(menu.textInput);
            console.log("found",menu.foundItems);
            menu.removeItem = function (itemIndex) {
            console.log("itemIndex is ",itemIndex);
            menu.foundItems.splice(itemIndex,1);
            };
        };     

    };

    MenuSearchService.$inject = ['$http'];
    function MenuSearchService($http) {
    
        var service = this;

        service.getAllMenuItems = function(searchTerm) {
            var list = [];
            var responses = $http({
                method: "GET",
                url: "https://davids-restaurant.herokuapp.com/menu_items.json"
            }).then(function (response) {
                // console.log("in service response", response);
                // console.log("in service response length", response.data.menu_items.length);
                for(var i=0; i<response.data.menu_items.length; i++){
                    var description = response.data.menu_items[i].description;
                    if (description.toLowerCase().indexOf(searchTerm) !== -1) {
                      list.push(response.data.menu_items[i]);
                    //   console.log("data = ", response.data[i]);
                    }
                };
                console.log("list = ", list);
                
            });

            return list;
        }
    }

    })();
    