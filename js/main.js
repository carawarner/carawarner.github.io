( function( $ ) {

    // Don't display image until it has loaded fully
    var img = new Image();
    img.src = 'http://carawarner.github.io/img/cloudy-landscape.jpg';

    var int = setInterval(function() {
        if (img.complete) {
            clearInterval(int);
            document.getElementById('hello').style.backgroundImage = 'url(' + img.src + ')';
        }
    }, 50);

} )( jQuery );