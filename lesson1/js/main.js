require.config({
    baseUrl: 'js',
    paths:{
    	jquery:"jquery-1.7.2.min"
    }
});
 
require(['jquery'], function($) {
  alert($().jquery);
});