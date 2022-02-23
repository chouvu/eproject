angular.module("eproject.tv",[])
    .controller("tvController",function($scope,factorygetdata){
        $scope.product="television";
        $scope.icon="tv";
        $scope.productorder="name";
        factorygetdata.getproducts().then(function(response){
            $scope.productslist=[];
            angular.forEach(response.data,function(product){
                if(product.type=="TV"){
                    $scope.productslist.push(product);
                }
            });
        });
    });

