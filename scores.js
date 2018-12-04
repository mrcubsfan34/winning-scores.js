var scoreMike = (89, 123, 108) / 3;
var scoreJohn = (83, 134, 45) / 3;
var scoreMary = (123, 64, 110) / 3;
console.log(scoreMike, scoreJohn, scoreMary);

if(scoreJohn > scoreMary && scoreJohn > scoreMary) {
   console.log('John\'s team wins with ' + scoreJohn + ' points');
} else if (scoreMike > scoreMary && scoreMike > scoreMary) {
   console.log('Mike\'s team wins with ' + ' points');
} else if (scoreMary > scoreMike && scoreMary > scoreJohn) {
   console.log('Mary\'s team wins with ' + ' points');
} else {
  console.log('This is a draw!');
}

