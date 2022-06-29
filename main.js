const secretWords = ["sad","forget","find","programming","project","repeat","exercise","lesson","word","secret","you","car","hang man","window","black"];
let word = "";
let letters =[];
let result = "";
let numMistake = 0;

function chooseRandom (){
    word = secretWords[Math.round( Math.random()* secretWords.length-1)];
    document.querySelector(".alphabet").addEventListener("click" , buttonClick);
    window.addEventListener("keydown" , keyClick);
    console.log(word);
    return word;
}
function underScore(){
    let splitedWord = word.split("");
    let mappedWord = splitedWord.map(letter => (letters.indexOf(letter) >= 0 ? letter : "_"));
    result = mappedWord.join("");
    document.querySelector(".clue").querySelector("p") .innerHTML = `${result}`;
  
}
function ifWon () {
    if (result === word){
        document.querySelector(".game-over").style.display = "block";
        document.querySelector(".img").querySelector("img").src = "assets/winner.png"
    }
}
function ifLost(){
    if (numMistake ===6 ){
        document.querySelector(".game-over").style.display = "block";
        document.querySelector(".clue").querySelector("p") .innerHTML = `the word is : ${word}`;
        
    }
}
function ifMistake(){
    document.querySelector(".img").querySelector("img").src = `assets/hangman${numMistake}.png`;
}
function letterHandLer(letter){
    letter = letter.toLowerCase();
    letters.indexOf(letter)=== -1 ? letters.push(letter) : null;
    document.getElementById(letter.toUpperCase()).className = "used";

    if (word.indexOf(letter) >= 0) {
        underScore();
        ifWon();
    }
    else if(word.indexOf(letter) === -1){
        numMistake ++;
        ifLost();
        ifMistake();
    }
}
function buttonClick(event){
    letterHandLer(event.target.id);
}
function keyClick(event){
    letterHandLer(event.key);
}

chooseRandom();
underScore();

