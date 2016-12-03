$(document).ready(function(){
	$('.offices-yy').height($('#img').height());
	// $('.offices-yy').width($('#img').width());

	// /*视口改变时候touming也在更新*/
	window.onresize = function() {
		$('.offices-yy').height($('#img').height());
		// $('.offices-yy').width($('#img').width());
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

    /*jquery鼠标移上效果*/
    // $(".offices-img").hover(function() {  // 鼠标经过事件
    //     $(this).find("offices-yy").css('background','rgba(0,0,0,0)');  // 切换显示和隐藏
    // }, function() {
    //     $(this).find(".inner").toggle();  // 切换显示和隐藏
    // });

}); 
		

	
		
	
	

