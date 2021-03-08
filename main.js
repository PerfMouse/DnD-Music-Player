const Discord = require('discord.js');
const config = require('./config.json');

//----------------------------------------------------------------

const client = new Discord.Client();
var connection_;
var textChannel = config.textChannel;
var botId = config.botId;

exports.textChannel = textChannel;

client.login(config.token);

client.once('ready', () => {
	console.log('Ready!');

	exports.client = client;

	mainFunctions = require('./scripts/Main_Functions');
	musicController = require('./scripts/Music_Controller');
	autoPlay = require('./scripts/Auto_Play');
	customPlay = require('./scripts/Custom_Play');
	commands = require('./scripts/Commands');

  setTimeout(function() {
		joinCall(config.voiceChannel);
  }, 3000);

  setTimeout(function() {

		autoPlay.autoPlay = true;
		autoPlay.randomSong();

		hasStarted = true;
  }, 6000);

  return;
});

client.once('reconnecting', () => {
	console.log('Reconnecting!');
});

client.once('disconnect', () => {
	console.log('Disconnect!');
});

//---------------------------------------------------------------

function joinCall(channel_) {
  channel = main.client.channels.get(channel_);

    if (!channel) return console.error("The channel does not exist!");

    channel.join().then(connection => {
        console.log("Successfully connected to the a voice channel");
		    console.log(" ");

				connection_ = connection;
                
                this.connection_ = connection_;
                exports.connection_ = this.connection_;
                
    }).catch(e => { console.error(e); });
}

//---------------------------------------------------------------

var isPlaying = false;
exports.isPlaying = isPlaying;

var processing = false;
exports.processing = processing;

var looping = false;
exports.looping = looping;

var hasStarted = false;

exports.connection_ = connection_;

//---------------------------------------------------------------
client.on('message', async message => {
	if (!message.content.startsWith(config.prefix) || message.author.bot) return;

	const args = message.content.slice(config.prefix.length).trim().split(' ');
	const command = args.shift().toLowerCase();

	if (hasStarted === false) {
		mainFunctions.sendMsg("Still starting","The bot hasn't started yet");
		return
	}

	switch (command) {
		case "battle":
			autoPlay.changeCategory("battle");
			break;
		case "travel":
			autoPlay.changeCategory("travel");
			break;
		case "tavern":
			autoPlay.changeCategory("tavern");
			break;
		case "sad":
			autoPlay.changeCategory("sad");
			break;
		case "epic":
			autoPlay.changeCategory("epic");
			break;

		case "play":
			commands.play(args);
			break;
		case "skip":
			commands.skip();
			break;

		case "stop":
			commands.stop();
			break;

		case "autoplay":
			commands.autoplay();
			break;

		case "help":
			messages.commands();
			break;
		case "commands":
			messages.commands();
			break;

		default:
			mainFunctions.sendMsg("Unkown command","There is no such command");
	}
});
