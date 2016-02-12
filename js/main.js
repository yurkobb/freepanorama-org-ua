jQuery(function ($) {
    /* The photoflashmob button popup */
    var flashmob = {
        desc: $('#photoflashmob'),
        button: $('.button.photoflashmob')
    };

    flashmob.desc.addClass('mfp-hide');

    flashmob.button.magnificPopup({
        type: 'inline'
    });
});
