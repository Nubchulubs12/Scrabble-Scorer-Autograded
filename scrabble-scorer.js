// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) 
//that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = 0;

	for (let i = 0; i < word.length; i++) {

	for (const pointValue in oldPointStructure) {

		if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`;
		}
      //  parseInt(pointValue);
	}
   }
	return letterPoints;
}

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //
let word = "";
function initialPrompt() {
   console.log("Let's play some scrabble!\n");
   word = input.question("Enter a word to score: ");

   
};

let newPointStructure = {
"a": 1, "b": 3, "c": 3, "d": 2, "e": 1,
"f": 4, "g": 2, "h": 4, "i": 1, "j": 8,
"k": 5, "l": 1, "m": 3, "n": 1, "o": 1,
"p": 3, "q": 10, "r": 1, "s": 1, "t": 1,
"u": 1, "v": 4, "w": 4, "x": 8, "y": 4,
"z": 10
};


let simpleScorer = function(word) {
   word = word.toUpperCase();
   let points = 1;
   let wordPoints = 0;
   for (let i = 0; i < word.length; i++) {
      wordPoints += points;
      
   }
   return wordPoints;
};

let vowelBonusScorer = function(word) {
   word = word.toUpperCase();
   let vowel = 3;
let consonant = 1;
let wordPoints = 0;
for (let i  = 0; i  < word.length; i ++) {
   if ("aeiou".includes(word[i])) {
      wordPoints += vowel;
   } else {
      wordPoints += consonant;
   }
   
}
return wordPoints;
};

let scrabbleScorer = function(word) {
   let points = oldScrabbleScorer(word);
   return points;
};

const scoringAlgorithms = [
{"name": "Simple Scorer",
"description": "Each letter is worth 1 point.",
"scoreFunction": simpleScorer},

{"name": "Bonus Vowels",
"description": "Vowels are worth 3pts and consonants are 1pt.",
"scoreFunction": vowelBonusScorer},

{"name": "Scrabble",
"description": "The traditional scoring algorithm.",
"scoreFunction": scrabbleScorer}

];
function scorerPrompt() {
console.log("Which scoring algorithm would you like to chose?");
for (let i = 0; i < scoringAlgorithms.length; i++) {
   console.log(`${i} - ${scoringAlgorithms[i].name}: ${scoringAlgorithms[i].description}`);
}

let response = input.question("Enter 0, 1, or 2: ");

if (response >= 0 && response < scoringAlgorithms.length){
   console.log(`score for word ${word}: ${scoringAlgorithms[response].scoreFunction(word)}`);
} else {
   console.log("That isn't an available option.");
}
   return response;
}

function transform(oldPointStructure) {

   for( key in oldPointStructure){

}
return ;
};

function runProgram() {
   initialPrompt();
   scorerPrompt();
}






// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
