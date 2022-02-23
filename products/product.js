angular.module("eproject.product",[])
    .controller("productdetailsController",function($scope,$routeParams,factorygetdata){
        $scope.selectedproductid={};
        factorygetdata.getproducts().then(function(response){
            angular.forEach(response.data,function(product){
                if(product.id==$routeParams.productid){
                    $scope.selectedproductid=product;
                }
            });
        });
    });