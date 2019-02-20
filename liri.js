require("dotenv").config();

var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: 035f7727034c46e2b6f58305ddc88c2b,
  secret: b4396eb519534632b3d9ab97b8d27a69
});
 
spotify.search({ type: 'Until We Rich', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});