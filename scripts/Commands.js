mainFunctions = require('./Main_Functions');
musicController = require('./Music_Controller');
autoPlay = require('./Auto_Play');
customPlay = require('./Custom_Play');

//----------------------------------------------------------------

module.exports = {
  play: play,
  skip: skip,
  stop: stop,
  autoplay: autoplay,
  loop: loop
}

function play(args) {
  if (main.processing === true) {
    mainFunctions.sendMsg("Busy processing","The bot is still processing previous command, please try again in a second");
    return;
  }

  if (args.length > 0) {
    mainFunctions.sendMsg("Playing","Starting to play the song...");
    customPlay.play(args[0]);
  }
  else {
    mainFunctions.sendMsg("Invallid command","You need to type a url");
    return;
  }
}

function skip() {
  if (main.processing === true) {
    mainFunctions.sendMsg("Busy processing","The bot is still processing previous command, please try again in a second");
    return;
  }

  if (main.isPlaying === true) {
    main.processing = true;
    musicController.fadeOut(5000);

    mainFunctions.sendMsg("Skipping","Skipping current song...");

    setTimeout(function() {
        if (autoPlay.autoPlay === false)
          main.processing = false;
      }, 6000);
  }

  else {
    mainFunctions.sendMsg("Nothing to skip","There is currently nothing to skip");
    return;
  }
}

function stop() {
  if (main.processing === true) {
    mainFunctions.sendMsg("Busy processing","The bot is still processing previous command, please try again in a second");
    return;
  }

  if (main.isPlaying === false) {
    mainFunctions.sendMsg("Already stopped","The bot has already stopped playing music");
    return;
  }

  autoPlay.autoPlay = false;
  main.isPlaying = false;

  main.processing = true;
  musicController.fadeOut(5000);

  mainFunctions.sendMsg("Stopping","Stopping the bot...");

  setTimeout(function() {
      messages.stop();
      main.processing = false;
    }, 5010);
}

function autoplay() {
  if (main.processing === true) {
    mainFunctions.sendMsg("Busy processing","The bot is still processing previous command, please try again in a second");
    return;
  }

  if (autoPlay.autoPlay === true) {
    mainFunctions.sendMsg("Already autoplaying","Autoplay is already enabled!");
    return;
  }

  autoPlay.autoPlay = true;

  if (main.isPlaying === false)
    autoPlay.randomSong();

  mainFunctions.sendMsg("Autoplaying","Now autoplaying!");
}

function loop() {
   if (main.processing === true) {
    mainFunctions.sendMsg("Busy processing","The bot is still processing previous command, please try again in a second");
    return;
  }
  
  main.looping = true;
  mainFunctions.sendMsg("Looping","Now looping the current song!");
}
