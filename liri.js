require("dotenv").config();
var keys = require('./keys');
var Spotify = require('node-spotify-api');
var axios = require("axios");

var spotify = new Spotify(keys.spotify);

var command = process.argv[2];
var songName = process.argv[3];
var artist = process.argv[4];

// Spotify function
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

  if (command === value) {
    console.log(`venueName: ${venueName}`)
    console.log(`venueLocation: ${venueLocation}`)
    console.log(`dateEvent: ${dateEvent}`)

    var venueName = artist.venue.name;
    var venueLocation = artist.venue.location;
    var dateEvent = moment(date).format("MM/DD/YY");
  }
}

liri(command);



// Movie function
function movieThis() {
  var queryURL = "http://www.omdbapi.com/?i=tt3896198&apikey=ba373030";

  axios.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

    if (command === "") {
      var title = data.items[0];
      var year = data.items[0];
      var rating = data.items[0];
      var rottenTomatoes = data.items[0];
      var country = data.items[0];
      var language = data.items[0];
      var plot = data.items[0];
      var actors = data.items[0];
  
      console.log(`title: ${title}`)
      console.log(`year: ${year}`) 
      console.log(`rating: ${rating}`);
      console.log(`rottenTomatoes: ${rottenTomatoes}`)
      console.log(`country: ${country}`)
      console.log(`language: ${language}`)
      console.log(`plot: ${plot}`)
      console.log(`actors: ${actors}`)

    }
}
liri(command);
  



// Do Wwhat It Says function
