require("dotenv").config();
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var Omdb = require("movie-omdb");

var keys = require("./keys");
console.log(process.argv);

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
} else if (command === "spotify-this-song") {
  var spotify = new Spotify(keys.spotify);
  console.log(userSearch);
  spotify.search({ type: 'track', query: userSearch }, function (err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    console.log("<--------------song info --------------->");
    // console.log(data); 

    console.log(data.tracks.items[4]);
    console.log(data.album.artists[4]);
    console.log(data.album.artists[2]);
    console.log(data.album.name);

    console.log("<--------------song info --------------->");
  });
} else if (command === "movie-this") {
  var Omdb = new OMDB(keys.omdb);
  console.log(userSearch);
  omdb.search({ type: "t", year: "y", rating: "rating" }, function (err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    console.log("<--------------song info --------------->");

    request("http://www.omdbapi.com/?t=request&y=&plot=short&apikey=trilogy", function (error, response, body) {
      if (!error && response.statusCode === 200) {
        console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
      }
    })
  })
};