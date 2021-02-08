# DnD-Music-Player
A discord bot made for playing music with smooth transitions during online DnD sessions

# Info
I don't have a server, so if you want to use this bot you need to host it yourself.
The bot currently isn't so developer friendly, however if there is a lot of request for it, I'll consider updating the bot.
This doens't mean it isn't user friendly, if you encouter any problems with using the bot, you can always report the problem and I will fix it.

The bot doesn't have a queue, this is by design. I wanted to be able to play 1 specific song and then continue with a playlist.

# Commands
These can all be viewed in discord with the command `help`

- Play: Play a song with a youtube-url
- Skip: Skips the current song
- Stop: Stop the music
- Autoplay: Starts autoplay if it is disabled

- Battle: Change the autoplay category to battle
- Travel: Change the autoplay category to travel
- Sad: Change the autoplay category to sad
- Tavern: Change the autoplay category to tavern
- Epic: Change the autoplay category to epic

# Configuration
Edit config.json:
- Fill in the prefix you want to use
- Fill in the bot token
- Fill in the main text channel id
- Fill in the main voice channel id
- Fill in the bot id

# Editing a playlist
*This isn't made userfriendly, you'll have to edit the files, there is no command*
You'll find the playlists in DnD-Music-Player > Playlists > DnD_PLAYLIST.json
You can add songs by adding `,"youtube-url"`

Example:
`{"songList":["url1","url2","url3"]}`

# Installation
1) Creating a bot
https://discordpy.readthedocs.io/en/latest/discord.html
2) Inviting your bot
https://discordpy.readthedocs.io/en/latest/discord.html#inviting-your-bot
3) Install node.js
https://nodejs.org/en/download/
4) Download the repository
5) Edit the config file

*Finding the ID's*

*Turn on developer mode
You'll find Developer Mode in User Settings > Appearance.
Then right-click on what you want the id from.
At last click on `copy id`*

6) Open the terminal inside the reposity folder and run the bot with `node main.js`
