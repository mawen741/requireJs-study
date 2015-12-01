require.config({
    baseUrl: 'js',
    paths:{
    	jquery:"jquery-1.7.2.min",
    	query :"selector"
    }
});
 
require(['jquery',"query"], function($,query) {
    var els = query('#wrapper');
    console.log(els);
    console.log($("#wrapper"));
});