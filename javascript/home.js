$(function(){
	$("main .principale textarea").click(function(event){
		event.stopPropagation() /***Eviter l'execution de l'evenement de parent***/
								/**Dans notre cas le champs "textarea" et fils de "body"**/
		//
		$(this).css({"height": "100px" , "width":"512px" , "background-image":"none"})
		$("main .principale .glyphicon").hide()
	})
	$("body").click(function(){
		$("main .principale textarea").css({"height": "32px" , "width":"512px" , "margin-left":"20px" , "border-radius":"20px" , "border":"solid 2px gray" , "paddign-left":"9px" , "padding-top":"6px" , "border-radius":"20px" , "border":"solid 2px gray" , "background":"transparent no-repeat scroll 482px 8px" , "background-image":"url(../img/import.png)"})
	})
});

$(function(){
	$("header .nav ul li img").click(function(){
		window.location = "index.html";
	})
});
