define(function() {
    var PREFIX = 'cf_';
    var Enabled = false;

    var MyStorage = {
        answers: {},
        get: function(key, defaultVal, prefix) {
            prefix = prefix || PREFIX;
            defaultVal = (typeof defaultVal === 'undefined') ? '' : defaultVal;

            if (this.answers.hasOwnProperty(key)) {
                return this.answers[key];
            }
            return defaultVal;
        },
        save: function(theDict, prefix) {
            prefix = prefix || PREFIX;

            for (var key in theDict) {
                if (key && theDict.hasOwnProperty(key)) {
                    localStorage[ prefix + key ] = theDict[ key ]();
                }
            }
        },
        load: function(prefix) {
            prefix = prefix || PREFIX;
            var answers = {};
            for (var key in localStorage) {
                if (key && key.startsWith(prefix)) {
                    if (localStorage.hasOwnProperty(key)) {
                        k = key.split(prefix)[1];
                        answers[ k ] = localStorage[ key ] || '';
                    }
                }
            }
            this.answers = answers;
            return answers;
        }
    };
    return MyStorage;
});