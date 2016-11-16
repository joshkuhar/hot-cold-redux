var express = require('express');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

var app = express();
app.use(jsonParser);    

var guesses = [11, 9, 8];
function addGuess(guess) {
  var lowest = Math.min.apply(null, guesses);
  if (guess.number < lowest){
    guesses.push(guess.number)
    return {response: guess.number};
  }
  return {response: "Not the lowest"};
}

app.get('/', function(req, res) {
    res.json({guesses: guesses});
});

app.post('/', jsonParser, function(req, res) {
    res.json(addGuess(req.body));

});

app.listen(8080);
