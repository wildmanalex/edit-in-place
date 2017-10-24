$(document).ready(function(){

	$('.name-input').hide();
	$('.about-input').hide();
// name code
	$('.name-placeholder').on('click', function(){
		$('.name-placeholder').hide();
		$('.name-input').show();
	});
	$('.name-input').on('blur', function(event){
		var userInput = $('.name-input').val()
		console.log(userInput);
		$('.name-placeholder').text(userInput);
		$('.name-input').hide();
		$('.name-placeholder').show();
	});
// about code
	$('.about-placeholder').on('click', function(){
		$('.about-placeholder').hide();
		$('.about-input').show();
	});
	$('.about-input').on('blur', function(event){
		var userInput = $('.about-input').val()
		console.log(userInput);
		$('.about-placeholder').text(userInput);
		$('.about-input').hide();
		$('.about-placeholder').show();
	});


});