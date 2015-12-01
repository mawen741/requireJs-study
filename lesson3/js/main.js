require.config({
	baseUrl:"js",
    shim: {
        'A': ['jquery-1.7.2.min']
    }
});
require(['A'],function(A){
	console.log(A);
	console.log(A.name);
	console.log(A.obj);
},function(err){
	var failedId = err.requireModules && err.requireModules[0];
	console.log(err)
	console.log(failedId)
	console.log(typeof err)
});