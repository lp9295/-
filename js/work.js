/*动态获取img的高度和宽度*/

$(document).ready(function(){
	
	$('.touming').height($('#img').height());
	$('.touming').width($('#img').width());
	var a = $('.touming').width();

	/*视口改变时候touming也在更新*/
	window.onresize = function() {
		$('.touming').height($('#img').height());
		$('.touming').width($('#img').width());
	}
})

