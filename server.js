// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// Object to hold links.
const shortenedLinks = []

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// Handle post request.
app.post("/short/link", function(request, response) {
  
  var orig_url = request.query.url
  
  // Shorten new link.
  var new_short = "http://shortened" + (Math.floor((Math.random()) * 100000) + 1) + ".com";
  var new_url = {
   original_url: orig_url,
   shortened_url: new_short
  }
  
  // Push the new link data into the array of links.
  shortenedLinks.push(new_url)
  
  console.log(shortenedLinks);
  response.send(shortenedLinks)
  
})

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
