function play(source) {
  var audio = document.body.appendChild(document.createElement('audio'));
  console.log(audio)
  audio.src = source;
  audio.play();
  audio.addEventListener("ended", function() {
    audio.remove()
  })
}

function stopAll() {
  let nowPlaying = document.getElementsByTagName('audio');
  for (let i = 0; i < nowPlaying.length;) {
    nowPlaying[i].pause();
    nowPlaying[i].remove();
  }
}