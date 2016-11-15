function MainController ($scope){
	$scope.num = 0
	$scope.likes="0 likes"
	$scope.status='+ or -'
	$scope.make=true;

	

	$scope.addCount=function(){
         if($scope.make) {
          	$scope.num ++
          
      }else{
          	
          	$scope.num --
          }
            if ($scope.num === 1) {
			$scope.likes=$scope.num + ' like';

      }else{
            	$scope.likes=$scope.num + ' likes'
            }
           if($scope.num< 0){
            	$scope.num =0
            	$scope.likes ="0 likes"

            }
        }

	
		$scope.subCount=function(){
			$scope.make = !$scope.make 
			
			}
			

      }
  











MainController.$inject = ['$scope'];
export {MainController};