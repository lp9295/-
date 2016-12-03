window.onload = function() {

	//模态层
	var modal = document.getElementById('modal');
	//内容区
	var container = document.getElementById('container');
	//关闭按钮
	var closeBtn = document.getElementById('closeBtn');
	//打开按钮
	var btn = document.getElementById('modal-btn');

	var audio = document.getElementById("audio");

	var vd = document.getElementById("vd");

	
	//打开模态层
	btn.onclick = function(){

		modal.style.display = 'block';
		//点击按钮，播放视频
		vd.play();
		// 点击按钮视频播放，音乐停止
	    $("#audio").addClass("play").removeClass("pause");
	    audio.pause();
	}
	//关闭模态层,按按钮
	closeBtn.onclick = function(){
		modal.style.display = 'none';
		//音乐重新播放
	    $("#audio").addClass("pause").removeClass("play");
	    //点击关闭按钮，暂停播放
	    vd.pause();
	    audio.play(); 
	    //开始播放背景音乐
	    if (vd.paused) {
			vd.play();
		} else {
			vd.pause();
		}

	}
	//关闭模态层按内容区
	modal.onclick = function() {
		if (vd.paused) {
			vd.play();
		} else {
			vd.pause();
		}	
		modal.style.display = 'none';
		audio.play();  
	}
	//阻止按内容区也关闭效果
	container.onclick = function(e) {
		if (vd.paused) {
			vd.play();
		} else {
			vd.pause();
		}	
		e = e ||window.event;
		e.stopPropagation?e.stopPropagation():e.cancelBubble=true;
	}
	//按键盘也关闭
	document.onkeydown = function(e) {
		if(e.keyCode == 27){			
			vd.pause();
			modal.style.display = 'none';
			audio.play();  
		}
		//按键盘控制视频快进
		else if(e.keyCode == 39){
			vd.currentTime += 3;
		}else if(e.keyCode == 37){
			vd.currentTime +=(-3);
		}
		//空格控制视频播放暂停
		else if(e.keyCode == 32){
			if (vd.paused) {
				vd.play();
			} else {
				vd.pause();
			}		
		}
	}
	

}