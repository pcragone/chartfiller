var PageMenu = {
    btnFill: null,
    fields: {},
    init: function() {
        var self = this;
        self.btnFill = self.getButton();
        $('.headerTable').append(self.btnFill);

        self.getFields();

        self.highlightFields();

        self.btnFill.click(function() {
            self.fillFields();
        });
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
    },
    getFields: function() {
        var self = this;
        chrome.extension.sendMessage({
            greeting: window.location.pathname
        },function(data) {
            self.fields = data;
        });
    },
    highlightFields: function() {
        var self = this;
        for (var key in self.fields) {
            if (key && self.fields.hasOwnProperty(key)) {
                var input = $('[name="' + key + '"]');
                if (self.fields[key] != '') {
                    input.css({'border':'1px solid #f80'});
                }
            }
        }
    },
    fillFields: function(data) {
        var self = this;
        data = data || self.fields;

        for (var key in data) {
            if (key && data.hasOwnProperty(key)) {
                var input = $('[name="' + key + '"]');
                if (input.length) {
                    switch (input[0].tagName)
                    {
                    case 'TEXTAREA':
                        input.text( data[key] );
                        break;
                    case 'SELECT':
                    case 'INPUT':
                    default:
                        input.val( data[key] );
                        break;
                    }
                }
            }
        }
    }
};

$(document).ready(function() {
    PageMenu.init();
});