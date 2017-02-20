// JavaScript Document*/*
var cat_id = 0;
var openMenu = false;
var coming = "false";
var lastScrollTop = 25;

jQuery(document).on("click",".deleteBtn", function (e) {
	 e.preventDefault();
   jQuery(this).parent().remove()
});
jQuery(document).on("change",".wpcf7-file", function (e) {
	 e.preventDefault();
	 var reader = new FileReader();
	 var that = this;
   reader.onload = function (e) {
       jQuery(that).parent().parent().prev().children().attr('src', e.target.result);
   }

   reader.readAsDataURL(this.files[0]);
});

jQuery(document).ready(function(e) {
	jQuery('.mc4wp-form').on('submit', function(e) {
		if(jQuery('#email').val() == "") {
			jQuery('#email').addClass('error');
			jQuery('.error-msg').fadeIn();
			return false;
		}

	});
	jQuery('.subscribe-open').on('click', function(e) {
		e.preventDefault();
		jQuery('.container-btn-subscriber').fadeOut(200, function(){
				jQuery('.container-subscriber').fadeIn();
		});

		return false;
	});

	jQuery('#more-fields').on('click',function(e) {
		e.preventDefault();
		var fields = jQuery('.fields-file-to').html();

		jQuery('.to-clone').append(fields);

	});

	jQuery('.deleteBtn').on('click',function(e) {
		e.preventDefault();
		alert('remove');
	});
		jQuery('#commentform').submit(function(){

			var flag = true;
			var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			jQuery('#comment').removeClass('not-valid');
			jQuery('#author').removeClass('not-valid');
			jQuery('#email').removeClass('not-valid');
			if(jQuery('#comment').val() == ''){
				jQuery('#comment').addClass('not-valid');
				flag = false;
			}


			if(jQuery('#author').val() == ''){
				jQuery('#author').addClass('not-valid');
				flag = false;
			}
			if(jQuery('#email').val() == ''){
				jQuery('#email').addClass('not-valid');

			}
			if(jQuery('#email').val() != '' && !regex.test(jQuery('#email').val())) {
				jQuery('#email').addClass('not-valid');

				flag = false;
			}
			console.log('email:' + jQuery('#email').val());

			return flag;
		});

		jQuery(window).scroll(function(event){
		   var st = jQuery(this).scrollTop();
		   if (st > lastScrollTop && openMenu){
			  //Remove to phase 2 line69 until line 72
			   /*jQuery('.shows-overlay').slideUp("slow", function(){
				   openMenu =  false;
				   jQuery('.navbar-nav li:first-child a').removeClass('active-text');
			   })*/
		   } else {
		      // upscroll code
		   }

		});
		jQuery('input:text,input[type=email],input[type=url], textarea').each(function(){
		var thisElem = jQuery(this);
		thisElem.data('placeholder', thisElem.attr('placeholder'))
			 .focus(function(){thisElem.removeAttr('placeholder');})
			 .blur(function(){thisElem.attr('placeholder', thisElem.data('placeholder'));});
		});

			jQuery('.navbar-nav li:first-child').click(function(){
					if(jQuery(window).width()>=768 ){
						jQuery(this).addClass('active-text');
						//remov to phase 2 line 89 until line 92
						/*jQuery('.shows-overlay').slideDown("slow", function() {
							openMenu =  true;

						});*/
					}

			});
			if(jQuery(window).width()>=1024){
				jQuery('.navbar-nav li:first-child a span').hover(function(){
					if(!openMenu){
							//Remove to Phase 2 line 100 until line 103
							/*jQuery('.navbar-nav li:first-child a').addClass('active-text');
							jQuery('.shows-overlay').slideDown("slow", function() {
								openMenu =  true;
							});*/

					}
				});
				jQuery('.navbar-nav li:nth-child(n+2) a span').hover(function(){

					if(openMenu){
							jQuery('.navbar-nav li:first-child a').addClass('active-text');
							jQuery('.shows-overlay').slideUp("slow", function() {
								openMenu =  false;
								jQuery('.navbar-nav li:first-child a').removeClass('active-text');
							});

					}
				});
			}else {
				if(!openMenu){
					jQuery('.navbar-nav li:first-child').click(function(){

								jQuery('.navbar-nav li:first-child a').removeClass('active-text');
								//Remove to Phase 2 line 124 until line 126
								/*jQuery('.shows-overlay').slideDown("slow", function() {
									openMenu =  true;
								});*/


					});
				}
			}

		jQuery('#body').hover(function(){

			if(jQuery('.shows-overlay').is(':visible')) {
				jQuery('.navbar-nav li:first-child a').removeClass('active-text');
				jQuery('.shows-overlay').slideUp("slow", function(){
					openMenu =  false;
				});
			}
		});
		jQuery('#player').hover(function(){

			if(jQuery('.shows-overlay').is(':visible')) {
				jQuery('.navbar-nav li:first-child a').removeClass('active-text');
				jQuery('.shows-overlay').slideUp("slow", function(){
					openMenu =  false;
				});
			}
		});
		jQuery.preload(
		  theme_url+'/assets/images/sprites/arrow-cat.png',
		  theme_url+'/assets/images/sprites/arrow-slider.png',
		  theme_url+'/assets/images/sprites/top-icons.png',
		  /*theme_url+'/assets/images/ARROW_LEFT.png',
		  theme_url+'/assets/images/ARROW_LEFT_RO.png',
		  theme_url+'/assets/images/ARROW_CATEGORIES_LEFT.png',
		  theme_url+'/assets/images/ARROW_CATEGORIES_LEFT_RO.png',
		  theme_url+'/assets/images/ARROW_CATEGORIES_RIGHT.png',
		  theme_url+'/assets/images/ARROW_CATEGORIES_RIGHT_RO.png',
		  theme_url+'/assets/images/next-slider.png',
		  theme_url+'/assets/images/next-slider-ro.png',
		  theme_url+'/assets/images/prev-slider.png',
		  theme_url+'/assets/images/prev-slider-ro.png',*/
		  theme_url+'/assets/images/LABEL_0001_ORIGINAL.png',
		  theme_url+'/assets/images/LABEL_0000_EXCLUSIVE.png',
			theme_url+'/assets/images/prev-slider.png',
			theme_url+'/assets/images/next-slider.png',
			theme_url+'/assets/images/prev-slider-ro.png',
			theme_url+'/assets/images/next-slider-ro.png',


			/*theme_url+'/assets/images/top_search.png',
		  theme_url+'/assets/images/top_search_ro.png',
		  theme_url+'/assets/images/top_fb.png',
		  theme_url+'/assets/images/top_fb_ro.png',
		  theme_url+'/assets/images/top_yt.png',
		  theme_url+'/assets/images/top_yt_ro.png',
		  theme_url+'/assets/images/top_tw.png',
		  theme_url+'/assets/images/top_tw_ro.png',
		  theme_url+'/assets/images/top_inst.png',
		  theme_url+'/assets/images/top_inst_ro.png',*/
 	  	  /*theme_url+'/assets/images/bottom_fb.png',
		  theme_url+'/assets/images/bottom_fb_ro.png',
		  theme_url+'/assets/images/bottom_yt.png',
		  theme_url+'/assets/images/bottom_yt_ro.png',
		  theme_url+'/assets/images/bottom_tw.png',
		  theme_url+'/assets/images/bottom_tw_ro.png',
		  theme_url+'/assets/images/bottom_inst.png',
		  theme_url+'/assets/images/bottom_inst_ro.png',*/
		  theme_url+'/assets/images/sprites/bottom-icons.png',
		  theme_url+'/assets/images/TWITTER_BLUE.png',
		  theme_url+'/assets/images/TWITTER_BG.png',
		  theme_url+'/assets/images/TITLEBARBG.png'
		);
		/*jQuery.preload = function(){
		var tmp = [], i = arguments.length;
		for( ; i-- ; ){
			tmp.push( $( '<img/>' ).attr( 'src', arguments[ i ]).load( function(){
				if( i === 0 ){
					arguments[ arguments.length ]();
				}
				}));
			}
		};*/


		jQuery('#sort').change(function(){
			var url = jQuery( "#sort option:selected" ).val();
			window.location.href = url;
		});
		jQuery('#genres').change(function(){
			var url = jQuery( "#genres option:selected" ).val();
			var option = jQuery( "#genres option:selected" ).text();
			jQuery('.option-txt').html(option);
			window.location.href = url;
		});
		jQuery('.menu-link.main-menu-link').click(function(){
			if(jQuery(this).text() == 'OUR SHOWS| ' && jQuery(window).width()>1024) {
				//return true to continue link;
				return true;
			}
			if(jQuery(this).text() !== 'BROWSE ALL| ' && jQuery(this).text() !== 'ABOUT| ' &&  jQuery(this).text() !== 'Contact| '&&  jQuery(this).text() !== 'NEWS| ') {
				if(jQuery(this).text() == 'OUR SHOWS| ' && openMenu && jQuery(window).width()>=768 && coming == "false"){
					return true;
				}
				else if(jQuery(this).text() == 'OUR SHOWS| ' && !openMenu && jQuery(window).width()>=768 && coming == "false"){
					if(jQuery(window).width()>=768 ){
						jQuery(this).addClass('active-text');
						//Remove to Phase 2 line 230 until line 233
						/*jQuery('.shows-overlay').slideDown("slow", function() {
							openMenu =  true;

						});*/
					}
					return false;
				}
				if(jQuery(this).text() == 'OUR SHOWS| ' && openMenu && jQuery(window).width()>=768 && coming == "true"){
					jQuery('.shows-overlay').slideUp("slow", function(){
						openMenu =  false;
						jQuery('.navbar-nav li:first-child a').removeClass('active-text');

					});
				}else if(jQuery(this).text() == 'OUR SHOWS| ' && !openMenu && jQuery(window).width()>=768 && coming == "true"){
					if(jQuery(window).width()>=768 ){
						jQuery(this).addClass('active-text');
						//Remove to Phase 2 line 247 until line 249
						/*jQuery('.shows-overlay').slideDown("slow", function() {
							openMenu =  true;

						});*/
					}
				}


				if( coming == "false") {
					return true;
				}

				return false;
			}

		});

		jQuery('.off-menu .menu-item a').click(function(){
			//Remove to Phase 2 line 266 until line 274
			/*if(jQuery(this).text() !== 'BROWSE ALL' && jQuery(this).text() !== 'ABOUT' && jQuery(this).text() !== 'Contact' && jQuery(this).text() !== 'NEWS' ) {
				if(jQuery(this).text() == 'NINA UNLOCKED'){//&& openMenu && jQuery(window).width()>=768 &&  coming == "false"){
					return true;
				}
				if(coming == "true"){
					jQuery(this).addClass('coming').html('COMING SOON');
				}
				return false;
			}*/
			return true;
		});

		jQuery('.bottom-menu .menu-item a').click(function(){
				return true;

		});
		jQuery('#btn-format').click(function() {

			if(jQuery('#btn-format > .fa').hasClass('fa-angle-down')){
				jQuery('#btn-format > .fa').removeClass('fa-angle-down').addClass('fa-angle-up');
				jQuery('.category-container').addClass('open');
				jQuery('.category-list').addClass('open');
				jQuery(this).addClass('open');

			}else {
				jQuery('#btn-format > .fa').removeClass('fa-angle-up').addClass('fa-angle-down');
				jQuery('.category-container').removeClass('open');
				jQuery('.category-list').removeClass('open');
				if(jQuery('#format').text() === 'format'){
					jQuery(this).removeClass('open');
				}
				//jQuery('.btn-sort').removeClass('open');
			}
		})
		jQuery('.btn-sort').click(function() {
			var id = jQuery(this).attr('id');
			//
			if(id !== 'btn-format') {
				jQuery('.btn-sort').removeClass('open');
				jQuery(this).addClass('open');
				jQuery('#format').html('format');
				jQuery('.category-item').removeClass('selected');
			}

			if(jQuery('.category-list').hasClass('open') && id !== 'btn-format') {
				jQuery('#btn-format > .fa').removeClass('fa-angle-up').addClass('fa-angle-down');
				jQuery('.category-list').removeClass('open');
				jQuery('.btn-sort').removeClass('open');

			}

		});
		jQuery('.category-item').click(function() {
			cat_id = jQuery(this).attr('data-cat-id');
			var cat_name = jQuery(this).attr('data-cat-name');
			jQuery('#pbd-alp-load-posts a').trigger('click');
			jQuery('.category-item').removeClass('selected');
			jQuery(this).addClass('selected');
			jQuery('#format').html(cat_name);
			jQuery('#btn-format > .fa').removeClass('fa-angle-up').addClass('fa-angle-down');
			jQuery('.btn-sort').removeClass('open');
			jQuery('#btn-format').addClass('open');
			jQuery('.category-container').removeClass('open');
			jQuery('.category-list').removeClass('open');

		});
	jQuery( 'div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)' ).addClass( 'buttons_added' ).append( '<input type="button" value="+" id="add" class="plus" />' ).prepend( '<input type="button" value="-" id="minus" class="minus" />' );
	jQuery('.buttons_added #minus').click(function(e) {
		var value = parseInt(jQuery(this).next().val()) - 1;
		if(value>0){
			jQuery(this).next().val(value);
		}
    });
	jQuery('.buttons_added #add').click(function(e) {
		var value = parseInt(jQuery(this).prev().val()) + 1;
		jQuery(this).prev().val(value);
    });

	jQuery("[data-toggle=tooltip]").tooltip();
	jQuery(".gptooltip").tooltip();
	jQuery('.qv_tooltip').tooltipster({
                contentAsHTML: true,
				position: 'right',
				interactive: true,
				fixedWidth:250,
				//theme: 'tm-quickview'
            });
	jQuery(window).scroll(function(e){
	   if(jQuery(document).scrollTop()>jQuery(window).height()){
		   jQuery('a#gototop').removeClass('notshow');
	   }else{
		   jQuery('a#gototop').addClass('notshow');
	   }
	});
	//fix body wrap scroll
	jQuery('#body-wrap').scroll(function(e){
	   if(jQuery('#body-wrap').scrollTop()>jQuery(window).height()){
		   jQuery('a#gototop').removeClass('notshow');
	   }else{
		   jQuery('a#gototop').addClass('notshow');
	   }
	});
	// Amazing
    jQuery('.amazing').each(function(){
		var carousel_auto = jQuery(this).data('notauto')?false:true;
		var carousel_auto_timeout = jQuery(this).data('auto_timeout')?jQuery(this).data('auto_timeout'):3000;
		var carousel_auto_duration = jQuery(this).data('auto_duration')?jQuery(this).data('auto_duration'):800;
		$amazingslider = jQuery(this).find('.inner-slides').carouFredSel({
			items               : {visible:1,width:1000},
			responsive  : true,
			direction           : "left",
			scroll : {
				items           : 1,
				easing          : "quadratic",
				duration        : 1000,
				pauseOnHover    : false,
				onBefore: function(data){
					jQuery(this).delay(500);

					elements = jQuery(data.items.old).find('.element');

					for(i = 0; i < elements.length; i++){
						element = elements[(data.scroll.direction == 'next') ? i : (elements.length - 1 - i)];
						jQuery(element).addClass('move-' + ((data.scroll.direction == 'next') ? 'left':'right') + ' move-delay-' + i);
					}

					if($bgslider){
						// get index of current item
						index = jQuery(this).triggerHandler("currentPosition");
						//alert(index);
						setTimeout(function(){$bgslider.trigger('slideTo',index)},200);

					}
				},
				onAfter: function(data){
					jQuery(data.items.old).find('.element').removeClass('move-left move-right move-delay-0 move-delay-1 move-delay-2');
					css_index = 1;
					$bgslider.trigger("configuration", ["items.height", (jQuery('.slide:nth-child('+css_index+')',this).outerHeight())]);
					jQuery('.amazing .carousel-button a').height(jQuery('.slide:nth-child('+css_index+')',this).outerHeight());
					jQuery('.amazing .carousel-button a').css('line-height',(jQuery('.slide:nth-child('+css_index+')',this).outerHeight())+'px');
				}
			},
			auto 	: {
				play	: carousel_auto,
				timeoutDuration : carousel_auto_timeout,
				duration        : carousel_auto_duration,
				pauseOnHover: "immediate-resume"
			},
			prev:{button:jQuery('.amazing .prev')},
			next:{button:jQuery('.amazing .next')},
			pagination:{container:'.carousel-pagination'}
		});

		$bgslider = jQuery(this).find('.bg-slides').carouFredSel({
			items               : {visible:1,height:500,width:1000},
			responsive  : true,
			direction           : "left",
			scroll : {
				items           : 1,
				easing          : "swing",
				duration        : 1500
			},
			align : 'left',
			width :'100%',
			auto : {
				play: false
			}
		});
	});

	jQuery('span#click-more').toggle(function(){
			  jQuery('#top-carousel').removeClass('more-hide');
			  jQuery('span#click-more i').removeClass('fa-angle-down');
			  jQuery('span#click-more i').addClass('fa-angle-up');
	},
	function(){
			  jQuery('#top-carousel').addClass('more-hide');
			  jQuery('span#click-more i').removeClass('fa-angle-up');
			  jQuery('span#click-more i').addClass('fa-angle-down');
	});
	jQuery('.action-like').click(function(){
			  jQuery(this).addClass('change-color');
			  jQuery('.action-unlike').removeClass('change-color');
	});
	jQuery('#comment').on('focus',function(){

			jQuery('.cm-form-info').addClass('cm_show');
			jQuery('p.form-submit').addClass('form_heig');
	});
	jQuery('.comment-reply-link').click(function(){
		jQuery('.cm-form-info').addClass('cm_show');
		jQuery('.comment-author-field').removeClass('collapse');
		jQuery('p.form-submit').addClass('form_heig');
	});
	jQuery('#cancel-comment-reply-link').click(function(){
		jQuery('.comment-author-field').addClass('collapse');
		jQuery( ".not-valid" ).each(function( index ) {
		  jQuery(this).removeClass('not-valid');
		});
	});
	jQuery('.action-unlike').click(function(){
			  jQuery(this).addClass('change-color');
			  jQuery('.action-like').removeClass('change-color');
	});

	//toggle search box
	jQuery(document).mouseup(function (e){
		var container = jQuery(".headline-search");
		if (!container.is(e.target) // if the target of the click isn't the container...
			&& container.has(e.target).length === 0) // ... nor a descendant of the container
		{
			jQuery('.search-toggle').removeClass('toggled');
			jQuery('.headline-search').removeClass('toggled');

			jQuery('.searchtext .suggestion',container).hide();

			return true;
		}
		return true;
	});
	jQuery('.close-desktop-form').click(function(){
		//jQuery('.search-form').toggle('slide', {direction:'up'}, 1000);
		jQuery('.search-form').fadeOut(1000);
		return false;
	});
	jQuery('.search-toggle').click(function(){
		jQuery('.search-form').toggle('slide', {direction:'rigth'}, 1000);
			  return false;
	});
	jQuery(".is-carousel").each(function(){
		var carousel_id = jQuery(this).attr('id');
		var carousel_effect = jQuery(this).data('effect')?jQuery(this).data('effect'):'scroll';
		var carousel_auto = jQuery(this).data('notauto')?false:true;
		var carousel_auto_timeout = jQuery(this).data('auto_timeout')?jQuery(this).data('auto_timeout'):3000;
		var carousel_auto_duration = jQuery(this).data('auto_duration')?jQuery(this).data('auto_duration'):800;
		var carousel_pagi = jQuery(this).data('pagi')?jQuery(this).data('pagi'):false;

		slideherocarousel = jQuery(this).find(".slider-hero-content");
		if(slideherocarousel.length){
			if(jQuery(this).hasClass('smart-box-style-3-2')){
				smart_visible = {
					min         : 1,
					max         : 1
				}
				if(jQuery(window).width()<=768){
					smart_visible = 1;
				}
				smart_width  = 380;
				smart_onTouch = true;
			}else{
				smart_visible = 1;
				smart_width  = 350;
				smart_onTouch = true;
			}
			sldherocarousel = slideherocarousel.carouFredSel({
				responsive  : true,
				items       : {
					visible	: smart_visible,
					width       : smart_width,
					height      : "variable"
				},
				circular: true,
				infinite: true,
				width 	: "100%",
				height	: "35%",
				auto 	: false,
				align 	: "left",
				prev	: {
					button	: "#"+carousel_id+" .prev",
					//key		: "left"
				},
				next	: {
					button	: "#"+carousel_id+" .next",
					//key		: "right"
				},
				scroll : {
					items : 1,
					fx : carousel_effect
				},
				swipe       : {
					onTouch : smart_onTouch,
					onMouse : false,
					items	: 1
				},
				pagination 	: {
						container: '#'+carousel_pagi,
						anchorBuilder : function (nr){
							 return '<div class="tp-bullet" ></div>';
						}
				}

			}).imagesLoaded( function() {
				sldherocarousel.trigger("updateSizes");
			});
		}//if length




		slidernewscarousel = jQuery(this).find(".smart-box");

		if(slidernewscarousel.length){
			if(jQuery(this).hasClass('smart-box-style-3-2')){
				smart_visible = {
					min         : 1,
					max         : 1
				}
				if(jQuery(window).width()<=768){
					smart_visible = 1;
				}
				smart_width  = 380;
				smart_onTouch = true;
			}else{
				smart_visible = 1;
				smart_width  = 350;
				smart_onTouch = true;
			}
			sldnewscarousel = slidernewscarousel.carouFredSel({
				responsive  : true,
				items       : {
					visible	: smart_visible,
					width       : smart_width,
					height      : "variable"
				},
				circular: true,
				infinite: true,
				width 	: "100%",
				height	: "35%",
				auto 	: false,
				align 	: "left",
				prev	: {
					button	: "#"+carousel_id+" .prev",
					key		: "left"
				},
				next	: {
					button	: "#"+carousel_id+" .next",
					key		: "right"
				},
				scroll : {
					items : 1,
					fx : carousel_effect
				},
				swipe       : {
					onTouch : smart_onTouch,
					onMouse : false,
					items	: 1
				}

			}).imagesLoaded( function() {
				sldnewscarousel.trigger("updateSizes");
			});
		}//if length


		slidecarousel = jQuery(this).find(".slide-content");
		if(slidecarousel.length){
			if(jQuery(this).hasClass('smart-box-style-3-2')){
				smart_visible = {
					min         : 1,
					max         : 3
				};
				if(jQuery(window).width()<=768){
					smart_visible = 1;
				}
				smart_width  = 380;
				smart_onTouch = true;
			}else{
				smart_visible = 3;
				smart_width  = 350;
				smart_onTouch = false;
			}
			sldcarousel = slidecarousel.carouFredSel({
				responsive  : true,
				items       : {
					visible	: smart_visible,
					width       : smart_width,
					height      : "variable"
				},
				circular: true,
				infinite: true,
				width 	: "100%",
				height	: "variable",
				auto 	: false,
				align 	: "left",
				prev	: {
					button	: "#"+carousel_id+" .prev",
					key		: "left"
				},
				next	: {
					button	: "#"+carousel_id+" .next",
					key		: "right"
				},
				scroll : {
					items : 1,
					fx : carousel_effect
				},
				swipe       : {
					onTouch : smart_onTouch,
					onMouse : false,
					items	: 1
				},
				pagination 	: '#'+carousel_pagi
			}).imagesLoaded( function() {
				sldcarousel.trigger("updateSizes");
			});
		}//if length
		smartboxcarousel = jQuery(this).find(".smart-box-content");
		if(smartboxcarousel.length){
			if(jQuery(this).hasClass('smart-box-style-3-2')){
				smart_visible = {
					min         : 1,
					max         : 3
				};
				if(jQuery(window).width()<=768){
					smart_visible = 4;
				}
				smart_width  = 380;
				smart_onTouch = true;
			}else{

				smart_visible = 4;
				smart_width  = 750;
				smart_onTouch = true;
				if(jQuery(window).width()<=768){
					smart_visible = 4;
					smart_width = 300;
				}
				else if(jQuery(window).width()<=640){
					smart_visible = 1;
					smart_width = 300;
				}


			}

			smcarousel = smartboxcarousel.carouFredSel({
				responsive  : true,
				items       : {
					visible	: smart_visible,
					width       : smart_width,
					height      : "variable"
				},
				circular: true,
				infinite: true,
				width 	: "100%",
				height	: "variable",
				auto 	: false,
				align 	: "left",
				prev	: {
					button	: "#"+carousel_id+" .prev",
					key		: "left"
				},
				next	: {
					button	: "#"+carousel_id+" .next",
					key		: "right"
				},
				scroll : {
					items : 1,
					fx : carousel_effect
				},
				swipe       : {
					onTouch : smart_onTouch,
					onMouse : false,
					items	: 1
				},
				pagination 	: '#'+carousel_pagi
			}).imagesLoaded( function() {
				smcarousel.trigger("updateSizes");
			});
		}//if length

		smartboxcarousel = jQuery(this).find(".smart-box-content");
		if(smartboxcarousel.length){
			if(jQuery(this).hasClass('smart-box-style-3-2')){
				smart_visible = {
					min         : 1,
					max         : 3
				};
				if(jQuery(window).width()<=768){
					smart_visible = 4;
				}
				smart_width  = 380;
				smart_onTouch = true;
			}else{

				smart_visible = 4;
				smart_width  = 750;
				smart_onTouch = true;
				if(jQuery(window).width()>640 && jQuery(window).width()<=768){
					smart_visible = 4;
					smart_width = 300;
				}
				else if(jQuery(window).width()<=640){
					smart_visible = 1;
					smart_width = 300;
				}


			}

			smcarousel = smartboxcarousel.carouFredSel({
				responsive  : true,
				items       : {
					visible	: smart_visible,
					width       : smart_width,
					height      : "variable"
				},
				circular: true,
				infinite: true,
				width 	: "100%",
				height	: "variable",
				auto 	: false,
				align 	: "left",
				prev	: {
					button	: "#"+carousel_id+" .prev",
					//key		: "left"
				},
				next	: {
					button	: "#"+carousel_id+" .next",
					//key		: "right"
				},
				scroll : {
					items : 1,
					fx : carousel_effect
				},
				swipe       : {
					onTouch : smart_onTouch,
					onMouse : false,
					items	: 1
				},
				pagination 	: '#'+carousel_pagi
			}).imagesLoaded( function() {
				smcarousel.trigger("updateSizes");
			});
		}//if length

		genrescarousel = jQuery(this).find(".genres-content");

		if(genrescarousel.length){
			if(jQuery(this).hasClass('smart-box-style-3-2')){
				smart_visible = {
					min         : 8,
					max         : 8
				};
				if(jQuery(window).width()<=768){
					smart_visible = 1;
				}
				smart_width  = 380;
				smart_onTouch = true;
			}else{
				smart_visible =8;
				smart_width  = 750;
				smart_onTouch = true;
			}
			smcarousel = genrescarousel.carouFredSel({
				responsive  : true,
				items       : {
					visible	: smart_visible,
					width       : smart_width,
					height      : "variable"

				},
				circular: true,
				infinite: true,
				width 	: "100%",
				height	: "variable",
				auto 	: false,
				align 	: "left",
				prev	: {
					button	: "#"+carousel_id+" .prev",
					/*key		: "left"*/
				},
				next	: {
					button	: "#"+carousel_id+" .next",
					/*key		: "right"*/
				},
				scroll : {
					items : 1,
					fx : carousel_effect
				},
				swipe       : {
					onTouch : smart_onTouch,
					onMouse : false,
					items	: 1
				},
				pagination 	: '#'+carousel_pagi
			}).imagesLoaded( function() {
				smcarousel.trigger("updateSizes");
			});
		}//if length
		newscarousel = jQuery(this).find(".news-content");

		if(newscarousel.length){
			if(jQuery(this).hasClass('smart-box-style-3-2')){
				smart_visible = {
					min         : 1,
					max         : 3
				};
				if(jQuery(window).width()<=768){
					smart_visible = 4;
				}
				smart_width  = 380;
				smart_onTouch = true;
			}else{

				smart_visible = 4;
				smart_width  = 750;
				smart_onTouch = true;
				if(jQuery(window).width()<=768){
					smart_visible = 4;
					smart_width = 300;
				}
				else if(jQuery(window).width()<=640){
					smart_visible = 1;
					smart_width = 300;
				}else {
					smart_visible = 1;
					smart_width = 350;
				}


			}
			ncarousel = newscarousel.carouFredSel({
				responsive  : true,
				items       : {
					visible	: smart_visible,
					width       : smart_width,
					height      : "variable"
				},
				circular: true,
				infinite: true,
				width 	: "100%",
				height	: "variable",
				auto 	: false,
				align 	: "left",
				prev	: {
					button	: "#"+carousel_id+" .prev",
					//key		: "left"
				},
				next	: {
					button	: "#"+carousel_id+" .next",
					//key		: "right"
				},
				scroll : {
					items : 1,
					fx : carousel_effect
				},
				swipe       : {
					onTouch : smart_onTouch,
					onMouse : false,
					items	: 1
				},
			}).imagesLoaded( function() {
				ncarousel.trigger("updateSizes");
			});
		}//if length

		showscarousel = jQuery(this).find(".shows-content");

		if(showscarousel.length){
			if(jQuery(this).hasClass('smart-box-style-3-2')){
				smart_visible = {
					min         : 1,
					max         : 3
				};
				if(jQuery(window).width()<=768){
					smart_visible = 4;
				}
				smart_width  = 380;
				smart_onTouch = true;
			}else{

				smart_visible = 4;
				smart_width  = 750;
				smart_onTouch = true;
				if(jQuery(window).width()>640 && jQuery(window).width()<=768){
					smart_visible = 4;
					smart_width = 300;
				}
				else if(jQuery(window).width()<=640){
					smart_visible = 1;
					smart_width = 300;
				}else {
					smart_visible = 1;
					smart_width = 350;
				}


			}
			shcarousel = showscarousel.carouFredSel({
				responsive  : true,
				items       : {
					visible	: smart_visible,
					width       : smart_width,
					height      : "variable"
				},
				circular: true,
				infinite: true,
				width 	: "100%",
				height	: 270,
				auto 	: false,
				align 	: "left",
				prev	: {
					button	: "#"+carousel_id+" .prev",
					//key		: "left"
				},
				next	: {
					button	: "#"+carousel_id+" .next",
					//key		: "right"
				},
				scroll : {
					items : 1,
					fx : carousel_effect
				},
				swipe       : {
					onTouch : smart_onTouch,
					onMouse : false,
					items	: 1
				},

			}).imagesLoaded( function() {
				shcarousel.trigger("updateSizes");
			});
		}//if length


		/*relatedcarousel = jQuery(this).find(".related-videos-content");
		if(relatedcarousel.length){
			if(jQuery(this).hasClass('smart-box-style-3-2')){
				smart_visible = {
					min         : 3,
					max         : 3
				}
				if(jQuery(window).width()<=768){
					smart_visible = 1;
				}
				smart_width  = 380;
				smart_onTouch = true;
			}else{
				smart_visible =3;
				smart_width  = 750;
				smart_onTouch = true;
			}
			smcarousel = relatedcarousel.carouFredSel({
				responsive  : true,
				items       : {
					visible	: smart_visible,
					width       : smart_width,
					height      : "variable"
				},
				circular: true,
				infinite: true,
				width 	: "100%",
				height	: "variable",
				auto 	: false,
				align 	: "left",
				prev	: {
					button	: "#"+carousel_id+" .prev",
					key		: "left"
				},
				next	: {
					button	: "#"+carousel_id+" .next",
					key		: "right"
				},
				scroll : {
					items : 1,
					fx : carousel_effect
				},
				swipe       : {
					onTouch : smart_onTouch,
					onMouse : false,
					items	: 1
				},
				pagination 	: '#'+carousel_pagi
			}).imagesLoaded( function() {
				smcarousel.trigger("updateSizes");
			});
		}//if length
		*/
		featuredboxcarousel = jQuery(this).find(".featured-box-carousel-content");
		if(featuredboxcarousel.length){
			ftcarousel = featuredboxcarousel.carouFredSel({
				responsive  : true,
				items       : {
					width 	: 700,
					visible	: 1
				},
				circular: true,
				infinite: true,
				width 	: "100%",
				height	: "variable",
				auto 	: false,
				align 	: "center",
				scroll : {
					items : 1,
					fx : carousel_effect,
					onBefore: function() {
						var pos = jQuery(this).triggerHandler( 'currentPosition' );
						featured_ID = jQuery(this).data('featured-id');
						cat_ID = jQuery(this).data('id');
						jQuery('#featured-content-box-'+featured_ID+' .item-cat-'+cat_ID).removeClass( 'selected' );
						jQuery('#featured-content-box-'+featured_ID+' .item-cat-'+cat_ID+'-'+pos).addClass( 'selected' );
					}
				},
				swipe       : {
					onTouch : true,
					onMouse : false,
					items	: 1
				},
				pagination 	: '#'+carousel_pagi
			}).imagesLoaded( function() {
				ftcarousel.trigger("updateSizes");
			});
		}//if length

		//top carousel
		topcarousel = jQuery(this).find(".carousel-content");
		if(topcarousel.length){
			if(carousel_id=='big-carousel'){
				visible = 3;
				align = "center";
				start = -1;
			}else{
				visible = 0;
				align = false;
				start = 0;
			}
			tcarousel = topcarousel.carouFredSel({
				responsive  : false,
				items       : {
					visible	: function(visibleItems){
						if(visible>0){
							if(visibleItems>=3){
								return 5;
							}else{
								return 3;
							}
						}else{return visibleItems+1;}
					},
					minimum	: 1,
					start : start,
				},
				circular: true,
				infinite: true,
				width 	: "100%",
				auto 	: {
					play	: carousel_auto,
					timeoutDuration : carousel_auto_timeout,
					duration        : carousel_auto_duration,
					pauseOnHover: "immediate-resume"
				},
				align	: align,
				prev	: {
					button	: "#"+carousel_id+" .prev",
					key		: "left"
				},
				next	: {
					button	: "#"+carousel_id+" .next",
					key		: "right"
				},
				scroll : {
					items : 3,
					duration : carousel_auto_duration,
					fx : "scroll",
					easing : 'quadratic',
					onBefore : function( data ) {
						jQuery(".video-item").removeClass('current-carousel-item').removeClass('current-carousel-item2');
						var current_item_count=0;
						data.items.visible.each(function(){
							current_item_count++;
							if(current_item_count==2){jQuery(this).addClass( "current-carousel-item2" );}
							jQuery(this).addClass( "current-carousel-item" );
						});
					}
				},
				swipe       : {
					onTouch : false,
					onMouse : false,
				}
			}).imagesLoaded( function() {
				tcarousel.trigger("updateSizes");
				tcarousel.trigger("configuration", {
						items       : {
							visible	: function(visibleItems){
								if(visible>0){
									if(visibleItems>=3){
										return 5;
									}else{
										return 3;
									}
								}else{return visibleItems+1;}
							},
						},
					}
				);
			});
			topcarousel.swipe({
				allowPageScroll : 'vertical',
				excludedElements:"",
				tap:function(event, target) {
					if( event.button == 2 ) {
						return false;
					}
					tapto = jQuery(target);
					if(tapto.attr('href')){
						window.location = tapto.attr('href');
					}else if(tapto.parent().attr('href')){
						window.location = tapto.parent().attr('href');
					}
					return true;
				},
				swipeStatus:function(event, phase, direction, distance, duration, fingers)
				{
				  //phase : 'start', 'move', 'end', 'cancel'
				  //direction : 'left', 'right', 'up', 'down'
				  //distance : Distance finger is from initial touch point in px
				  //duration : Length of swipe in MS
				  //fingerCount : the number of fingers used
				  if(phase=='move'){
					  if(direction=='left'||direction=='right'){
						  jQuery(this).css('transform','translateX('+(direction=='left'?'-':'')+distance+'px)');
					  }
				  }
				  if(phase=='end'){
					  item_to_next = distance>520?2:1;
					  direction_to_next = direction=='left'?'next':'prev';
					  if(distance>20){
					  	jQuery(this).trigger(direction_to_next,item_to_next);
					  }
					  jQuery(this).css('transform','translateX(0px)');
				  }
				}
			});
			jQuery(".carousel-content").trigger("currentVisible", function( current_items ) {
				var current_item_count=0;
				current_items.each(function(){
					current_item_count++;
					if(current_item_count==2){jQuery(this).addClass( "current-carousel-item2" );}
					jQuery(this).addClass( "current-carousel-item" );
				});
			});
		}//if length
		//classy carousel
		classycarousel = jQuery(this).find(".classy-carousel-content");
		if(classycarousel.length){
			if(carousel_id=='stage-carousel'){
				cscarousel = classycarousel.carouFredSel({
					responsive  : true,
					items       : {
						visible	: 1,
						minimum	: 1,
						width   : 740,
						height  : "variable"
					},
					circular: true,
					infinite: true,
					width 	: "100%",
					auto 	: {
						play	: carousel_auto,
						timeoutDuration : carousel_auto_timeout,
						duration        : carousel_auto_duration,
						pauseOnHover: "immediate-resume"
					},
					align	: "center",
					scroll : {
						items : 1,
						duration : carousel_auto_duration,
						fx : "scroll",
						easing : 'quadratic',
						onBefore: function() {
							var pos = jQuery(this).triggerHandler( 'currentPosition' );
							jQuery('.classy-carousel-content .video-item').removeClass( 'selected' );
							jQuery('.classy-carousel-content .video-item.item'+pos).addClass( 'selected' );
							var page = Math.floor( pos / 1 );
							jQuery('#control-stage-carousel .classy-carousel-content').trigger( 'slideToPage', page );
						}
					},
					swipe       : {
						onTouch : true,
						onMouse : false,
						items	: 1
					}
				}).imagesLoaded( function() {
					cscarousel.trigger("updateSizes");
				});
			}else{
				if(carousel_id=='control-stage-carousel-horizon'){
					c_height = 116;
					c_direction = 'left';
					c_width = "100%";
				}else{
					if(jQuery(window).width()<768){
						c_height = 198;
					}else{
						c_height = 363;
					}
					c_direction = 'up';
					c_width = "variable";
				}
				ccarousel = classycarousel.carouFredSel({
					responsive  : false,
					items       : {
						visible	: function(visibleItems){
							return visibleItems+1;
						},
						minimum	: 1
					},
					direction: c_direction,
					circular: true,
					infinite: true,
					width 	: c_width,
					height: c_height,
					auto 	: false,
					prev	: {
						button	: "#"+carousel_id+" .control-up"
					},
					next	: {
						button	: "#"+carousel_id+" .control-down"
					},
					align	: false,
					scroll : {
						items : 1,
						fx : "scroll",
						duration : carousel_auto_duration,
						onBefore : function( data ) {
							jQuery(".video-item").removeClass('current-carousel-item').removeClass('current-carousel-item2');
							var current_item_count=0;
							data.items.visible.each(function(){
								current_item_count++;
								if(current_item_count==1){jQuery(this).addClass( "current-carousel-item2" );}
								jQuery(this).addClass( "current-carousel-item" );
							});
						}
					},
					swipe       : {
						onTouch : true,
						onMouse : false,
						items	: 1
					}
				}).imagesLoaded( function() {
					ccarousel.trigger("updateSizes");
				});
				jQuery(this).find(".classy-carousel-content").children().each(function(i) {
					jQuery(this).addClass( 'item'+i );
					//for iOS
					jQuery(this).on('touchend',function(){
						jQuery('#stage-carousel .classy-carousel-content').trigger( 'slideTo', [i, 0, true] );
						return false;
					});
					jQuery(this).click(function() {
						jQuery('#stage-carousel .classy-carousel-content').trigger( 'slideTo', [i, 0, true] );
						return false;
					});
				});
			}
			jQuery(".classy-carousel-content").trigger("currentVisible", function( current_items ) {
				var current_item_count=0;
				current_items.each(function(){
					current_item_count++;
					if(current_item_count==1){jQuery(this).addClass( "selected" );}
				});
			});
		}//if length

		simplecarousel = jQuery(this).find(".simple-carousel-content");
		if(simplecarousel.length){
			scarousel = simplecarousel.carouFredSel({
				responsive  : true,
				items       : {
					visible	: 1,
					width       : 365,
					height      : "variable"
				},
				circular: true,
				infinite: true,
				width 	: "100%",
				auto 	: {
					play	: carousel_auto,
					timeoutDuration : 2600,
					duration        : 600,
					pauseOnHover	: 'resume'
				},
				align	: 'center',
				pagination  : "#"+carousel_id+" .carousel-pagination",
				scroll : {
					items : 1,
					fx : "scroll",
				},
				swipe       : {
					onTouch : true,
					onMouse : false,
					items	: 1
				}
			}).imagesLoaded( function() {
				scarousel.trigger("updateSizes");
			});
		}//if length

	});//each

	//playlist
	jQuery('.playlist-header #control-stage-carousel .video-item').click(function(e) {
		jQuery('.playlist-header iframe').each(function(index, element) {
			jQuery(this).attr('src', jQuery(this).attr('src'));
		});
	});

	jQuery(document).on("click",".item-content-toggle i",function(e){
		jQuery(this).parent().parent().find('.item-content').toggleClass('toggled');
		jQuery(this).parent().find('.item-content-gradient').toggleClass('hidden');
		jQuery(this).toggleClass('fa-flip-vertical');
	});

	/*jQuery(document).on("click",".off-canvas-toggle",function(e){
        jQuery("#wrap").addClass('mnopen');
		jQuery("body").addClass('mnopen');
		if(jQuery("body").hasClass('old-android')){
			jQuery(window).scrollTop(0);
		}
    });*/
	jQuery(document).on("click",".wrap-overlay",function(e){
		jQuery("#wrap").removeClass('mnopen');
		jQuery("body").removeClass('mnopen');
	});
	jQuery(document).on("click",".close-mobile-menu",function(e){
		jQuery("#wrap").removeClass('mnopen');
		jQuery("body").removeClass('mnopen');
		jQuery('.off-menu  ul li:nth-child(2) a').removeClass('coming');//.html('SHOWS');
		return false;
	});

	/*featured content box*/
	jQuery(".featured-control a").each(function(i) {
		jQuery(this).click(function() {
			featured_ID = jQuery(this).closest('.featured-control').data('featured-id');
			featured_cat_ID = jQuery(this).closest('.featured-control').data('id');
			pos = jQuery(this).data('pos');
			jQuery('#'+featured_cat_ID+featured_ID+' .featured-box-carousel-content').trigger( 'slideTo', [pos, 0, true] );
			return false;
		});
	});

	//hammer
	/*
	var hammertime = jQuery("#wrap").hammer({
		dragup: false,
		dragdown: false,
		transform: false,
		rotate: false,
		pinch: false
	});
	hammertime.on("swiperight", function(ev) {
		jQuery("#wrap").addClass('mnopen');
		jQuery("body").addClass('mnopen');
	});
	hammertime.on("dragright", function(ev) {
		if(ev.gesture['deltaX']<=350&&ev.gesture['deltaX']>20){
			jQuery("#wrap").css('margin-left',ev.gesture['deltaX']+'px');
			jQuery("body").addClass('mnopen');
			jQuery("#wrap").addClass('dragging');
		}
	});
	hammertime.on("dragend", function(ev) {
		jQuery("#wrap").removeClass('dragging');
		if(ev.gesture['deltaX']>80){
			//jQuery("#wrap").animate({left: "400px",width:(jQuery(window).width())+'px',marginLeft:0}, 300);
			jQuery("#wrap").css('margin-left',0);
			jQuery("#wrap").addClass('mnopen');
		}else{
			//jQuery("#wrap").animate({left: "0",width: "100%",marginLeft:0}, 300);
			jQuery("#wrap").css('margin-left',0);
			jQuery("#wrap").removeClass('mnopen');
			jQuery("body").removeClass('mnopen');
		}
	});

	*/
	if(typeof(off_canvas_enable) != "undefined" && off_canvas_enable){
		var toggle = jQuery(".off-canvas-toggle").hammer({
			drag: false,
			transform: false,
			rotate: false,
			pinch: false
		});
		toggle.on("touch", function(ev) {
			if( jQuery(window).width()<760){
				jQuery("#off-canvas a").bind('click', false);
				jQuery("#wrap").toggleClass('mnopen');
				jQuery("body").toggleClass('mnopen');
				var scrollPosition = [
				  self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
				  self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
				];
				var html = jQuery('html'); // it would make more sense to apply this to body, but IE7 won't have that
				html.data('scroll-position', scrollPosition);
				html.data('previous-overflow', html.css('overflow'));
				html.css('overflow', 'hidden');
				window.scrollTo(scrollPosition[0], scrollPosition[1]);
				if(jQuery("body").hasClass('old-android')){
					jQuery(window).scrollTop(0);
				}
				setTimeout(function(){
					jQuery("#off-canvas a").unbind('click', false);
					jQuery(document).on("click",".close-mobile-menu",function(e){
					  jQuery("#wrap").removeClass('mnopen');
					  jQuery("body").removeClass('mnopen');
					  var html = jQuery('html');
						var scrollPosition = html.data('scroll-position');
						html.css('overflow', html.data('previous-overflow'));
						window.scrollTo(scrollPosition[0], scrollPosition[1]);
					  return false;
					});
				},1100);
			}
		});
		var wrap = jQuery("#wrap").hammer({
			transform: false,
			rotate: false,
			pinch: false,
			stop_browser_behavior: false
		});
		/*wrap.on("swiperight", function(ev) {
			if( jQuery(window).width()<760){
				jQuery("#wrap").addClass('mnopen');
				jQuery("body").addClass('mnopen');
				if(jQuery("body").hasClass('old-android')){
					jQuery(window).scrollTop(0);
				}
			}
		});
		wrap.on("dragright", function(ev) {
			if( jQuery(window).width()<760){
				if(ev.gesture['deltaX']>120){
					jQuery("#wrap").addClass('mnopen');
					jQuery("body").addClass('mnopen');
				}
			}
		});*/

		var wrap_overlay = jQuery(".mnopen .wrap-overlay").hammer({
			drag: false,
			transform: false,
			rotate: false,
			pinch: false
		});
		wrap_overlay.on("touch", function(ev) {
			jQuery("#wrap").removeClass('mnopen');
			jQuery("body").removeClass('mnopen');
		});
		wrap_overlay.on("swipeleft", function(ev) {
			jQuery("#wrap").removeClass('mnopen');
			jQuery("body").removeClass('mnopen');
		});
	}
	//top carousel swipe
	var top_carousel_hammer = jQuery('.is-carousel:not(#big-carousel):not(#metro-carousel):not(#control-stage-carousel):not(#control-stage-carousel-horizon) .carousel-content').hammer({
		transform: false,
		rotate: false,
		pinch: false
	});
	top_carousel_hammer.on("swiperight", function(ev) {
		jQuery('.is-carousel .carousel-content').trigger('prev',1);
	});
	top_carousel_hammer.on("swipeleft", function(ev) {
		jQuery('.is-carousel .carousel-content').trigger('next',1);
	});
	//list style change
	jQuery('.style-filter a').click(function(e) {
        var list_style = jQuery(this).data('style');
		/*if(list_style =='style-list-1'){
			jQuery('.qv_tooltip').tooltipster('disable');
		}else{
			jQuery('.qv_tooltip').tooltipster('enable');
		}*/
		jQuery('.style-filter a').removeClass('current');
		listing_div = jQuery(this).closest('.video-listing');
		jQuery(this).addClass('current');
		jQuery('.video-listing .video-listing-content').fadeOut("fast","swing",function(){
			jQuery(this).fadeIn('fast');
			listing_div.removeClass().addClass('video-listing '+list_style);
		});
    });

	// search textbox
	jQuery('#searchform input.ss').keyup(function(){
		parent = jQuery(this).parent().parent();

		if(jQuery('.select',parent).length > 0){
			var w = jQuery(".s-chosen-cat",parent).outerWidth();
			//alert(jQuery('#searchform .searchtext').outerWidth());

			jQuery('.searchtext .suggestion',parent).css({'width':(jQuery('.searchtext',parent).outerWidth() - w - 3) +'px'});
		}

		if(jQuery(this).val() !== ''){
			jQuery('#searchform .searchtext i').removeClass('hide');
		} else {
			jQuery('#searchform .searchtext i').addClass('hide');
		}
	});

	jQuery('#searchform .searchtext i').click(function(){
		jQuery('#searchform input.ss').val('');
		jQuery(this).addClass('hide');
	});
	jQuery('.search-mobile').click(function(e){
		e.preventDefault();
		jQuery('.search-mobile-form').show();
		jQuery('.social-links-mobile').hide();
	});
	jQuery('.close-mobile-form').click(function(e){
		e.preventDefault();
		jQuery('.search-mobile-form').hide();
		jQuery('.social-links-mobile').show();
	});
	//smooth scroll anchor
	jQuery('a[href*=#]:not([href=#])').click(function() {
		if(jQuery(this).hasClass('featured-tab') || jQuery(this).hasClass('ui-tabs-anchor') ||  jQuery(this).hasClass('vc-carousel-control') ||  jQuery(this).hasClass('comment-reply-link') ){

			return true;
		}else if(location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')	|| location.hostname == this.hostname) {
			var target = jQuery(this.hash);
			target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
			   if (target.length) {
				jQuery('html,body,#body-wrap').animate({
					 scrollTop: target.offset().top
				}, 660);
				return true;
			}
		}
	});

	jQuery('.nav-search-box').focusin(function(e) {
		jQuery(this).addClass('focus');
    });
	jQuery('.nav-search-box').focusout(function(e) {
		jQuery(this).removeClass('focus');
    });

	jQuery(document).on('click','#light_box',function(){
		var $url = jQuery(this).data('url');
		if($url){
			jQuery.get( jQuery(this).data('url'), function( data ) {
			});
		}
	});

});

