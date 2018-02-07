(function($) {
    "use strict";

    /* ==============================================
    LOADER -->
    =============================================== */

    $(window).load(function() {
        $('#loader').delay(600).fadeOut('slow');
        $('#loader-container').delay(600).fadeOut('slow');
        $('body').delay(600).css({'overflow':'visible'});
    })
    
    /* ==============================================
    MENU HOVER -->
    =============================================== */

    $(".header .dropdown").hover(            
        function() {
            $('.dropdown-menu', this).stop( true, true ).slideDown("fast");
            $(this).toggleClass('open');        
        },
        function() {
            $('.dropdown-menu', this).stop( true, true ).slideUp("fast");
            $(this).toggleClass('open');       
        }
    );

    /* ==============================================
    ACCORDION -->
    =============================================== */

    function toggleChevron(e) {
        $(e.target)
            .prev('.panel-heading')
            .find("i.indicator")
            .toggleClass('icon-minus icon-plus');
    }
    $('#accordion').on('hidden.bs.collapse', toggleChevron);
    $('#accordion').on('shown.bs.collapse', toggleChevron);

    function toggleChevron(e) {
        $(e.target)
            .prev('.panel-heading')
            .find("i.indicator")
            .toggleClass('icon-minus icon-plus');
    }
    $('#accordion1').on('hidden.bs.collapse', toggleChevron);
    $('#accordion1').on('shown.bs.collapse', toggleChevron);

    /* ==============================================
    CIRCLE -->
    =============================================== */

        $('#circle1').circleProgress({
            value: 0.36,
            size: 200,
            thickness: 10,
            fill: { color: '#ffc926' }
        });
        $('#circle2').circleProgress({
            value: 0.58,
            size: 200,
            thickness: 10,
            fill: { color: '#ffc926' }
        });
        $('#circle3').circleProgress({
            value: 0.70,
            size: 200,
            thickness: 10,
            fill: { color: '#ffc926' }
        });
        $('#circle4').circleProgress({
            value: 0.90,
            size: 200,
            thickness: 10,
            fill: { color: '#ffc926' }
        });

    /* ==============================================
    PROGRESS BAR -->
    =============================================== */

    $('.progress .progress-bar').progressbar({transition_delay: 800});

    /* ==============================================
    LIGHTBOX -->
    =============================================== */

    jQuery('a[data-gal]').each(function() {
        jQuery(this).attr('rel', jQuery(this).data('gal'));
        });     
    jQuery("a[data-gal^='prettyPhoto']").prettyPhoto({animationSpeed:'slow',slideshow:false,overlay_gallery: false,theme:'light_square',social_tools:false,deeplinking:false});

    /* ==============================================
    CAROUSEL -->
    =============================================== */

        $('#testimonials').owlCarousel({
            loop:true,
            margin:30,
            nav:false,
            dots:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        })

        $('.owl-fullwidth').owlCarousel({
            loop:true,
            margin:0,
            nav:true,
            dots:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:2
                }
            }
        })

    /* ==============================================
    DATAPICKER -->
    =============================================== */

        $( "#datepicker" ).datepicker();
        $( "#datepicker1" ).datepicker();
        $( "#datepicker2" ).datepicker();
        $( "#datepicker3" ).datepicker();
        $( "#datepicker4" ).datepicker();
        $( "#datepicker5" ).datepicker();
        $( "#datepicker6" ).datepicker();
        $( "#datepicker7" ).datepicker();
        $( "#datepicker8" ).datepicker();
        $( "#datepicker9" ).datepicker();

    /* ==============================================
    MAP -->
    =============================================== */

    var locations = [
        ['OUR INFORMATIONS', -37.801578, 145.060508, 2]
        ];
    
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
            scrollwheel: false,
            navigationControl: true,
            mapTypeControl: false,
            scaleControl: false,
            draggable: true,
            styles: [ { "stylers": [ { "hue": "#000" },  {saturation: -100},
                {gamma: 1.6} ] } ],
            center: new google.maps.LatLng(-37.801578, 145.060508),
          mapTypeId: google.maps.MapTypeId.ROADMAP
        });
    
        var infowindow = new google.maps.InfoWindow();
    
        var marker, i;
    
        for (i = 0; i < locations.length; i++) {  
      
            marker = new google.maps.Marker({ 
            position: new google.maps.LatLng(locations[i][1], locations[i][2]), 
            map: map ,
            icon: 'images/marker.png'
            });
    
    
          google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
              infowindow.setContent(locations[i][0]);
              infowindow.close(map, marker);
            }
        })(marker, i));
    }

    })(jQuery);