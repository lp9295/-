
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

    
    $('#slider1 img').hover(function() {

    	$(this).addClass('hl');
    	$(this).removeClass('hl2');

    },function() {
    	$(this).removeClass('hl');
    	$(this).addClass('hl2');
    });

    $('#slider2 img').hover(function() {

    	$(this).addClass('hl');
    	$(this).removeClass('hl2');

    },function() {
    	$(this).removeClass('hl');
    	$(this).addClass('hl2');
    });


	
}); 