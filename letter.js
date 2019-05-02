function Letter (letter){
  this.letter = letter
  this.guessed = false; //boolean value

  this.correctGuess = function(){
    if (this.guessed) {
      return this.letter;
    } else {
      return "_" ;
    }
  }

  this.characterArgs = function(userGuess){
    if (this.letter === userGuess){
      this.guessed = true;
  }
}

module.exports = Letter;
