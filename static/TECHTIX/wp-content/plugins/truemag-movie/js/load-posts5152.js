// The number of the next page to load (/page/x/).
var pageNum = parseInt(pbd_alp.startPage) + 1;

// The maximum number of pages the current query can return.
var max = parseInt(pbd_alp.maxPages);

// The link of the next page of posts.
var nextLink = pbd_alp.nextLink;
// Text 1.
var textLb1 = pbd_alp.textLb1;
// Text 2.
var textLb2 = pbd_alp.textLb2;
// check link.
var ot_permali = pbd_alp.ot_permali;
// Quick view.
var quick_view = pbd_alp.quick_view;
/**
 * Replace the traditional navigation with our own,
 * but only if there is at least one page of new posts to load.
 */
var idSub = '';
var addedId = false;
var pgurl = window.location.href.substr(window.location.href);

jQuery(document).ready(function($) {

	$(function() {

			console.log(pgurl);
			     $("#sidebar .widget ul li a").each(function(){
			          if($(this).attr("href") == pgurl || $(this).attr("href") == '' )
								$(this).parent().addClass("active");
								$(this).addClass("active");
			     })
			});
			if(tag == 'news') {
					$('.page-news').addClass('current-menu-item');
			}else {
					if(tag != ''){
						$('.page-browser').addClass('current-menu-item');
					}
			}
			if($('body').hasClass('date')) {
				$('.page-news').addClass('current-menu-item');
			}
					console.log(pageNum +'<='+ max);
	if(pageNum <= max) {
		// Insert the "More Posts" link.

		$('.tm_load_ajax')
			.append('<div class="ajax-load-post pbd-alp-placeholder-'+ pageNum +'"></div>')
			.append('<p id="pbd-alp-load-posts"><a href="#" class="light-button btn btn-default btn-lg btn-block">'+ textLb1 +'...</a></p>');

		// Remove the traditional navigation.
		$('.navigation').remove();
	}
	/**
	*  Load Post from news filter
	**/
	$('.filter').click(function() {

			$('.tm_load_ajax').find('.ajax-load-post').each(function() {
					$(this).remove();
			});
		pageNum = 1;//parseInt(pbd_alp.startPage);

	  if(!$(this)[0].checked) {
			$(this).next().find('.checkstatus').html('OFF');
			if(idSub === '' && tag != 'news') {
		 		idSub = '&subcat=' + $(this).attr('data-cat');
			}
			else if(idSub === '' && tag == 'news') {

					idSub = '?subcat=' + $(this).attr('data-cat');
			}
			else if(idSub === '&subcat='){
				idSub = '';
			}
			else {

			 if(tag == 'news') {
				 idSub = idSub.replace('?', '&');
			 }
				idSub = idSub +','+$(this).attr('data-cat');
			}
		}else {
			$(this).next().find('.checkstatus').html('ON');

			idSub = idSub.replace($(this).attr('data-cat'), '');

			if(idSub == '&subcat=' || idSub == '&subcat=,'){
				idSub = '';

			}


		}


			// Show that we're working.

			if(nextLink !== null && nextLink !== ''){
				if(ot_permali){

					nextLink = nextLink.replace(/\/page\/[0-9]?/, '/page/');
					nextLink = nextLink.replace(/\/page\/[0-9]?/, '/page/'+ pageNum);

				} else {

					nextLink = nextLink.replace(/paged\=[0-9]?/, 'paged=');
					nextLink = nextLink.replace(/paged\=[0-9]?/, 'paged='+ pageNum);

				}
				if(idSub != ''){
					filterLink = nextLink + idSub;
				}else {
					nextLink = nextLink.replace(/&subcat=[0-9]*/g, '');
					filterLink = nextLink;
				}
			}else {
				filterLink = pgurl + '/?s=&cat=86' + idSub;
			}
			$('.response').remove();
			//$('.response-loader').empty();
			//$('.response-loader').remove();
			$('.tm_load_ajax').append('<div class="response" style="display:none;" ></div>');
			$('.pbd-alp-load-posts').hide();


			nextLink = filterLink;
			$('.search-listing-content.news-listing.tm_load_ajax .post_ajax_tm').load(filterLink + ' .post_ajax_tm',
				function(response, status, xhr) {
					$('.response').html($(response).find('.response-loader'));
					$('.response').find("script[type='text/javascript']").each(function(){
				     eval($(this).text());
				  });

					nextLink = pbd_alp.nextLink;

					pageNum = parseInt(pbd_alp.startPage) + 1;;
					max = parseInt(pbd_alp.maxPages);

					// Update page number and nextLink.

					if(ot_permali){

						nextLink = nextLink.replace(/\/page\/[0-9]?/, '/page/');
						nextLink = nextLink.replace(/\/page\/[0-9]?/, '/page/'+ pageNum);

					} else {

						nextLink = nextLink.replace(/paged\=[0-9]?/, 'paged=');
						nextLink = nextLink.replace(/paged\=[0-9]?/, 'paged='+ pageNum);

					}


					// Add a new placeholder, for when user clicks again.
					if ( !$( ".pbd-alp-placeholder-"+ pageNum ).length ) {
					$('#pbd-alp-load-posts')
						.before('<div class="ajax-load-post pbd-alp-placeholder-'+ pageNum +'"></div>')
					}
					// Update the button message.*/
					console.log(pageNum +'<='+ max );
					if(pageNum <= max && nextLink !== '') {
						if(!$('.post_ajax_tm').is(':empty') ){
						//	$('.no-results').hide();
						//	$('#pbd-alp-load-posts').css('display','block');
							$('#pbd-alp-load-posts a').text( textLb1+'...').css('display','block');
						}else {
								$('.post_ajax_tm').append('<div class="no-results">No results found</div>');
								$('#pbd-alp-load-posts a').css('display','none');
						}
					} else {
						if($('.post_ajax_tm').is(':empty')){
							$('.post_ajax_tm').append('<div class="no-results">No results found</div>');
						}else {
						//	$('.no-results').hide();
						}
						$('#pbd-alp-load-posts a').css('display','none');
					}
			});



		});
	/**
	 * Load new posts when the link is clicked.
	 */
	$('#pbd-alp-load-posts a').click(function() {

		// Are there more posts to load?
		if(pageNum <= max) {

			// Show that we're working.
			$(this).text(textLb2+'...');

			//console.log(nextLink);
			if(idSub != '' && !addedId){
				//nextLink = nextLink + idSub;
				addedId = true;
			}
			$('.pbd-alp-placeholder-'+ pageNum).load(nextLink + ' .post_ajax_tm',
				function() {

					// Update page number and nextLink.

					if (history.pushState) {
						//history.pushState(null, "", nextLink);
					}
					pageNum++;
					if(ot_permali){

						nextLink = nextLink.replace(/\/page\/[0-9]?/, '/page/');
						nextLink = nextLink.replace(/\/page\/[0-9]?/, '/page/'+ pageNum);

					} else {

						nextLink = nextLink.replace(/paged\=[0-9]?/, 'paged=');
						nextLink = nextLink.replace(/paged\=[0-9]?/, 'paged='+ pageNum);

					}
					// Add a new placeholder, for when user clicks again.
					$('#pbd-alp-load-posts')
						.before('<div class="ajax-load-post pbd-alp-placeholder-'+ pageNum +'"></div>')

					// Update the button message.
					if(pageNum <= max) {
						$('#pbd-alp-load-posts a').text( textLb1+'...');
					} else {
						$('#pbd-alp-load-posts a').css('display','none');
					}
				}
			);
		} else {
			$('#pbd-alp-load-posts a').append('.');
		}
		$(document).ajaxSuccess(function(){
			//jQuery(".html5lightbox").html5lightbox();
			jQuery(".youtube").colorbox({iframe:true, innerWidth:480, innerHeight:320});
			jQuery(".vimeo").colorbox({iframe:true, innerWidth:500, innerHeight:409});
			// Tooltip only Text
			jQuery('.qv_tooltip').tooltipster({
						contentAsHTML: true,
						position: 'right',
						interactive: true,
						fixedWidth:250,
						//theme: 'tm-quickview'
			});
			jQuery(".is-carousel").each(function(){
				var carousel_id = jQuery(this).attr('id');
				var carousel_effect = jQuery(this).data('effect')?jQuery(this).data('effect'):'scroll';
				var carousel_auto = jQuery(this).data('notauto')?false:true;
				smartboxcarousel = jQuery(this).find(".smart-box-content");
				if(smartboxcarousel.length){
					smcarousel = smartboxcarousel.carouFredSel({
						responsive  : true,
						items       : {
							visible	: 1,
							width       : 750,
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
							onTouch : false,
							onMouse : false,
							items	: 1
						}
					}).imagesLoaded( function() {
						smcarousel.trigger("updateSizes");
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
							duration        : 600
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
//
		});
		return false;
	});
});
