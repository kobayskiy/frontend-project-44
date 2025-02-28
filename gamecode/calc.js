import readlineSync from 'readline-sync';
import getRandomNum from '../src/func.js';
import askName from '../src/cli.js';

const calcGame = (name) => {
  console.log('What is the result of the expression?');
  const operators = ['+', '-', '*'];

  let correctAnswersCount = 0;

  while (correctAnswersCount < 3) {
    const firstNum = getRandomNum(1, 100);
    const secondNum = getRandomNum(1, 100);
    const randomOperator = operators[getRandomNum(0, 2)];
    console.log(`Question: ${firstNum} ${randomOperator} ${secondNum}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const correctAnswer = () => {
      switch (randomOperator) {
        case '+':
          return `${firstNum + secondNum}`;
        case '-':
          return `${firstNum - secondNum}`;
        case '*':
          return `${firstNum * secondNum}`;
        default:
          return 'Unexpected operator';
      }
    };

    if (userAnswer !== correctAnswer()) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer()}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
    correctAnswersCount += 1;
  }
  console.log(`Congratulations, ${name}!`);
};

export default () => {
  const userName = askName();
  calcGame(userName);
};
