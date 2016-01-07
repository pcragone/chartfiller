/**
 * This file is injected into each page.
 */
var ChartPage = {
    page: '',
    fields: [],
    init: function(fields) {
        var self = this;
        self.fields = fields || [];
        $('.headerTable').append(self.getButton());
    },
    fill: function() {
        var self = this;
        if (self.page) {
            chrome.extension.sendMessage({
                greeting: window.location.pathname
            }, function(response) {
                for (var key in response) {
                    if (key && response.hasOwnProperty(key)) {
                        $('input[name="' + key + '"]').val( response[key] );
                    }
                }
            });
        }
    },
    /**
     * Creates the main 'AutoComplete' button.
     */
    getButton: function() {
        var button = $('<button/>');
        button.addClass('chartfiller-autocomplete');
        button.text('AutoComplete');
        button.css({
            'color': '#efefef',
            'border': 'none',
            'outline': 'none',
            'font-size': '0.9rem',
            'padding': '0.25em 1em',
            'display': 'block',
            'background': '#FF5E00',
            'cursor':'pointer'
        });
        return button;
    }
};

/**
 * Apply an outline to inputs in emscharts
 * for which we have a stored default value.
 */
function highlight_values() {

}


function

$(document).ready(function() {
    var valid = false;
    var page = window.location.pathname;
    var pages = ['page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8'];



    for (var i = 0; i < pages.length; i++) {
        if (page.indexOf(pages[i]) > -1) {
            ChartPage.page = pages[i];
            ChartPage.init(allFields[ pages[i] ]);
            break;
        }
    }
});