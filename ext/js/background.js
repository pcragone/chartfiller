(function() {
    "use strict";

    chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
        switch (request.greeting) {
        case 'get_values':
            sendResponse(localStorage);
            break;
        }
    });
})();