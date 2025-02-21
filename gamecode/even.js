import readlineSync from 'readline-sync';
import getRandomNum from '../src/func.js';
import askName from '../src/cli.js';

const isEven = (number) => number % 2 === 0;

export const evenGame = (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let correctAnswersCount = 0;
  while (correctAnswersCount < 3) {
    const randomNum = getRandomNum(1, 100);
    console.log(`Question: ${randomNum}`);
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();

    const correctAnswer = isEven(randomNum) ? 'yes' : 'no';

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

export const runEvenGame = () => {
  const userName = askName();
  evenGame(userName);
};
