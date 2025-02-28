import readlineSync from 'readline-sync';
import getRandomNum from '../src/func.js';
import askName from '../src/cli.js';

const isPrime = (num) => {
  if (num === 1) {
    return 'no';
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const primeGame = (name) => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let correctAnswersCount = 0;

  while (correctAnswersCount < 3) {
    const randomNum = getRandomNum(1, 100);
    console.log(`Question: ${randomNum}`);
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
    const correctAnswer = isPrime(randomNum);

    if (userAnswer !== correctAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
      console.log(`Let's try again, ${name}`);
      return;
    }

    console.log('Correct!');
    correctAnswersCount += 1;
  }
  console.log(`Congratulations, ${name}!`);
};

export default () => {
  const userName = askName();
  primeGame(userName);
};
