/*动态获取img的高度和宽度*/

$(document).ready(function(){
	
	$('.touming').height($('#img').height());

	/*视口改变时候touming也在更新*/
	window.onresize = function() {
		$('.touming').height($('#img').height());
	};


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


	
}); 
		
