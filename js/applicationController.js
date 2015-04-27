app.controller('applicationController', function(){
	var vm = this; 
	vm.submitForm = function(data){
	  if(vm.applicationForm.$valid){
	    vm.masterFile = angular.copy(data);
	    alert('Form submit!');
	 }
	};
});