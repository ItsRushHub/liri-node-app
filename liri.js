require("dotenv").config();
var keys = require('./keys');
var Spotify = require('node-spotify-api');
var axios = require("axios");

var spotify = new Spotify(keys.spotify);

var command = process.argv[2];
var songName = process.argv[3];
var artist = process.argv[4];

// // Spotify function
function spotifyThisSong() {
  spotify.search({ type: 'track', query: songName }, function (err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }

    var artist = data.tracks.items[0].artists[0].name;
    var albumName = data.tracks.items[0].album.name;
    var previewUrl = data.tracks.items[0].preview_url;

    console.log(`artist: ${artist}`)
    console.log(`album name: ${albumName}`) 
    console.log(`preview url: ${previewUrl}`);
    console.log(`song name: ${songName}`)
  });
}

function liri(command, value) {
  if (command === "spotify-this-song") {
    spotifyThisSong()
  } else if (command === "movie-this") {
    movieThis()
  } else if (command === "concert-this") {
    concertThis()
  } else if (command === "do-what-it-says") {
    doWhatItSays()
  }
}

liri(command);


// Bands In Town function
function concertThis() {
  var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

  if (concertThis === queryURL) {
    console.log(`venueName: ${venueName}`)
    console.log(`venueLocation: ${venueLocation}`)
    console.log(`dateEvent: ${dateEvent}`)

    var venueName = artist.venue.name;
    var venueLocation = artist.venue.location;
    var dateEvent = moment(date).format("MM/DD/YY");
  }
}
  
liri(command);

  



