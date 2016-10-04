window.addEventListener('DOMContentLoaded', function(){


var tile = document.querySelectorAll('li');

for (var i = 0; i<tile.length; i++) {
  tile[i].addEventListener("click", function() {
      this.textContent = this.id;
      var soundId = this.id + "_audio";
      var sound = document.getElementById(soundId);
      console.log(sound);
      console.log(soundId);
      sound.play();

    });
}
});
