/* Highlight search query by wrapping searched words in <mark> tag
 *
 * Search results are recognized by class "hentry". If not, we search for "#content .post"
 *
 */
function highlight_searchquery(term){
	$j = jQuery;
	$class_result = ".hentry";
	if($j($class_result).length == 0){
		$class_result = "#content .post";
	}
	
	$j($class_result).each(function(){
		var regex = new RegExp('(<[^>]*>)|('+ term.replace(/([-.*+?^${}()|[\]\/\\])/g,"\\$1") +')', true ? 'ig' : 'g');
		$j(this).html($j(this).html().replace(regex, function(a, b, c){
		  if (jQuery.support.opacity) {
			return (a.charAt(0) == '<') ? a : '<mark class="highlight">' + c + '</mark>';
		  } else {
			return (a.charAt(0) == '<') ? a : '<span class="highlight">' + c + '</span>';
		  }
		}));
	});	
}

function asf_dosearch(input){
	var val = input.val();
	if(val != ''){
		input.addClass("loading");
		suggestion = input.next("span");
		if(_jAjax != null){
			_jAjax.abort(); // abort any waiting ajax request
		}
		
		// get current selected categories & tags
		var cat = '';
		var tag = '';
		var form = jQuery(input).parent().parent().parent();
		
		cat = jQuery('#s-cat',form).val();
		
		if(jQuery('.filtered',form).length > 0){
			tag = jQuery('.filtered',form).attr('data-slug');
		}
		
		_jAjax = jQuery.post(
			asf.ajaxurl,
			{
				action : 'asf_suggestion',
				// other parameters can be added along with "action"
				s : val,
				cat: cat,
				tag: tag
			},
			function( response ) {
				if(jQuery('li',response).length > 0){
					suggestion.html(response).css({"display":"block"});
					input.removeClass("loading");
					
					// Handle hover event on suggestion list
					jQuery("li",suggestion).hover(function(){
						var active = jQuery(".active",jQuery(this).parent());
						active.removeClass("active");
						jQuery(this).addClass("active");
					});
				} else {
					suggestion.css({'display':'none'});
				}
			}
		);
	}
}

/* Params
 * @suggestion: The <span class="suggestion"> tag
 */
function asf_suggestion_movedown(suggestion){
	$j = jQuery;
	// go down
	// get current active item
	var active = $j("li.active",suggestion);
	if(active.length > 0){
		// get number of items are currently hidden
		var hidden = - suggestion.children("ul").css("marginTop").replace("px","") / _liHeight;
		// get total number of items
		var total = $j("li",suggestion).length;
		var index = active.index();
		if(index < total - 1){
			active.removeClass("active");
			active.next().addClass("active");
			if(index == (hidden + _visibleItems - 1)){
				// move the list (minus) up
				suggestion.children("ul").css("marginTop", - (hidden + 1) * _liHeight);
			}
		}
	} else {
		$j("li:eq(0)",suggestion).addClass("active");
	}
}

/* Params
 * @suggestion: The <span class="suggestion"> tag
 */
function asf_suggestion_moveup(suggestion){
	$j = jQuery;
	// go up
	// get current active item
	var active = $j("li.active",suggestion);
	if(active.length > 0){					
		// get number of items are currently hidden
		var hidden = - suggestion.children("ul").css("marginTop").replace("px","") / _liHeight;
		// get total number of items
		var total = $j("li",suggestion).length;
		var index = active.index();
		if(index > 0){
			active.removeClass("active");
			active.prev().addClass("active");
			if(index == hidden){
				// move the list (minus) down
				suggestion.children("ul").css("marginTop", - (hidden - 1) * _liHeight);
			}
		}
	}
}

/* Params
 * @obj: <a> item
 */
function suggestion_onItemClick(obj){
	var txt = jQuery(obj).html();
	var r = /<[\/](\w+)[^>]*>/gi;
	txt = txt.replace(r,"");// remove any tag
	jQuery(obj).parent().parent().parent().prev().val(txt);
	jQuery(obj).parent().parent().parent().parent().parent().parent().submit();
}

var _jAjax = null;
var _liHeight = 29;
var _visibleItems = 5; // number of visible items
jQuery(document).ready(function($){
	if($("form .suggestion").length > 0){
		$(".ss").each(function(){
			suggestion = $(this).parent().children(".suggestion");
			if(suggestion.length > 0){
				// get max height of suggestion viewport
				suggestion.css("maxHeight",_visibleItems * _liHeight);
				suggestion.bind('mousewheel', function(e, delta, deltaX, deltaY) {
					if(suggestion.is(":visible")){
						if(deltaY == 1){
							// move up
							asf_suggestion_moveup(suggestion);
						} else {
							// move down
							asf_suggestion_movedown(suggestion);
						}
						
						// stop bubbling event
						e = e || window.event;
						  if (e.preventDefault)
							e.preventDefault();
						  e.returnValue = false;
					}
				});
			}
		});
		
		// Handle key press on search textbox
		$(".ss").keypress(function(evt){
			if(evt.which != 0){
				asf_dosearch($(this));
			}
		}).keyup(function(evt){
			if(evt.keyCode == 8 || evt.keyCode == 46){
				asf_dosearch($(this));
			}
		}).focus(function(){
			suggestion = $(this).parent().children(".suggestion");
			if(suggestion === 'undefined' || !suggestion.is(":visible")){
				asf_dosearch($(this));
			}
		}).focusout(function(){
			var that = this;
			setTimeout(function(){
				$(that).next("span").hide();
			},100);
		});
		
		// Handle Arrow key on suggestion list
		$(".ss").keydown(function(evt){
			suggestion = $(this).parent().children(".suggestion");
			if(suggestion !== 'undefined' && suggestion.is(":visible")){
				if(evt.keyCode == 38){
					asf_suggestion_moveup(suggestion);
				} else if(evt.keyCode == 40){
					asf_suggestion_movedown(suggestion);
				}
			}
		});
	}
});