jQuery(document).ready(function(e) {
	jQuery('.sub-menu-box.preview-mode').each(function(index, element) {
		var channel_content = '';
		var channel_count = 0;
        jQuery(this).find('.channel-content').each(function(index, element) {
			if(channel_count == 0){
				jQuery(this).addClass('active');
			}
            channel_content += jQuery(this)[0].outerHTML;
			jQuery(this).remove();
			channel_count++;
        });
		jQuery(this).append(channel_content);
    });
    jQuery('.sub-menu-box .channel-title').hover(
		function(){
			var target = "#" + jQuery(this).attr("data-target");
			jQuery(".channel-content").removeClass("active");
			jQuery(target).addClass("active");
		},
		function(){}
	)
});