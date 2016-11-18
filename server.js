var express = require('express');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var path = require('path');
var app = express();
app.use(jsonParser);    
app.use(express.static(path.join(__dirname, './build')));

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });


var guesses = [11, 9, 8];
function addGuess(guess) {
  var lowest = Math.min.apply(null, guesses);
  if (guess < lowest){
    guesses.push(guess);
    return {reply: guess};
  } else if (guess >= lowest) {
  	return {reply: "Not the lowest"};
  }
}

app.get('/fewest-guesses', function(req, res) {
    res.json({guesses: guesses});
});
app.post('/fewest-guesses', function(req, res) {
	var guess = parseInt(req.body.guess, 10);
    res.json(addGuess(guess));
});
app.get("*", function(req, res) {
	console.log('test');	
	res.sendFile(path.join(__dirname, './build/index.html'));
});

app.listen(8080, function(){
	console.log("server listening on port 8080")
});
