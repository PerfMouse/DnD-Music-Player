main = require('../main');
autoPlay = require('./Auto_Play');
musicController = require('./Music_Controller');

//----------------------------------------------------------------

module.exports = {
  nowPlaying: nowPlaying,
  commands: commands,
  stop: stop
}

var textChannel = main.textChannel;

function nowPlaying(song) {

  var songTitle;
  var songImg;

  if (song == null) {
    songTitle = "None";
    songImg = "";
  } else {
    songTitle = song.title;
    songImg = song.img_url;
  }

  const embed = {
    "title": "Now Playing:",
    "description": songTitle,
    "color": 5540607,
    "image": {
      "url": songImg
    }
  };

  main.client.channels.get(textChannel).send({ embed });
}

function commands() {
  const embed = {
    "description": "A list with all possible commands\nDon't use commands while the bot is processing one already!\nYou can use a command with ;<command>",
    "color": 5540607,
    "author": {
      "name": "Commands"
    },
    "fields": [
      {
        "name": "play",
        "value": "Play a song with a youtube-url"
      },
      {
        "name": "skip",
        "value": "Skips the current song"
      },
      {
        "name": "stop",
        "value": "Stop the music"
      },
      {
        "name": "autoplay",
        "value": "Starts autoplay if it is disabled"
      },
      {
        "name": "battle",
        "value": "Change the autoplay category to battle"
      },
      {
        "name": "travel",
        "value": "Change the autoplay category to travel"
      },
      {
        "name": "sad",
        "value": "Change the autoplay category to sad"
      },
      {
        "name": "tavern",
        "value": "Change the autoplay category to tavern"
      },
      {
        "name": "epic",
        "value": "Change the autoplay category to epic"
      }
    ]
  };

  main.client.channels.get(textChannel).send({ embed });
}

function stop() {
  const embed = {
    "description": "The bot has stopped playing music",
    "color": 5540607,
    "author": {
      "name": "Stopped the bot"
    }
  };

  main.client.channels.get(textChannel).send({ embed });
}
