/**
 * This file is injected into each page.
 */
var ChartPage = {
    page: '',
    fields: [],
    init: function(fields) {
	this.fields = fields || [];
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
    }
};

var allFields = {
    'page2': [
	'PRMAIN_cc',
	'PRMAIN_ccduration',
	'PRMAIN_ccdurunits',
	'PRMAIN_hpi',
	'PRMAIN_belongings',
	'PRMAIN_als_assessment',
	'scene_description',
	'pt_mvoed_via',
	'pt_position',
	'pt_moved_from',
	'stretcher_purpose_descr'
    ],
    'page3': {

    }
};

/**
 * Apply an outline to inputs in emscharts
 * for which we have a stored default value.
 */
function highlight_values() {

}


function get_button() {
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

$(document).ready(function() {
    var valid = false;
    var page = window.location.pathname;
    var pages = ['page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8'];

    $('.headerTable').append(get_button());

    for (var i = 0; i < pages.length; i++) {
	if (page.indexOf(pages[i]) > -1) {
	    ChartPage.page = pages[i];
	    ChartPage.init(allFields[ pages[i] ]);
	    break;
	}
    }
});