$(function(){
	$("header .facebook").click(function(){
		window.location = "https://www.facebook.com/SaifEddineJABALLI"
	})

    $("header .twitter").click(function(){
		window.location = "https://twitter.com/jaballi_saif_ed"
	})

	$("header .github").click(function(){
		window.location = "https://github.com/JabSaif"
	})
});

$(function(){
	$("button").click(function(){
		$("main #aside .aboutMe p").show("fast");
	})
});