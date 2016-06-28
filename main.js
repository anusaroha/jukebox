// promptAndPlay
//
// Prompts the user to enter a song.
// Plays the entered song.
// Repeats when the song is complete.
//
var promptAndPlay = function() {
  var songString = prompt("Welcome to JukeBox!\nEnter a song to play:");
  var song = parseSong(songString);
  playSong(song, 500, function(){
      $('#play').html('Play').attr('enable', 'true');
  });
};

$(document).ready(function() {

  $('#play').on('click', function (){

    $(this).html('Playing....').attr('disabled', 'true');
    promptAndPlay();


  });

})

//
//
// // Get things going.
// // promptAndPlay();
