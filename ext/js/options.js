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


$(function() {
    cheet('↑ ↑ ↓ ↓ ← → ← → b a', konami);

    $('#btnSettings').click(function() {
        showCharm('#chSettings');
    });
});