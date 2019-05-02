var Letter = require("letter");

function Word(word){
  this.letterArray = word.split("");

  this.letterObjs = letterArray.map(function(ltr){
    return new Letter (ltr);
  })

  this.answer = function() {

   return this.letterObjs.map(function(ltrObj){
     return ltrObj.correctGuess();
    }).join("")
  }
  this.callGuess = function(userGuess){
    this.letterObjs.forEach(ltrObj => {
      ltrObj.characterArgs(userGuess);
    });
  }
}
