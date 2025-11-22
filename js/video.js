var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video=this.document.querySelector("#player1")
	video.autoplay=false;
	console.log("auto play is set to "+video.autoplay);
	video.loop=false;
	console.log("loop is set to "+video.loop);
});

document.getElementById("play").addEventListener("click", function(){
video.play()
document.getElementById("volume").textContent = Math.round(video.volume * 100) + "%";
});

document.getElementById("pause").addEventListener("click", function(){
video.pause()
});

document.getElementById("slower").addEventListener("click", function () {
    video.playbackRate *= 0.9;

    console.log("New playback speed:", video.playbackRate.toFixed(2));
	});

document.getElementById("faster").addEventListener("click", function () {
    video.playbackRate /= 0.9;
    console.log("New speed:", video.playbackRate.toFixed(5));
});

document.getElementById("skip").addEventListener("click", function () {
    video.currentTime += 10;
    if (video.currentTime > video.duration) {
        video.currentTime = 0;
    }
    console.log("Current time:", video.currentTime.toFixed(2));
});

function enableMute() {
  video.muted = true;
};

function disableMute() {
  video.muted = false;
};

document.getElementById("mute").addEventListener("click", function () {
    if (video.muted) {
        disableMute();
        mute.textContent = "Mute";
    } else {
        enableMute();
        mute.textContent = "Unmute";
    }

    console.log("Muted:", video.muted);
});

document.getElementById("slider").addEventListener("input", function () {
    video.volume = slider.value / 100;
   document.getElementById("volume").textContent = slider.value + "%";
});

vintage.addEventListener("click", function () {
    video.classList.add("oldSchool");
});

orig.addEventListener("click", function () {
    video.classList.remove("oldSchool");
});