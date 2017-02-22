$('#tbutton2').on('submit',function(event){
	event.preventDefault();
	console.log("form submitted!");
	create_post();
});

function create_post(){
	console.log("create post works so far.")
	console.log($('#post-text').val())

	$.ajax({
		url : "create_post",
		type : "POST",
		async : True,
		data : { butt : $('#tbutton2').val() },


		success : function(json) {
			$('#post-text').val('');
			$('#lemon').prepend("<li>"+json.text);
			console.log(json);
			console.log("success");
		};

		error : function(json) {
			$('#results').html("<div class='alert-box alert radius' data-alert")
		}
	})
};