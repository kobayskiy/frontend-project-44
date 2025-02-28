import readlineSync from 'readline-sync';
import getRandomNum from '../src/func.js';
import askName from '../src/cli.js';

const progressionGame = (name) => {
  console.log('What number is missing in the progression?');
  let correctAnswersCount = 0;

  while (correctAnswersCount < 3) {
    const length = getRandomNum(5, 10);
    const startNum = getRandomNum(1, 20);
    const step = getRandomNum(1, 5);
    const progressionArr = [];

    for (let i = 0; i < length; i += 1) {
      progressionArr.push(startNum + step * i);
    }

    const hiddenIndex = getRandomNum(1, length - 1);
    const hiddenNum = progressionArr[hiddenIndex];
    progressionArr[hiddenIndex] = '..';

    console.log(`Question: ${progressionArr.join(' ')}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== hiddenNum.toString()) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${hiddenNum}.`);
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
  progressionGame(userName);
};
