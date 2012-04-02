/// <reference path="jquery-1.5.1.min.js" />

/*
* Adjust photo on browser window resize
* 
* @example: $('selector').photoResize();
* 
* @example:
	$('selector').photoResize({
		bottomSpacing:"Bottom Spacing adjustment"
	});
*/

(function ($) {

	$.fn.photoResize = function (options) {

		var element	= $(this), 
			defaults = {
	            bottomSpacing: 10
			};
		
		$(element).load(function () {
			changePhotoHeight();

			$(window).bind('resize', function () {
				changePhotoHeight();
			});
		});

		options = $.extend(defaults, options);

		function changePhotoHeight() {
			var o = options, 
				photoHeight = $(window).height();

			$(element).attr('height', photoHeight - o.bottomSpacing);
		}
	};

}(jQuery));


/*
* Adjust some element's right and lower boundaries on browser window resize
* 
* @example: $('selector').shrinkToWindow();
*/

(function ($) {
    $.fn.shrinkToWindow = function (options) {

        var element = $(this),
        defaults = {
            bottomSpacing: 15,
            rightSpacing: 20,
            // remember initial picture size (used as maximum size)
            unscaledHeight: $(element).height(),
            unscaledWidth: $(element).width(),
        };
        options = $.extend(defaults, options);
        
        $(element).load(function () {
            changeDimensions();
        });
        // the load event is a bit tricky -- it seems to not fire if
        // the element has been loaded very fast... i.e. from the browser's cache.
        // Therefore we force dimension change even before any load event has
        // been received:
        changeDimensions();
        $(window).bind('resize', function () {
            changeDimensions();
        });

        function changeDimensions() {
            // again, we might have to load the picture, yet...
            if ( options.unscaledHeight == 0 ) {
                options.unscaledHeight = $(element).height();
                options.unscaledWidth = $(element).width();
            }   
            if ( options.unscaledHeight == 0 ) return;
            
            var maxDisplayHeight = $(window).height() - $(element).offset().top - options.bottomSpacing;
            var maxDisplayWidth  = $(window).width() - $(element).offset().left - options.rightSpacing;
            var desiredHeight = maxDisplayHeight < options.unscaledHeight ? maxDisplayHeight : options.unscaledHeight;
            var desiredWidth  = maxDisplayWidth  < options.unscaledWidth  ? maxDisplayWidth  : options.unscaledWidth;
            var currHeight = $(element).height();
            var currWidth  = $(element).width();

            if ( currHeight != desiredHeight || currWidth != desiredWidth ) {
                // keep aspect ratio
                if ( desiredHeight / options.unscaledHeight <= desiredWidth / options.unscaledWidth ) {
                    $(element).height(desiredHeight);
                    $(element).width(options.unscaledWidth * desiredHeight / options.unscaledHeight);
                } else {
                    $(element).height(options.unscaledHeight * desiredWidth / options.unscaledWidth);
                    $(element).width(desiredWidth);
                }
            }
        }
    };

}(jQuery));

