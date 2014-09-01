( function( $ ) {

    // Setup variables
    $window = $(window);
    $parallax = $('.parallax');
    $body = $('body');

    adjustWindow();

    function adjustWindow(){

        // Init Skrollr
        var s = skrollr.init({
            forceHeight: false
        });

        // Get window size
        winH = $window.height();

        // Resize slides
        $parallax.height(winH);

        // Refresh Skrollr after resizing our sections
        s.refresh($('.parallax'));
    }

} )( jQuery );