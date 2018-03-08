$(document).ready(function(){
	$('a[href*="#"]:not([href="#my-app"])').on("click",function(){
		$('li.nav-item a').each(function(index,value){
			if($('li.nav-item a').eq(index).hasClass('color'))
				$('li.nav-item a').eq(index).removeClass("color");
		});
		$(this).addClass("color");
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	 		var target = $(this.hash);
		 	target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		 	if (target.length) {
			 	$('html, body').animate({
			 		scrollTop: target.offset().top
			 	}, 1000);
			 	return false;
			}
		}
	});

	// $('a[href*="#"]:not([href="#my-app"])').on("click",function(){
	// 	e.preventDefault();
	// 	id = $(this).attr('href');
	// 	position = $(id).position().top;
	// 	$('html,body').animate({scrollTop: pos},500);
	// 	return false;
	// });
	
});