jQuery(window).load(function(e) {
	jQuery("#pageloader").addClass('done');
	jQuery(".slider-hero-content").trigger("updateSizes");
	jQuery(".news-content").trigger("updateSizes");
	jQuery(".shows-content").trigger("updateSizes");
	jQuery(".carousel-content").trigger("updateSizes");
	jQuery(".smart-box-content").trigger("updateSizes");
	jQuery(".classy-carousel-content").trigger("updateSizes");
	jQuery(".simple-carousel-content").trigger("updateSizes");
	jQuery(".featured-box-carousel-content").trigger("updateSizes");

	//jQuery(".genres-content").trigger('slideTo', jQuery('.item-genres a.active'));
	console.log(jQuery('.genres-content').find('.item-genres a.active'));
	console.log(jQuery('.genres-content').triggerHandler("currentPosition"));
	if(jQuery('.item-genres').hasClass('active')) {
		jQuery(".genres-content").trigger('slideTo', [jQuery('.item-genres.active'), 0]);
		jQuery(".genres-content").trigger("currentVisible", function( item ) {


		});
	}
//	setTimeout(function(){	jQuery(".genres-content").trigger('slideTo', [jQuery('.item-genres a.active')], -4)},1500);
	jQuery("#big-carousel .carousel-content").trigger("configuration", {
			items       : {
				visible	: function(visibleItems){
					if(visibleItems>=3){
						return 5;
					}else{
						return 3;
					}
				},
			},
		}
	);

	if(( jQuery(window).width() > jQuery(window).height() ) && jQuery(window).width()<=1440){

		jQuery(".slider-hero-content").trigger("configuration", {
			height:"auto",
			items       : {
				height: "100%"
			}
		});
		jQuery(".news-content").trigger("configuration", {
				items       : {
					visible	: 4
				}
			}
		);
		jQuery(".news-content").trigger("updateSizes");

		jQuery(".shows-content").trigger("configuration", {
				items       : {
					visible	: 4,
					height : "variable"
				},
				height : 200
			}
		);
		jQuery(".shows-content").trigger("updateSizes");
	}
	if(( jQuery(window).width() > jQuery(window).height() ) && jQuery(window).width()<=768) {
		jQuery(".shows-content").trigger("configuration", {
				items       : {
					visible	: 1
				}
			}
		);
		jQuery(".shows-content").trigger("updateSizes");

	}
	if(( jQuery(window).width() > jQuery(window).height() ) && jQuery(window).width()<=768){
		jQuery(".news-content").trigger("configuration", {
				items       : {
					visible	: 2
				}
			}
		);
		jQuery(".news-content").trigger("updateSizes");
		jQuery(".shows-content").trigger("configuration", {
				items       : {
					visible	: 2
				}
			}
		);
		jQuery(".smart-box-content").trigger("configuration", {
				items       : {
					visible	: 2
				}
			}
		);

		jQuery("#metro-carousel .carousel-content").trigger("configuration", {
				align	: "left",
				items       : {
					visible	: 1
				},
			}
		);
		jQuery("#metro-carousel .item-head").css('max-width',jQuery(window).width()+'px');
		jQuery("#metro-carousel .carousel-content > .video-item > .qv_tooltip > .item-thumbnail img, #metro-carousel .carousel-content > .video-item > .item-thumbnail img").each(function(index, element) {
			if(jQuery(this).outerWidth() > jQuery(window).width()){
				var move = (jQuery(this).outerWidth() - jQuery(window).width())/2;
            	jQuery(this).attr("style","transform:translate3d(-"+move+"px,0,0); -webkit-transform:translate3d(-"+move+"px,0,0)");
			}
        });
	}else if(( jQuery(window).width() < jQuery(window).height() ) && jQuery(window).width()<=768) {
		jQuery(".smart-box-content").trigger("configuration", {
				items       : {
					visible	: 1
				}
			}
		);
		jQuery(".smart-box-content").trigger("updateSizes");
		jQuery(".news-content").trigger("configuration", {
				items       : {
					visible	: 1
				}
			}
		);

		jQuery(".news-content").trigger("updateSizes");

		jQuery(".shows-content").trigger("configuration", {
				items       : {
					visible	: 1
				}
			}
		);
		jQuery(".shows-content").trigger("updateSizes");

		if(jQuery(window).width() ==768){
			jQuery(".smart-box-content").trigger("configuration", {
					items       : {
						visible	: 2
					}
				}
			);
			jQuery(".smart-box-content").trigger("updateSizes");

			jQuery(".news-content").trigger("configuration", {
					items       : {
						visible	: 2
					}
				}
			);
			jQuery(".news-content").trigger("updateSizes");

			jQuery(".shows-content").trigger("configuration", {
					items       : {
						visible	: 2
					}
				}
			);
			jQuery(".shows-content").trigger("updateSizes");


		}else if(jQuery(window).width()<=640){
			jQuery(".smart-box-content").trigger("configuration", {
					items       : {
						visible	: 1
					}
				}
			);

		}

	} else if(jQuery(window).width()>768 && jQuery(window).width() <1024){

		jQuery(".news-content").trigger("configuration", {
				items       : {
					visible	: 2
				}
			}
		);

		jQuery(".shows-content").trigger("configuration", {
				items       : {
					visible	: 2
				}
			}
		);

		jQuery(".smart-box-content").trigger("configuration", {
				items       : {
					visible	:2
				}
			}
		);
	}  else if(jQuery(window).width()>1023 && jQuery(window).width() <1026){
		jQuery(".smart-box-content").trigger("configuration", {
				items       : {
					visible	:4
				}
			}
		);
		jQuery(".news-content").trigger("configuration", {
				items       : {
					visible	: 3
				}
			}
		);

		jQuery(".news-content").trigger("updateSizes");


		jQuery(".shows-content").trigger("configuration", {
				items       : {
					visible	: 4,
					height : "variable"
				},
				height : 170
			}
		);

		jQuery(".shows-content").trigger("updateSizes");



	}  else if(jQuery(window).width()>1026 && jQuery(window).width() <1290){
		jQuery(".smart-box-content").trigger("configuration", {
				items       : {
					visible	:4
				}
			}
		);
		jQuery(".news-content").trigger("configuration", {
				items       : {
					visible	: 3
				}
			}
		);

		jQuery(".news-content").trigger("updateSizes");

		jQuery(".shows-content").trigger("configuration", {
				items       : {
					visible	: 4,
					height : "variable"
				},
				height : 186
			}
		);

		jQuery(".shows-content").trigger("updateSizes");

	}else {

		jQuery(".news-content").trigger("configuration", {
				items       : {
					visible	: 4
				}
			}
		);
		jQuery(".news-content").trigger("updateSizes");

		jQuery(".shows-content").trigger("configuration", {
				items       : {
					visible	: 4
				}

			}
		);
		jQuery(".shows-content").trigger("updateSizes");


		jQuery(".smart-box-content").trigger("configuration", {
				items       : {
					visible	: 4
				}
			}
		);
		/*if(jQuery(window).width()<=768){
			jQuery(".smart-box-content").trigger("configuration", {
					items       : {
						visible	: 4
					}
				}
			);

		}
		else if(jQuery(window).width()<=640){
			jQuery(".smart-box-content").trigger("configuration", {
					items       : {
						visible	: 1
					}
				}
			);

		}*/
	}
	if ( typeof $amazingslider !== 'undefined' ) {
		css_index = $amazingslider.triggerHandler("currentPosition") + 1;
		$bgslider.trigger("configuration", ["items.height", (jQuery('.amazing .slide:nth-child('+css_index+')').outerHeight())]);
		jQuery('.amazing .carousel-button a').height(jQuery('.amazing .slide:nth-child('+css_index+')').outerHeight());
		jQuery('.amazing .carousel-button a').css('line-height',(jQuery('.amazing .slide:nth-child('+css_index+')').outerHeight())+'px');
	}
});
jQuery(window).resize(function(){

	jQuery("#slider .slider-hero-content").trigger('updateSizes');
	jQuery(".news-content").trigger("updateSizes");
	jQuery(".shows-content").trigger("updateSizes");
	jQuery(".smart-box-content").trigger("updateSizes");
	/*jQuery(".slider-hero-content").trigger("configuration", {
		height:"auto",
		items       : {
			height: "100%"
		}
	});*/

	if( ( jQuery(window).width() > jQuery(window).height() ) && jQuery(window).width()<=768){
		jQuery(".news-content").trigger("configuration", {
				items       : {
					visible	: 2
				}
			}
		);

		jQuery(".shows-content").trigger("configuration", {
				items       : {
					visible	: 1
				}
			}
		);

		jQuery(".slider-hero-content").trigger("configuration", {
			height:"auto",
			items       : {
				height: "100%"
			}
		});
		jQuery("#metro-carousel .carousel-content").trigger("configuration", {
				align	: "left",
				items       : {
					visible	: 1
				},
			}
		);

		jQuery(".smart-box-style-3-2 .smart-box-content").trigger("configuration", {
				items       : {
					visible	: 1
				}
			}
		);
		jQuery(".smart-box-content").trigger("configuration", {
				items       : {
					visible	: 2
				}
			}
		);
	} else if(( jQuery(window).width() < jQuery(window).height() ) && jQuery(window).width()<=768){
		jQuery(".news-content").trigger("configuration", {
				items       : {
					visible	: 1
				}
			}
		);

		jQuery(".shows-content").trigger("configuration", {
				items       : {
					visible	: 1
				}
			}
		);

		jQuery(".smart-box-content").trigger("configuration", {
				items       : {
					visible	: 1
				}
			}
		);
		if(jQuery(window).width()==768){
			jQuery(".smart-box-content").trigger("configuration", {
					items       : {
						visible	: 2
					}
				}
			);
			jQuery(".news-content").trigger("configuration", {
					items       : {
						visible	: 2
					}
				}
			);
			jQuery(".news-content").trigger("updateSizes");

			jQuery(".shows-content").trigger("configuration", {
					items       : {
						visible	: 2,
						height : "variable"
					},
					height : 248
				}
			);
			jQuery(".shows-content").trigger("updateSizes");



		}
		else if(jQuery(window).width()<=640){
			jQuery(".smart-box-content").trigger("configuration", {
					items       : {
						visible	: 1
					}
				}
			);

		}

	} else if(jQuery(window).width()>768 && jQuery(window).width() <1024){
		jQuery(".smart-box-content").trigger("configuration", {
				items       : {
					visible	: 2
				}
			}
		);
		jQuery(".news-content").trigger("configuration", {
				items       : {
					visible	: 2
				}
			}
		);
		jQuery(".news-content").trigger("updateSizes");

		jQuery(".shows-content").trigger("configuration", {
				items       : {
					visible	: 2
				}
			}
		);
		jQuery(".shows-content").trigger("updateSizes");

	}  else if(jQuery(window).width()>1023 && jQuery(window).width() <1026){
		jQuery(".smart-box-content").trigger("configuration", {
				items       : {
					visible	: 4
				}
			}
		);
		jQuery(".news-content").trigger("configuration", {
				items       : {
					visible	: 3
				}
			}
		);
		jQuery(".news-content").trigger("updateSizes");

		jQuery(".shows-content").trigger("configuration", {
				items       : {
					visible	: 4,
					height : "variable"
				},
				height : 170
			}
		);
		jQuery(".shows-content").trigger("updateSizes");



	} else if(jQuery(window).width()>1026 && jQuery(window).width() <1290){
		jQuery(".smart-box-content").trigger("configuration", {
				items       : {
					visible	:4
				}
			}
		);
		jQuery(".news-content").trigger("configuration", {
				items       : {
					visible	: 3
				}
			}
		);

		jQuery(".news-content").trigger("updateSizes");

		jQuery(".shows-content").trigger("configuration", {
				items       : {
					visible	: 4
				}
			}
		);

		jQuery(".shows-content").trigger("updateSizes");


	} else {
		jQuery(".news-content").trigger("configuration", {
				items       : {
					visible	: 4
				}
			}
		);

		jQuery(".shows-content").trigger("configuration", {
				items       : {
					visible	: 4
				}
			}
		);
		jQuery(".smart-box-style-3-2 .smart-box-content").trigger("configuration", {
				items       : {
					visible	: {min: 1,max: 3}
				}
			}
		);

		jQuery(".smart-box-content").trigger("configuration", {
				items       : {
					visible	: 4
				}
			}
		);
	}

	jQuery("#metro-carousel .item-head").css('max-width',jQuery(window).width()+'px');
	jQuery("#metro-carousel .carousel-content > .video-item > .qv_tooltip > .item-thumbnail img, #metro-carousel .carousel-content > .video-item > .item-thumbnail img").each(function(index, element) {
		if(jQuery(this).outerWidth() > jQuery(window).width()){
			var move = (jQuery(this).outerWidth() - jQuery(window).width())/2;
			jQuery(this).attr("style","transform:translate3d(-"+move+"px,0,0); -webkit-transform:translate3d(-"+move+"px,0,0)");
		}else{
			jQuery(this).attr("style","");
		}
	});

	if ( typeof $amazingslider !== 'undefined' ) {
		css_index = $amazingslider.triggerHandler("currentPosition") + 1;
		$bgslider.trigger("configuration", ["items.height", (jQuery('.amazing .slide:nth-child('+css_index+')').outerHeight())]);
		jQuery('.amazing .carousel-button a').height(jQuery('.amazing .slide:nth-child('+css_index+')').outerHeight());
		jQuery('.amazing .carousel-button a').css('line-height',(jQuery('.amazing .slide:nth-child('+css_index+')').outerHeight())+'px');
	}
});

