var Letter = require("letter");  //imports the other file letter.js

function Word(word){
  this.letterArray = word.split(""); //splits array into string

  this.letterObjs = letterArray.map(function(ltr){ //loops through the array using the map function! creates the objects for the word with NEW Letter syntax for each.
    return new Letter (ltr);
  });

  this.answer = function() { //stores return in this.answer joins the letter objects "c""a""t" for example and checks to see if it is the correct guess

   return this.letterObjs.map(function(ltrObj){
     return ltrObj.correctGuess();
    }).join("");
  }
  this.callGuess = function(userGuess){  //stores result in this.callGuess and converts from string to array
    this.letterObjs.forEach(ltrObj => {
      ltrObj.characterArgs(userGuess);
    });
  }
}

module.exports = Word; 
