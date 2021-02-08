main = require('../main');

//----------------------------------------------------------------

module.exports = {
  getRandomInt: getRandomInt,
  sendMsg: sendMsg,
  debug: debug
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max + 1 - min)) + min; //The maximum is inclusive and the minimum is inclusive
}

function sendMsg(title, text) {
  const embed = {
    "description": text,
    "color": 5614963,
    "author": {
      "name": title
    }
  };

  main.client.channels.get(main.textChannel).send({ embed });
}

function debug(text) {
  const embed = {
    "color": 16762928,
    "author": {
      "name": text
    }
  };

  main.client.channels.get(main.textChannel).send({ embed });
}
