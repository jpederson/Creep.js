/*
 * Creep.js
 * http://creepjs.com
 * Author: James Pederson (jpederson.com)
 * Licensed under the MIT, GPL licenses.
 * Version: 1.1.0
 */

;(function( $, window, document, undefined ){

	// let's start our plugin logic
	$.extend($.fn, {

		// Creep when you click the selected element(s)
		creep: function( options ){

			// set our options from the defaults, overriding with the
			// parameter we pass into this function.
			options = $.extend( {}, $.fn.creep.options, options );

			// Iterate through all the matching elements and return
			// the jquery object to preserve chaining.
			return this.each(function(){

				// Store a jQuery object for our element so we can use it
				// inside our other bindings.
				var elem = $(this);
 
				// bind to click event
				elem.click(function( event ) {
					
					var href = elem.attr("href"),
						href_trimmed = href.replace( "#", "" );

					// only do this if it's an anchor link
					if ( href.match( "#" ) && href !== "#" && !href.match( "http" ) ) {

						// prevent default click propagation
						event.preventDefault();

						// do the scroll
						creepToElement( href_trimmed, options );
						   
						// fallback to prevent jitter
						return false;

					}

				});
 
			});

		},


		// Creep to the selected element
		creepTo: function( options ){

			// set our options from the defaults, overriding with the
			// parameter we pass into this function.
			options = $.extend( {}, $.fn.creep.options, options );

			// Iterate through all the matching elements and return
			// the jquery object to preserve chaining.
			return this.each(function(){

				// Store a jQuery object for our element so we can use it
				// inside our other bindings.
				var elem = $(this);
 
				// bind to click event
				elem.click(function( event ) {

					var href = elem.attr("href"),
						href_trimmed = href.replace( "#", "" );

					// only do this if it's an anchor link
					if ( href.match( "#" ) && href !== "#" && !href.match( "http" ) ) {

						// prevent default click propagation
						event.preventDefault();

						// creep to the element
						creepToElement( href_trimmed, options );
						   
						// fallback to prevent jitter
						return false;

					}

				});
 
			});

		}

	});
 


	// scroll handler
	var creepToElement = function( id, options ) {

		// grab the element to scroll to based on the name
		var dest = $("a[name='"+ id +"']");

		// if that didn't work, look for an element with our ID
		if ( typeof( dest.offset() ) === "undefined" ) {
			dest = $("#"+id);
		}

		// if the destination element exists
		if ( typeof( dest.offset() ) !== "undefined" ) {

			// do the scroll
			$('html, body').animate({
				scrollTop: dest.offset().top + options.offset
			}, options.offset );

			// if we have pushState
			if ( history.pushState ) {
				history.pushState( null, null, '#'+id );
			}
			
		}

	};



	// DEFAULTS
	// Set up some default options for our plugin that can be overridden 
	// as needed when we actually instantiate our plugin link elements.
	$.fn.creep.options = {
		offset: 0,
		speed: 1000
	};


})( jQuery, window, document );