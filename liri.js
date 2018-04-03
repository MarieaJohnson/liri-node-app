require("dotenv").config();
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');

var keys = require("./keys");
console.log(process.argv);

// var spotify = new Spotify(keys.spotify);

var command = process.argv[2];
var userSearch = process.argv[3];
console.log(command);

if (command === "my-tweets") {
  var client = new Twitter(keys.twitter);
  var params = { screen_name: 'marieajohnson13' };
  client.get('statuses/user_timeline', params, function (error, tweets, response) {
    if (!error) {
      console.log("<-------------tweets------------>");
      for (let i = 0; i < tweets.length; i++) {
        const element = tweets[i];
        console.log(element.text);
      }
      console.log("<-------------tweets------------>");
    }
  });
} else if(command === "spotify-this-song"){
  var spotify = new Spotify(keys.spotify);
  console.log(userSearch);      
  spotify.search({type: 'track', query: userSearch}, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    console.log("<--------------song info --------------->");
    // console.log(data); 
    FIXME:
    console.log(data.tracks.items[4]);
    console.log(data.album.artists[4]);
    console.log(data.album.artists[2]);
    console.log(data.album.name);

    console.log("<--------------song info --------------->");    
  });
}
    
// http://www.omdbapi.com/?apikey=[yourkey]&
    

    // movie-this
    // do-what-it-says 
    
    TODO:;
// node liri.js movie-this "<movie name here>"
// node liri.js do-what-it-says

