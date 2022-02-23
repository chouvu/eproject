angular.module("eproject.lg",[])
    .controller("lgController",function($scope,factorygetdata){
        $scope.product="lg";
        $scope.icon="";
        $scope.productorder="name";
        factorygetdata.getproducts().then(function(response){
            $scope.productslist=[];
            angular.forEach(response.data,function(product){
                if(product.brand=="LG"){
                    $scope.productslist.push(product);
                }
            });
        });
    });

