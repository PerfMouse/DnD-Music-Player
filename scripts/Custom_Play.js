main = require('../main');
autoPlay = require('./Auto_Play');
musicController = require('./Music_Controller');
mainFunctions = require('./Main_Functions');

const ytdl_info = require('ytdl-getinfo')

//----------------------------------------------------------------

module.exports = {
  play: play
}

function play(url) {
  autoPlay.autoPlay = false;

  var title = "";
  ytdl_info.getInfo(url).then(info => {
    	title = info.items[0].title
  });

  if (title != null) {
    if (main.isPlaying === true) {
      main.processing = true;
      musicController.fadeOut(5000);

      setTimeout(function() {
        musicController.execute(url);
      }, 5010);
    } else {
      musicController.execute(url);
    }
  }
  else {
    mainFunctions.sendMsg("Invallid URL", "That is an invallid url, please try something else");
  }
}
