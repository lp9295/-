
$(document).ready(function(){


	 /*Jquery时间动画效果*/
	$('#btn').click(function(event) {

		var a = 50 + '%';

		var b = 120 + '%';

		if(!$('#nav').is(":animated")){
			$('#nav').stop();
			$('#nav').animate({left:a}, 100);
			
			if(!$('#nav').is(":animated") && $('#nav').animate({left:a}, 1000)){
				$('#nav').animate({left:b}, 100);
			}
			else{

				$('#nav').animate({left:a}, 50000);
			}
					
		 }
		 else if($('#nav').is(":animated")){
			
			$('#nav').animate({left:b}, 100);
			$('#nav').stop();
		 }
	
    });
    $('#closeBtn').click(function(event) {
    	// $('#emb').stop();
    });
	
}); 
		