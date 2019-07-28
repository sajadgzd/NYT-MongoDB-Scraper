$(".view-btn").click(function() {
    $('html,body').animate({
        scrollTop: $("#view-articles").offset().top},
        'slow');
});

$(".comment-btn").click(function() {
	var idTag = ($(this).attr("dataId"))
	$("#comment-form").attr("action", "/add/comment/" + idTag)
	$("#comment-modals").modal("toggle")
	$(".viewMore").attr("dataId", idTag)
});

$(".submit-btn").click(function() {
	event.preventDefault()
});


$(".save-btn").click(function() {
	$.get("/save/:id", function(data) {
		if (data) {
			$("#saved-modals").modal("toggle")
		}	
	})
});


$("#saved-modals").click(function() {
	location.reload()
}); 


$(".viewMore").click(function() {
	$('#comment-modals').modal('hide')
	$("#view-comments-modals").modal("toggle")
    $.get("/comment/"+$(this).attr("dataId"), function(data) {
    	$("#comment-insert").empty()
    	console.log(data)
    	data.forEach(function(obj) {
    		$("#comment-insert").append(obj.author + " says " + '"' + obj.content + '"' + "<br>")
    		$("#comment-insert").append("On " + obj.createdOn)
    		$("#comment-insert").append("<a  href=/remove/comment/" + obj._id + " class='comment-rm-btn'><span class='glyphicon glyphicon-trash comment-remove' title='Remove Comment'></span></a>")
    		$("#comment-insert").append("<hr>")
    	})
    })
})










