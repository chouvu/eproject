angular.module("eproject",['ngRoute','ngAnimate','eproject.slideshow+bestsale','eproject.tv','eproject.washer','eproject.refrigerator','eproject.lg','eproject.toshiba','eproject.samsung','eproject.product','eproject.compare','eproject.contactus','eproject.factory'])
    .config(['$routeProvider',function($routeProvider){
        $routeProvider
        .when("/",{templateUrl:"slideshow+bestsale/slideshow+bestsale.html",controller:"Ctrl"})
        .when("/television",{templateUrl:"products/products.html",controller:"tvController"})
        .when("/washingmachine",{templateUrl:"products/products.html",controller:"washerController"})
        .when("/fridge",{templateUrl:"products/products.html",controller:"refrigeratorController"})
        .when("/lg",{templateUrl:"products/products.html",controller:"lgController"})
        .when("/toshiba",{templateUrl:"products/products.html",controller:"toshibaController"})
        .when("/samsung",{templateUrl:"products/products.html",controller:"samsungController"})
        .when("/product/:productid",{templateUrl:"products/product.html",controller:"productdetailsController"})
        .when("/product/:bestsaleproductid",{templateUrl:"products/product.html",controller:"Ctrl"})
        .when("/compare",{templateUrl:"compare/compare.html",controller:"compareCtrl"})
        .when("/contactus",{templateUrl:"contactus+aboutus/contactus.html",controller:"contactusCtrl"})
        .when("/aboutus",{templateUrl:"contactus+aboutus/aboutus.html"})
        .otherwise({redirectTo: "/"});
    }]);

