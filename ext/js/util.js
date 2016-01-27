define([
    'jquery'
], function($) {
    var Util = {
        getForm: function() {
            var str = $('.emsc').serialize();
            var dict = {};
            str.split('&').map(function(item) {
                var parts = item.split('=');
                dict[ parts[0] ] = decodeURIComponent(String(parts[1]||''));
            });
            return dict;
        }
    };
    return Util;
});