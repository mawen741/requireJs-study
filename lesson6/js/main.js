require.config({
    baseUrl: 'js',
    paths: {
        'jquery': 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-alpha1/jquery'
    }
});
 
require(['jquery', 'event', 'selector'], function($, E, S) {
    alert($);
});