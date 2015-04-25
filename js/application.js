angular.module('applicationAngular', [])
  .controller('appController', function(){
		var vm = this; 
		vm.update = function(data){
      vm.masterFile = angular.copy(data);
    };
});