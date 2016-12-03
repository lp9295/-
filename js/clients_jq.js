$(document).ready(function(){

	$('.touming').height($('#img').height());
	$('.touming').width($('#img').width());

	/*视口改变时候touming也在更新*/
	window.onresize = function() {
		$('.touming').height($('#img').height());
		$('.touming').width($('#img').width());
	};

	 /*Jquery时间动画效果*/
	$('#btn').click(function(event) {

		var a = 50 + '%';

		var b = 120 + '%';

		if(!$('#div-nav').is(":animated")){
			$('#div-nav').stop();
			$('#div-nav').animate({left:a}, 100);
			
			if(!$('#div-nav').is(":animated") && $('#div-nav').animate({left:a}, 1000)){
				$('#div-nav').animate({left:b}, 100);
			}
			else{

				$('#div-nav').animate({left:a}, 50000);
			}
					
		 }
		 else if($('#div-nav').is(":animated")){
			
			$('#div-nav').animate({left:b}, 100);
			$('#div-nav').stop();
		 }		
   	});	
}); 