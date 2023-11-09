    var mysong=document.getElementById("mysong");
    var icon=document.getElementById("icon");
        icon.onclick=function(){
           if(mysong.paused){
            mysong.play();
            icon.src="assest/image/pause.png";
           }else{
            mysong.pause();
            icon.src="assest/image/play.png";
           }
};