( function( $ ) {

    // Setup variables
    $window = $(window);
    $parallax = $('.parallax');
    $body = $('body');

    $body.imagesLoaded( function() {
        setTimeout(function() {
            console.log("Images loaded");
            // Resize sections
            adjustWindow();

        }, 800);
    });

    function adjustWindow(){
        console.log("Adjusting window");
        // Init Skrollr
        var s = skrollr.init({
            forceHeight: false
        });

        // Get window size
        winH = $window.height();

        // Keep minimum height 550
        if(winH <= 550) {
            winH = 550;
        }

        // Resize our slides
        $parallax.height(winH);

        // Refresh Skrollr after resizing our sections
        s.refresh($('.parallax'));
    }

} )( jQuery );