angular.module("eproject.washer",[])
    .controller("washerController",function($scope,factorygetdata){
        $scope.product="washing machine";
        $scope.icon="tshirt";
        $scope.productorder="name";
        factorygetdata.getproducts().then(function(response){
            $scope.productslist=[];
            angular.forEach(response.data,function(product){
                if(product.type=="Washer"){
                    $scope.productslist.push(product);
                }
            });
        });
    });