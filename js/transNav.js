$(document).ready(function(){
	$(window).scroll(function(){
		let scroll = $(window).scrollTop();
		// DOM = document object model
		// BOM = Browser objcet model

		if (scroll > 50) {
			$('.navbar').css('background','#555');
			$('.navbar').css('transition', 'background 1s ease-in');
		}else{
			$('.navbar').css('background','transparent');
			$('.navbar a').css('transition', 'background 1s ease-in');
		}
	});
});