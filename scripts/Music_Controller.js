main = require('../main');
autoPlay = require('./Auto_Play');
messages = require('./Messages');

const ytdl = require('ytdl-core');
const ytdl_info = require('ytdl-getinfo')
const fs = require('fs');

//----------------------------------------------------------------

module.exports = {
  execute: execute,
  play: play,
  fadeOut: fadeOut,
  fadeIn: fadeIn
}

var song;

function execute(_url) {
  ytdl_info.getInfo(_url).then(info => {
    song = {
    	"title": info.items[0].title,
      "url": _url,
      "img_url": info.items[0].thumbnail
    };

    	play(song);
  });
}

function play(song) {
	const dispatcher = main.connection_.playStream(ytdl(song.url))
		.on('end', () => {
      if (autoPlay.autoPlay == true) {
        autoPlay.randomSong();
      } else {
	      if (main.looping === true) {
		      execute(song.url);
		      return;
	      }
	      
    		main.isPlaying = false;
      }
		})

		.on('error', error => {
			console.error(error);
		});

    main.isPlaying = true;
    main.processing = false;

    console.log("Now Playing: " + song.title);
    messages.nowPlaying(song);
}

function fadeOut(fade_speed) {
  let volume = 1.00;
  let endFade = fade_speed/1000;
  let t = 1.000;

  var fade = setInterval(function () {
    t -= 0.001;
    volume = ((1/endFade)*t) + 1;
    main.connection_.dispatcher.setVolume(volume);

    if (main.connection_.dispatcher.volume <= 0) {
      clearInterval(fade);
      main.connection_.dispatcher.end();
    }
  }, 1);
}

function fadeIn(fade_speed) {
  let volume = 0.00;
  let endFade = fade_speed/1000;
  let t = 1.000;

  var fade = setInterval(function () {
    t -= 0.001;
    volume = ((1/-endFade)*t);
    main.connection_.dispatcher.setVolume(volume);

    if (main.connection_.dispatcher.volume >= 1) {
      clearInterval(fade);
    }
  }, 1);
}
