export default {
    init() {
        if("ontouchstart" in window){
            document.documentElement.className = document.documentElement.className + " touch";
        }
        if(!$("html").hasClass("touch")){
            /* background fix */
            $(".parallax").css("background-attachment", "fixed");
        }

        /* fix vertical when not overflow
        call fullscreenFix() if .fullscreen content changes */
        function fullscreenFix(){
            var h = $('body').height();
            // set .fullscreen height
            $(".content-b").each(function(i){
                if($(this).innerHeight() <= h){
                    $(this).closest(".fullscreen").addClass("not-overflow");
                }
            });
        }
        $(window).resize(fullscreenFix);
        fullscreenFix();

        /* resize background images */
        function backgroundResize(){
            var windowH = $(window).height();
            $(".background").each(function(i){
                var path = $(this);
                // variables
                var contW = path.width();
                var contH = path.height();
                var imgW = path.attr("data-img-width");
                var imgH = path.attr("data-img-height");
                var ratio = imgW / imgH;
                // overflowing difference
                var diff = parseFloat(path.attr("data-diff"));
                diff = diff ? diff : 0;
                // remaining height to have fullscreen image only on parallax
                var remainingH = 0;
                if(path.hasClass("parallax") && !$("html").hasClass("touch")){
                    var maxH = contH > windowH ? contH : windowH;
                    remainingH = windowH - contH;
                }
                // set img values depending on cont
                imgH = contH + remainingH + diff;
                imgW = imgH * ratio;
                // fix when too large
                if(contW > imgW){
                    imgW = contW;
                    imgH = imgW / ratio;
                }
                //
                path.data("resized-imgW", imgW);
                path.data("resized-imgH", imgH);
                path.css("background-size", imgW + "px " + imgH + "px");
            });
        }
        $(window).resize(backgroundResize);
        $(window).focus(backgroundResize);
        backgroundResize();

        /* set parallax background-position */
        function parallaxPosition(e){
            var heightWindow = $(window).height();
            var topWindow = $(window).scrollTop();
            var bottomWindow = topWindow + heightWindow;
            var currentWindow = (topWindow + bottomWindow) / 2;
            $(".parallax").each(function(i){
                var path = $(this);
                var height = path.height();
                var top = path.offset().top;
                var bottom = top + height;
                // only when in range
                if(bottomWindow > top && topWindow < bottom){
                    var imgW = path.data("resized-imgW");
                    var imgH = path.data("resized-imgH");
                    // min when image touch top of window
                    var min = 0;
                    // max when image touch bottom of window
                    var max = - imgH + heightWindow;
                    // overflow changes parallax
                    var overflowH = height < heightWindow ? imgH - height : imgH - heightWindow; // fix height on overflow
                    top = top - overflowH;
                    bottom = bottom + overflowH;
                    // value with linear interpolation
                    var value = min + (max - min) * (currentWindow - top) / (bottom - top);
                    // set background-position
                    var orizontalPosition = path.attr("data-oriz-pos");
                    orizontalPosition = orizontalPosition ? orizontalPosition : "50%";
                    $(this).css("background-position", orizontalPosition + " " + value + "px");
                }
            });
        }
        if(!$("html").hasClass("touch")){
            $(window).resize(parallaxPosition);
            //$(window).focus(parallaxPosition);
            $(window).scroll(parallaxPosition);
            parallaxPosition();
        }


        $(window).load(function() {
            $('#loader').delay(600).fadeOut('slow');
            $('#loader-container').delay(600).fadeOut('slow');
            $('body').delay(600).css({'overflow':'visible'});
        });

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

        $('a[data-gal]').each(function() {
            $(this).attr('rel', $(this).data('gal'));
        });     
        $("a[data-gal^='prettyPhoto']").prettyPhoto({animationSpeed:'slow',slideshow:false,overlay_gallery: false,theme:'light_square',social_tools:false,deeplinking:false});

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

    $(document).ready(function() {
        $('#banner1').show().revolution( {
            dottedOverlay:"none",
            delay:9000,
            startwidth:1170,
            startheight:900,
            hideThumbs:200,          
            thumbWidth:100,
            thumbHeight:50,
            thumbAmount:4,
            navigationType:"none",
            navigationArrows:"solo",
            navigationStyle:"preview3",
            touchenabled:"on",
            onHoverStop:"on",
            swipe_velocity: 0.7,
            swipe_min_touches: 1,
            swipe_max_touches: 1,
            drag_block_vertical: false,
            parallax:"scroll",
            parallaxBgFreeze:"on",
            parallaxLevels:[10,20,30,40,50,60,70,80,90,100],                                 
            keyboardNavigation:"off",        
            navigationHAlign:"center",
            navigationVAlign:"bottom",
            navigationHOffset:0,
            navigationVOffset:20,
            soloArrowLeftHalign:"left",
            soloArrowLeftValign:"center",
            soloArrowLeftHOffset:20,
            soloArrowLeftVOffset:0,
            soloArrowRightHalign:"right",
            soloArrowRightValign:"center",
            soloArrowRightHOffset:20,
            soloArrowRightVOffset:0,
            shadow:0,
            fullWidth:"on",
            fullScreen:"off",
            spinner:"spinner4",
            stopLoop:"off",
            stopAfterLoops:-1,
            stopAtSlide:-1,
            shuffle:"off",     
            autoHeight:"off",                       
            forceFullWidth:"on",                        
            hideThumbsOnMobile:"off",
            hideNavDelayOnMobile:1500,                      
            hideBulletsOnMobile:"off",
            hideArrowsOnMobile:"off",
            hideThumbsUnderResolution:0,
            hideSliderAtLimit:0,
            hideCaptionAtLimit:0,
            hideAllCaptionAtLilmit:0,
            startWithSlide:0    
        });
    }); //ready   

    $(document).ready(function() {
        $('#banner3').show().revolution( {
            dottedOverlay:"none",
            delay:9000,
            startwidth:1170,
            startheight:865,
            hideThumbs:200,          
            thumbWidth:100,
            thumbHeight:50,
            thumbAmount:4,
            navigationType:"none",
            navigationArrows:"solo",
            navigationStyle:"preview3",
            touchenabled:"on",
            onHoverStop:"on",
            swipe_velocity: 0.7,
            swipe_min_touches: 1,
            swipe_max_touches: 1,
            drag_block_vertical: false,
            parallax:"scroll",
            parallaxBgFreeze:"on",
            parallaxLevels:[10,20,30,40,50,60,70,80,90,100],                                 
            keyboardNavigation:"off",        
            navigationHAlign:"center",
            navigationVAlign:"bottom",
            navigationHOffset:0,
            navigationVOffset:20,
            soloArrowLeftHalign:"left",
            soloArrowLeftValign:"center",
            soloArrowLeftHOffset:20,
            soloArrowLeftVOffset:0,
            soloArrowRightHalign:"right",
            soloArrowRightValign:"center",
            soloArrowRightHOffset:20,
            soloArrowRightVOffset:0,
            shadow:0,
            fullWidth:"on",
            fullScreen:"off",
            spinner:"spinner4",
            stopLoop:"off",
            stopAfterLoops:-1,
            stopAtSlide:-1,
            shuffle:"off",     
            autoHeight:"off",                       
            forceFullWidth:"on",                        
            hideThumbsOnMobile:"off",
            hideNavDelayOnMobile:1500,                      
            hideBulletsOnMobile:"off",
            hideArrowsOnMobile:"off",
            hideThumbsUnderResolution:0,
            hideSliderAtLimit:0,
            hideCaptionAtLimit:0,
            hideAllCaptionAtLilmit:0,
            startWithSlide:0    
        });
    }); //ready    

    $(document).ready(function() {
        $('#banner2').show().revolution( {
            dottedOverlay:"none",
            delay:16000,
            startwidth:1170,
            startheight:700,
            hideThumbs:200,          
            thumbWidth:100,
            thumbHeight:50,
            thumbAmount:4,
            navigationType:"none",
            navigationArrows:"solo",
            navigationStyle:"preview2",
            touchenabled:"on",
            onHoverStop:"on",
            swipe_velocity: 0.7,
            swipe_min_touches: 1,
            swipe_max_touches: 1,
            drag_block_vertical: false,
            parallax:"scroll",
            parallaxBgFreeze:"on",
            parallaxLevels:[10,20,30,40,50,60,70,80,90,100],                                 
            keyboardNavigation:"off",        
            navigationHAlign:"center",
            navigationVAlign:"bottom",
            navigationHOffset:0,
            navigationVOffset:20,
            soloArrowLeftHalign:"left",
            soloArrowLeftValign:"center",
            soloArrowLeftHOffset:20,
            soloArrowLeftVOffset:0,
            soloArrowRightHalign:"right",
            soloArrowRightValign:"center",
            soloArrowRightHOffset:20,
            soloArrowRightVOffset:0,
            shadow:0,
            fullWidth:"off",
            fullScreen:"off",
            spinner:"spinner4",
            stopLoop:"off",
            stopAfterLoops:-1,
            stopAtSlide:-1,
            shuffle:"off",     
            autoHeight:"off",                       
            forceFullWidth:"off",                        
            hideThumbsOnMobile:"off",
            hideNavDelayOnMobile:1500,                      
            hideBulletsOnMobile:"off",
            hideArrowsOnMobile:"off",
            hideThumbsUnderResolution:0,
            hideSliderAtLimit:0,
            hideCaptionAtLimit:0,
            hideAllCaptionAtLilmit:0,
            startWithSlide:0    
        });
    }); //ready

    $(document).ready(function() {
        $('#banner4').show().revolution( {
            dottedOverlay:"none",
            delay:16000,
            startwidth:1170,
            startheight:700,
            hideThumbs:200,          
            thumbWidth:100,
            thumbHeight:50,
            thumbAmount:4,
            navigationType:"none",
            navigationArrows:"solo",
            navigationStyle:"preview4",
            touchenabled:"on",
            onHoverStop:"on",
            swipe_velocity: 0.7,
            swipe_min_touches: 1,
            swipe_max_touches: 1,
            drag_block_vertical: false,
            parallax:"scroll",
            parallaxBgFreeze:"on",
            parallaxLevels:[10,20,30,40,50,60,70,80,90,100],                                 
            keyboardNavigation:"off",        
            navigationHAlign:"center",
            navigationVAlign:"bottom",
            navigationHOffset:0,
            navigationVOffset:20,
            soloArrowLeftHalign:"left",
            soloArrowLeftValign:"center",
            soloArrowLeftHOffset:20,
            soloArrowLeftVOffset:0,
            soloArrowRightHalign:"right",
            soloArrowRightValign:"center",
            soloArrowRightHOffset:20,
            soloArrowRightVOffset:0,
            shadow:0,
            fullWidth:"on",
            fullScreen:"on",
            spinner:"spinner4",
            stopLoop:"off",
            stopAfterLoops:-1,
            stopAtSlide:-1,
            shuffle:"off",     
            autoHeight:"off",                       
            forceFullWidth:"on",                        
            hideThumbsOnMobile:"off",
            hideNavDelayOnMobile:1500,                      
            hideBulletsOnMobile:"off",
            hideArrowsOnMobile:"off",
            hideThumbsUnderResolution:0,
            hideSliderAtLimit:0,
            hideCaptionAtLimit:0,
            hideAllCaptionAtLilmit:0,
            startWithSlide:0,
            fullScreenOffsetContainer: ".topbar"    
        });
    }); //r
    }
}