//detect android
var ua = navigator.userAgent;
if( ua.indexOf("Android") >= 0 )
{
  var androidversion = parseFloat(ua.slice(ua.indexOf("Android")+8));
  if (androidversion < 3.0){
  	jQuery('body').addClass('old-android');
  }
}

/* Change selected text when users select category in Search Form */
function asf_on_change_cat(select_obj){
	jQuery(select_obj).prev().html(jQuery('option:selected',select_obj).text() + '<i class="fa fa-angle-down"></i>');
	// adjust padding-left of textbox
	var w = jQuery(select_obj).prev().outerWidth();
	var search_parent = jQuery(select_obj).parent().parent().parent();

	jQuery('.ss',search_parent).css({'padding-left': w + 10 + 'px'});
	jQuery('.searchtext .suggestion').css({'left':w+'px','width':(jQuery('.searchtext',search_parent).outerWidth() - w - 3) +'px'});
}

function asf_show_more_tags(obj){
	jQuery(obj).parent().toggleClass('max-height');
}

//side ads
if(typeof(enable_side_ads) != "undefined" && enable_side_ads){
	jQuery(window).load(function(e) {
		bar_height =  jQuery('#wpadminbar').height();
		header_height =  jQuery('header').height();
		fixed_height = jQuery('#top-nav.fixed-nav').height();
		final_top = bar_height + header_height + fixed_height;
		jQuery('.bg-ad').css('top', final_top-jQuery(window).scrollTop());
		jQuery(window).scrollStopped(function(e) {
			if(jQuery(window).scrollTop()<final_top){
				jQuery('.bg-ad').css('top', final_top-jQuery(window).scrollTop());
			}else{
				jQuery('.bg-ad').css('top', bar_height + fixed_height);
			}
		});
		jQuery('#body-wrap').scrollStopped(function(e) {
			if(jQuery('#body-wrap').scrollTop()<final_top){
				jQuery('.bg-ad').css('top', final_top-jQuery('#body-wrap').scrollTop());
			}else{
				jQuery('.bg-ad').css('top', bar_height + fixed_height);
			}
		});
	});

	//create event scroll stopped
	jQuery.fn.scrollStopped = function(callback) {
		jQuery(this).scroll(function(){
			var self = this, $this = jQuery(self);
			if ($this.data('scrollTimeout')) {
			  clearTimeout($this.data('scrollTimeout'));
			}
			$this.data('scrollTimeout', setTimeout(callback,100,self));
		});
	};
}

