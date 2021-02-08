mainFunctions = require('./Main_Functions');
musicController = require('./Music_Controller');

const fs = require('fs');

//----------------------------------------------------------------

var autoPlay = false;
var currPlayList = "travel";
var data = { songList: [] };

function randomSong() {
		//read
		if (currPlayList === "battle") {
			let rawdata = fs.readFileSync('/home/liam/Desktop/discord bot/DnD Music V2/Playlists/DnD_BATTLE.json');
			data = JSON.parse(rawdata);
		}
		else if (currPlayList === "travel") {
			let rawdata = fs.readFileSync('/home/liam/Desktop/discord bot/DnD Music V2/Playlists/DnD_TRAVEL.json');
			data = JSON.parse(rawdata);
		}
		else if (currPlayList === "tavern") {
			let rawdata = fs.readFileSync('/home/liam/Desktop/discord bot/DnD Music V2/Playlists/DnD_TAVERN.json');
			data = JSON.parse(rawdata);
		}
		else if (currPlayList === "sad") {
			let rawdata = fs.readFileSync('/home/liam/Desktop/discord bot/DnD Music V2/Playlists/DnD_SAD.json');
			data = JSON.parse(rawdata);
		}
		else if (currPlayList === "epic") {
			let rawdata = fs.readFileSync('/home/liam/Desktop/discord bot/DnD Music V2/Playlists/DnD_EPIC.json');
			data = JSON.parse(rawdata);
		}

		let song_amount = Object.keys(data.songList).length;
		let nr = mainFunctions.getRandomInt(1, song_amount);
		nr -= 1;

    musicController.execute(data.songList[nr]);
		autoPlay = true;
}

function changeCategory(cat) {
  if (main.processing === true) {
    mainFunctions.sendMsg("Busy processing","The bot is still processing previous command, please try again in a second");
    return;
  }

	currPlayList = cat;
	autoPlay = true;
	this.autoPlay = autoPlay;

	if (main.isPlaying === true) {
    main.processing = true
		musicController.fadeOut(5000);
	}

	else
		randomSong();

	mainFunctions.sendMsg("Changing category","Now changing the category to " + cat);
}

exports.autoPlay = autoPlay;

module.exports = {
  randomSong: randomSong,
	changeCategory: changeCategory
}
