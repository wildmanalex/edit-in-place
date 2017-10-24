$(document).ready(function(){


	// $('.about-input').on('click', function(){
	// 	$('.about-input').focus(function(){
	// 		$('.about-input').append('<input name="user-input"/>');
	// 		$('.about-text').remove();
	// 	})
	// });



	$('.about-text').click(function(){
		$('about-input').focus(function(){
			$('.about-input').append('<input name="user-input"/>');
			$('.about-text').remove();
		});
	});


	$('body').click(function(){
		$('about-input').blur(function(){
			alert('fdsfds');
		});
	});
	//next I need to detach the input element but keep text

	// $('.about-text').blur(function() {
	// 	alert('dddddd');
	// })




	// $('body').click(function(){
	// 	$('.about-input').blur();
		
	// })




	// $('.about-text').click(function(){
	// 	$('.about-input').append('<input name="user-input"/>');
	// 		$('.about-text').remove();
	// 		});
	// $('.about-input').click(function(){
	// 	$('.about-text').blur();
	// })
});