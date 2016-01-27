require.config({
    paths: {
        "jquery": "jquery",
        "knockout": "knockout-3.4.0",
    }
});
require([
    "jquery",
    "knockout",
    "app",
    "cheet.min",
    "tetris",
    "metro"
], function($, ko, App, cheet, tetris, metro) {
    "use strict";

    $('#document').ready(function() {
        ko.applyBindings(new App());

        cheet('↑ ↑ ↓ ↓ ← → ← → b a', konami);

        $('#btnToggleTiles').click(toggleTiles);

        $('#btnSettings').click(function() {
            showCharm('#chSettings');
        });
    });

});

function konami() {
    $.Notify({
        caption: 'Achievement Unlocked',
        content: '+ 30 Lives',
        type: 'success'
    });
}

/**
 * Displays a given Charm
 */
function showCharm(id) {
    var charm = $(id).data('charm');
    if (charm.element.data('opened') === true) {
        charm.close();
    } else {
        charm.open();
    }
}

function toggleTiles() {
    var div = $('#divTiles');
    var title = 'Close';
    var icon = 'expand-less';

    if (div.is(':visible')) {
        div.slideUp();
        title = 'Open';
        icon = 'expand-more';
    } else {
        div.slideDown();
    }

    $(this).attr('title', title)
        .find('span')
        .removeClass('mif-expand-less')
        .removeClass('mif-expand-more')
        .addClass('mif-' + icon);
}