//buddypress fix
jQuery('div.activity').on( 'click', function(event) {
	var target = jQuery(event.target);
	if ( target.parent().hasClass('show-all') ) {
		target.parent().parent().children('li').removeClass('hidden');
		target.parent().addClass('loading');
		setTimeout( function() {
			target.parent().parent().children('li').fadeIn(200, function() {
				target.parent().remove();
			});
		}, 600 );
		return false;
	}
});

;(function($){
	$(document).ready(function() {
		var scrollBarIndex=[];
		$('.video-listing-content').each(function(index, element) {
			var $this=$(this);
			scrollBarIndex[index] = $this;
			//$.mCustomScrollbar.defaults.scrollButtons.enable=true;

			scrollBarIndex[index].mCustomScrollbar({
				theme:"light-2",
				onInit: function(){
				},
			});

			$('.control-up', $this.parents('.video-listing')).click(function(){
				scrollBarIndex[index].mCustomScrollbar('scrollTo','+=180');
			});

			$('.control-down', $this.parents('.video-listing')).click(function(){
				scrollBarIndex[index].mCustomScrollbar('scrollTo','-=180');
			});
			//scrollBarIndex[index].mCustomScrollbar("scrollTo", ($this.find('.cactus-widget-posts-item.active').offset().top - $this.find('.cactus-widget-posts').offset().top)+'px');
			for(var iz=0; iz<=$this.find('.cactus-widget-posts-item').length; iz++) {
				if($this.find('.cactus-widget-posts-item').eq(iz).hasClass('active')){
					if(iz > 0) {
						scrollBarIndex[index].mCustomScrollbar("scrollTo", ($this.find('.cactus-widget-posts-item').eq(iz).outerHeight(true)*(iz)-2)+'px');
					}
					$('.total-video span', $this.parents('.cactus-video-list-content')).text( (iz+1)+'/'+$this.find('.cactus-widget-posts-item').length );
				}
			}
			$this.parents('.cactus-video-list-content').find('.user-header').click(function(){
				if($this.parents('.cactus-video-list-content').find('.fix-open-responsive').hasClass('active')) {
					$this.parents('.cactus-video-list-content').find('.fix-open-responsive').removeClass('active');
					$(this).removeClass('active');
				}else{
					$this.parents('.cactus-video-list-content').find('.fix-open-responsive').addClass('active');
					$(this).addClass('active');
				}
			});
			//triggerPlayerHashtag($this, index);
		});
		/*Playlist scroll*/
		function fix_style4(){
			var $fixStyle4 = $('#top-nav.fixed-nav.layout-4');
			if($fixStyle4.length===0){return;}
			$('#headline').css({'margin-top':($fixStyle4.height())+'px'});
		}
		fix_style4();
		$(window)
		.resize(function(){
			fix_style4();
		})
		.load(function(){
			fix_style4();
		});

	});
}(jQuery));


