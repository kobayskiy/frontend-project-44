import readlineSync from 'readline-sync';
import getRandomNum from '../src/func.js';
import askName from '../src/cli.js';

const gcdGame = (name) => {
  console.log('Find the greatest common divisor of given numbers.');

  let correctAnswersCount = 0;
  while (correctAnswersCount < 3) {
    const firstNum = getRandomNum(1, 100);
    const secondNum = getRandomNum(1, 100);
    console.log(`Question: ${firstNum} ${secondNum}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const gcd = (a, b) => {
      if (b === 0) return a;
      return gcd(b, a % b);
    };
    const correctAnswer = gcd(firstNum, secondNum).toString();

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
  gcdGame(userName);
};
