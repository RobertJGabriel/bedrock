(function() {
    'use strict';

    // update dl link for windows to point to win64
    var $platformLink = $('#download-button-wrapper-desktop .download-list li:visible .download-link');

    var newHref = $platformLink.attr('href').replace('os=win&', 'os=win64&');

    $platformLink.attr('href', newHref);
})();
