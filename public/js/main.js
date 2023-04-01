// Get the video element
const video = document.querySelector('video');

// Get the video control buttons
const playBtn = document.querySelector('.btn_play');
const pauseBtn = document.querySelector('.btn_pause');
const muteBtn = document.querySelector('.btn_mute');
const unmuteBtn = document.querySelector('.btn_unmute');
const fullscreenBtn = document.querySelector('.btn_fullscreen');
const exitFullscreenBtn = document.querySelector('.btn_exitfs');
const captionBtn = document.querySelector('.btn_caption');

// Play button functionality
playBtn.addEventListener('click', () => {
  video.play();
  console.log('Video played');
});

// Pause button functionality
pauseBtn.addEventListener('click', () => {
  video.pause();
  console.log('Video paused');
});

// Mute button functionality
muteBtn.addEventListener('click', () => {
  video.muted = true;
  console.log('Video muted');
});

// Unmute button functionality
unmuteBtn.addEventListener('click', () => {
  video.muted = false;
  console.log('Video unmuted');
});

// Fullscreen button functionality
fullscreenBtn.addEventListener('click', () => {
  video.requestFullscreen();
  console.log('Entered fullscreen');
});

// Exit fullscreen button functionality
exitFullscreenBtn.addEventListener('click', () => {
  document.exitFullscreen();
  console.log('Exited fullscreen');
});

// Caption button functionality
let isCaptionOn = false;
captionBtn.addEventListener('click', () => {
  if (isCaptionOn) {
    video.textTracks[0].mode = 'hidden';
    isCaptionOn = false;
    console.log('Caption turned off');
  } else {
    video.textTracks[0].mode = 'showing';
    isCaptionOn = true;
    console.log('Caption turned on');
  }


});


