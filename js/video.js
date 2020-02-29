var video;

function getVid(){
	video = document.querySelector("#myVideo"); 
}

function playVid() { 
	video.play();
	console.log("Play Video");
} 

function pauseVid() { 
	video.pause();
	console.log("Pause Video");
} 

function decreaseSpeed() { 
	video.playbackRate = video.playbackRate*0.8
  	console.log("Speed is " + video.playbackRate);
} 

function increaseSpeed() {
	video.playbackRate = video.playbackRate*1.25
	console.log("Speed is " + video.playbackRate);
} 

function skipAhead() {
	var vid
	vid = document.getElementById("myVideo");
	if (vid.currentTime <= vid.duration-60){
		vid.currentTime = vid.currentTime + 60;
	}else{
	 	vid.currentTime = 0;
	}
	console.log("Current location is " + vid.currentTime);
} 

function mute() { 
    if (video.muted){
    	video.muted = 0;
    	document.getElementById('mute').innerHTML="Mute";
    	console.log("Unmuted");
    }else{
    	video.muted = 1
    	document.getElementById('mute').innerHTML="Unmute";
    	console.log("Muted");
    }
}

function changeVolume() {
	var volume;
	volume = document.querySelector("#volumeSlider").value/100;
	video.volume = volume
	document.getElementById("volume").innerHTML = volume*100 + "%"
	console.log("Volume is " + volume);
}
       

function gray() { 
	document.getElementById("myVideo").style.filter = "grayscale(100%)";
	console.log("In grayscale")
}

function color() {
	document.getElementById("myVideo").style.filter = "grayscale(0%)";
	console.log("In color") 
}
