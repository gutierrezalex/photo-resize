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
            unscaledHeight: -1,
            unscaledWidth: -1,
        };

        $(element).load(function () {
            init();
            changeDimensions();

            $(window).bind('resize', function () {
                changeDimensions();
            });
        });

        options = $.extend(defaults, options);

        function init() {
            // remember initial picture size (used as maximum size)
            options.unscaledHeight = $(element).height();
            options.unscaledWidth = $(element).width();
        }
        function changeDimensions() {
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

