// https://stackoverflow.com/questions/19790506/multiple-audio-html-auto-stop-other-when-current-is-playing-with-javascript
document.addEventListener('play', function(e){
  // var audios = document.getElementsByTagName('audio');
  var media = document.querySelectorAll('audio,video')
  for(var i = 0, len = media.length; i < len;i++){
      if(media[i] != e.target){
        media[i].pause();
      }
  }
}, true);
