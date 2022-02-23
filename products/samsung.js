angular.module("eproject.samsung",[])
    .controller("samsungController",function($scope,factorygetdata){
        $scope.product="samsung";
        $scope.icon="";
        $scope.productorder="name";
        factorygetdata.getproducts().then(function(response){
            $scope.productslist=[];
            angular.forEach(response.data,function(product){
                if(product.brand=="Samsung"){
                    $scope.productslist.push(product);
                }
            });
        });
    });

