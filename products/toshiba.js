angular.module("eproject.toshiba",[])
    .controller("toshibaController",function($scope,factorygetdata){
        $scope.product="toshiba";
        $scope.icon="";
        $scope.productorder="name";
        factorygetdata.getproducts().then(function(response){
            $scope.productslist=[];
            angular.forEach(response.data,function(product){
                if(product.brand=="Toshiba"){
                    $scope.productslist.push(product);
                }
            });
        });
    });

