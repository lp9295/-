
window.onload =function(){

		var speed = 10;//速度

		var slider = document.getElementById('slider-box');//容器
		var slider1 = document.getElementById('slider1');//正体
		var slider2 = document.getElementById('slider2');//副本
		var img = slider1.getElementsByTagName('img');

		// slider2.innerHTML = slider1.innerHTML; //拷贝内容到副本

		//利用div的水平滚动条进行运动，如果横向移动卷去的位置正好是一个正体的宽度，则滚动条复位到0
		function marquee() {
			if (slider1.offsetWidth - slider.scrollLeft <= 0) {
				slider.scrollLeft = 0;
			}
			else {
				slider.scrollLeft ++;
			}
		}

		//初始化定时器
		var timer = setInterval(marquee, speed);

		
		//鼠标移上停止
		slider.onmouseover = function() {
			window.clearInterval(timer);		
		}

		//鼠标离开继续
		slider.onmouseout = function() {
			timer = setInterval(marquee, speed);
		}

}
