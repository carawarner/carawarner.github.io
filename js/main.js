( function( $ ) {

    // Setup variables
    $window = $(window);
    $body = $('body');

    var img = new Image();
    img.src = 'http://carawarner.github.io/img/cloudy-landscape.jpg';

    console.log("hello");
    var int = setInterval(function() {
        console.log("This is firing");
        if (img.complete) {
            clearInterval(int);
            document.getElementById('hello').style.backgroundImage = 'url(' + img.src + ')';
        }
    }, 50);

} )( jQuery );