/////////////////////////////////////////////////////////////////
/*!
 * imagesLoaded PACKAGED v3.0.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

(function(){"use strict";function e(){}function t(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1;}function n(e){return function(){return this[e].apply(this,arguments);};}var i=e.prototype;i.getListeners=function(e){var t,n,i=this._getEvents();if("object"==typeof e){t={};for(n in i)i.hasOwnProperty(n)&&e.test(n)&&(t[n]=i[n])}else t=i[e]||(i[e]=[]);return t},i.flattenListeners=function(e){var t,n=[];for(t=0;e.length>t;t+=1)n.push(e[t].listener);return n},i.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},i.addListener=function(e,n){var i,r=this.getListenersAsObject(e),o="object"==typeof n;for(i in r)r.hasOwnProperty(i)&&-1===t(r[i],n)&&r[i].push(o?n:{listener:n,once:!1});return this},i.on=n("addListener"),i.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},i.once=n("addOnceListener"),i.defineEvent=function(e){return this.getListeners(e),this},i.defineEvents=function(e){for(var t=0;e.length>t;t+=1)this.defineEvent(e[t]);return this},i.removeListener=function(e,n){var i,r,o=this.getListenersAsObject(e);for(r in o)o.hasOwnProperty(r)&&(i=t(o[r],n),-1!==i&&o[r].splice(i,1));return this},i.off=n("removeListener"),i.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},i.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},i.manipulateListeners=function(e,t,n){var i,r,o=e?this.removeListener:this.addListener,s=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(i=n.length;i--;)o.call(this,t,n[i]);else for(i in t)t.hasOwnProperty(i)&&(r=t[i])&&("function"==typeof r?o.call(this,i,r):s.call(this,i,r));return this},i.removeEvent=function(e){var t,n=typeof e,i=this._getEvents();if("string"===n)delete i[e];else if("object"===n)for(t in i)i.hasOwnProperty(t)&&e.test(t)&&delete i[t];else delete this._events;return this},i.removeAllListeners=n("removeEvent"),i.emitEvent=function(e,t){var n,i,r,o,s=this.getListenersAsObject(e);for(r in s)if(s.hasOwnProperty(r))for(i=s[r].length;i--;)n=s[r][i],n.once===!0&&this.removeListener(e,n.listener),o=n.listener.apply(this,t||[]),o===this._getOnceReturnValue()&&this.removeListener(e,n.listener);return this},i.trigger=n("emitEvent"),i.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},i.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},i._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},i._getEvents=function(){return this._events||(this._events={})},"function"==typeof define&&define.amd?define(function(){return e}):"object"==typeof module&&module.exports?module.exports=e:this.EventEmitter=e}).call(this),function(e){"use strict";var t=document.documentElement,n=function(){};t.addEventListener?n=function(e,t,n){e.addEventListener(t,n,!1)}:t.attachEvent&&(n=function(t,n,i){t[n+i]=i.handleEvent?function(){var t=e.event;t.target=t.target||t.srcElement,i.handleEvent.call(i,t)}:function(){var n=e.event;n.target=n.target||n.srcElement,i.call(t,n)},t.attachEvent("on"+n,t[n+i])});var i=function(){};t.removeEventListener?i=function(e,t,n){e.removeEventListener(t,n,!1)}:t.detachEvent&&(i=function(e,t,n){e.detachEvent("on"+t,e[t+n]);try{delete e[t+n]}catch(i){e[t+n]=void 0}});var r={bind:n,unbind:i};"function"==typeof define&&define.amd?define(r):e.eventie=r}(this),function(e){"use strict";function t(e,t){for(var n in t)e[n]=t[n];return e}function n(e){return"[object Array]"===c.call(e)}function i(e){var t=[];if(n(e))t=e;else if("number"==typeof e.length)for(var i=0,r=e.length;r>i;i++)t.push(e[i]);else t.push(e);return t}function r(e,n){function r(e,n,s){if(!(this instanceof r))return new r(e,n);"string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=i(e),this.options=t({},this.options),"function"==typeof n?s=n:t(this.options,n),s&&this.on("always",s),this.getImages(),o&&(this.jqDeferred=new o.Deferred);var a=this;setTimeout(function(){a.check()})}function c(e){this.img=e}r.prototype=new e,r.prototype.options={},r.prototype.getImages=function(){this.images=[];for(var e=0,t=this.elements.length;t>e;e++){var n=this.elements[e];"IMG"===n.nodeName&&this.addImage(n);for(var i=n.querySelectorAll("img"),r=0,o=i.length;o>r;r++){var s=i[r];this.addImage(s)}}},r.prototype.addImage=function(e){var t=new c(e);this.images.push(t)},r.prototype.check=function(){function e(e,r){return t.options.debug&&a&&s.log("confirm",e,r),t.progress(e),n++,n===i&&t.complete(),!0}var t=this,n=0,i=this.images.length;if(this.hasAnyBroken=!1,!i)return this.complete(),void 0;for(var r=0;i>r;r++){var o=this.images[r];o.on("confirm",e),o.check()}},r.prototype.progress=function(e){this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded;var t=this;setTimeout(function(){t.emit("progress",t,e),t.jqDeferred&&t.jqDeferred.notify(t,e)})},r.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";this.isComplete=!0;var t=this;setTimeout(function(){if(t.emit(e,t),t.emit("always",t),t.jqDeferred){var n=t.hasAnyBroken?"reject":"resolve";t.jqDeferred[n](t)}})},o&&(o.fn.imagesLoaded=function(e,t){var n=new r(this,e,t);return n.jqDeferred.promise(o(this))});var f={};return c.prototype=new e,c.prototype.check=function(){var e=f[this.img.src];if(e)return this.useCached(e),void 0;if(f[this.img.src]=this,this.img.complete&&void 0!==this.img.naturalWidth)return this.confirm(0!==this.img.naturalWidth,"naturalWidth"),void 0;var t=this.proxyImage=new Image;n.bind(t,"load",this),n.bind(t,"error",this),t.src=this.img.src},c.prototype.useCached=function(e){if(e.isConfirmed)this.confirm(e.isLoaded,"cached was confirmed");else{var t=this;e.on("confirm",function(e){return t.confirm(e.isLoaded,"cache emitted confirmed"),!0})}},c.prototype.confirm=function(e,t){this.isConfirmed=!0,this.isLoaded=e,this.emit("confirm",this,t)},c.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},c.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindProxyEvents()},c.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindProxyEvents()},c.prototype.unbindProxyEvents=function(){n.unbind(this.proxyImage,"load",this),n.unbind(this.proxyImage,"error",this)},r}var o=e.jQuery,s=e.console,a=s!==void 0,c=Object.prototype.toString;"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","eventie/eventie"],r):e.imagesLoaded=r(e.EventEmitter,e.eventie)}(window);
