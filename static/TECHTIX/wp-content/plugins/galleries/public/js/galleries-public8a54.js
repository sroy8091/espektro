(function( $ ) {
	'use strict';

	/**
	 * All of the code for your public-facing JavaScript source
	 * should reside in this file.
	 *
	 * Note: It has been assumed you will write jQuery code here, so the
	 * $ function reference has been prepared for usage within the scope
	 * of this function.
	 *
	 * This enables you to define handlers, for when the DOM is ready:
	 *
	 * $(function() {
	 *
	 * });
	 *
	 * When the window is loaded:
	 *
	 * $( window ).load(function() {
	 *
	 * });
	 *
	 * ...and/or other possibilities.
	 *
	 * Ideally, it is not considered best practise to attach more than a
	 * single DOM-ready or window-load handler for a particular page.
	 * Although scripts in the WordPress core, Plugins and Themes may be
	 * practising this, we should strive to set a better example in our own work.
	 */
	 $( window ).load(function() {
		 var arr_img = [];
		 var indexGallery = 0;

		$('div.item-photo.smart-item').each(function( index) {
			arr_img[index] = $(this).attr('data-img');
		});

		jQuery('.item-photo').on('click', function() {

			if(jQuery(window).width()>=768){
				var img = new Image();
				indexGallery=  parseInt(jQuery(this).attr('data-index'));
				img.src = jQuery(this).attr('data-img');
			//	showscarousel.trigger('slideTo', [ 'div[data-index="'+indexGallery+'"]' ]);
				jQuery('.img-show').attr({'data-index': indexGallery});
				if(img.width > img.height){
					if(jQuery(window).width()<=1024){
							jQuery('.images-content').css('width', '75%');

					}
					else{
						jQuery('.images-content').css('width', '70%');
					}
				}else {
					if(jQuery(window).width()<=1024){
							jQuery('.images-content').css('width', '60%');
					}
					else {
							jQuery('.images-content').css('width', '40%');
					}

				}
				jQuery('.img-show').attr('src', jQuery(this).attr('data-img'));

				if(indexGallery > 0 && indexGallery < parseInt(arr_img.length - 1)) {
					jQuery('.gallery-prev').attr({'data-index':indexGallery - 1});
					jQuery('.gallery-next').attr({'data-index':indexGallery + 1});

				}else if(indexGallery == parseInt(arr_img.length - 1)) {
					jQuery('.gallery-prev').attr({'data-index':indexGallery - 1});
					jQuery('.gallery-next').attr({'data-index':0});

				}else{
					jQuery('.gallery-prev').attr({'data-index':arr_img.length - 1});
					jQuery('.gallery-next').attr({'data-index':indexGallery + 1});
				}

				jQuery('.shows-img-overlay').fadeIn();
			}
		});
		$('.gallery-prev').on('click', function() {
				var thisElem = this;
				showscarousel.trigger('slideTo', [ 'div[data-index="'+jQuery(thisElem).attr('data-index')+'"]' ]);
				jQuery('.images-content').fadeOut("200", function() {
						jQuery('.img-show').attr('src', arr_img[jQuery(thisElem).attr('data-index')]);
						jQuery('.img-show').attr('data-img', arr_img[jQuery(thisElem).attr('data-index')]);
						jQuery('.images-content').fadeIn("200");
				});
				indexGallery = parseInt(jQuery(this).attr('data-index'));

		});
		$('.gallery-next').on('click', function() {
				var thisElem = this;
				showscarousel.trigger('slideTo', [ 'div[data-index="'+jQuery(thisElem).attr('data-index')+'"]' ]);
				jQuery('.images-content').fadeOut("200", function() {
						jQuery('.img-show').attr('src', arr_img[jQuery(thisElem).attr('data-index')]);
						jQuery('.img-show').attr('data-img', arr_img[jQuery(thisElem).attr('data-index')]);
						jQuery('.images-content').fadeIn("200");
				});
				indexGallery = parseInt(jQuery(this).attr('data-index'));


	  });
		jQuery('.img-show').on('load', function(e) {
			var img = new Image();


			img.src = jQuery(this).attr('src');
			jQuery(this).attr({'data-index': indexGallery});

			if(img.width > img.height){
				if(jQuery(window).width()<=1024){
						jQuery('.images-content').css('width', '75%');
				}
				else{
					jQuery('.images-content').css('width', '70%');
				}
			}else {
				if(jQuery(window).width()<=1024){
						jQuery('.images-content').css('width', '60%');
				}
				else {
						jQuery('.images-content').css('width', '40%');
				}

			}
			if(indexGallery > 0 && indexGallery < parseInt(arr_img.length - 1)) {
				jQuery('.gallery-prev').attr({'data-index':indexGallery - 1});
				jQuery('.gallery-next').attr({'data-index':indexGallery + 1});

			}else if(indexGallery == parseInt(arr_img.length - 1)) {
				jQuery('.gallery-prev').attr({'data-index':indexGallery - 1});
				jQuery('.gallery-next').attr({'data-index':0});

			}else{
				jQuery('.gallery-prev').attr({'data-index':arr_img.length - 1});
				jQuery('.gallery-next').attr({'data-index':indexGallery + 1});
			}

		});
		 $('.close-overlay').on('click', function() {
  		 $('.shows-img-overlay').fadeOut();
  	 });

	 });

})( jQuery );
