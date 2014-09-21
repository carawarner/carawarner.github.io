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

    // Alter nav bar to preserve legibility when moving from dark bg to light

    var mainbottom = $('#hello').offset().top + $('#hello').height() - $('#navigation').height();
    console.log(mainbottom);

    $(window).scroll(function(){
        console.log("testing");
    });

    // on scroll,
    $(window).on('scroll',function(){
        console.log("scrolling");
        // we round here to reduce a little workload
        stop = Math.round($(window).scrollTop());
        if (stop > mainbottom) {
            console.log("invert");
            $('#navigation').addClass('inverted');
        } else {
            console.log("uninvert");
            $('#navigation').removeClass('inverted');
        }

    });


} )( jQuery );