var audio = document.getElementById('audio');
var isPlaying = false;

// 이미지를 터치할 때 MP3 재생 또는 중단 및 회전 효과
function toggleAudio(audioFile, image) {
  // 소리가 재생 중이면 중단하고 이미지의 회전 애니메이션 클래스 제거
  if (isPlaying) {
    audio.pause();
    audio.currentTime = 0;
    image.classList.remove('rotate');
    isPlaying = false;
  } else {
    // 소리 재생 및 회전 애니메이션 적용
    audio.src = audioFile;
    audio.play();
    image.classList.add('rotate');
    isPlaying = true;
  }
}

// 소리 재생이 끝나면 이미지의 회전 애니메이션 클래스 제거
audio.addEventListener('ended', function() {
  document.querySelector('.rotate').classList.remove('rotate');
  isPlaying = false;
});