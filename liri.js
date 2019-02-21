require("dotenv").config();
var keys = require('./keys');
var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);

var command = process.argv[2];
var songName = process.argv[3];

function spotifyThisSong() {
  spotify.search({ type: 'track', query: songName }, function (err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }

    var artist = data.tracks.items[0].artists[0].name;
    var albumName = data.tracks.items[0].album.name
    var previewUrl = data.tracks.items[0].preview_url;
    console.log(`artist: ${artist}`)
    console.log(`album name: ${albumName}`) 
    console.log(`preview url: ${previewUrl}`);
    console.log(`song name: ${songName}`)
  });
}




// // Spotify function
function liri(command, value) {
  if (command === "spotify-this-song") {
    spotifyThisSong()
  } else if (command == "movie-this") {
    movieThis()
  }

}

liri(command);