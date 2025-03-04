import mainLogic from '../index.js';
import getRandomNum from '../utils.js';

const description = 'What number is missing in the progression?';

const game = () => {
  const length = getRandomNum(5, 10);
  const startNum = getRandomNum(1, 20);
  const step = getRandomNum(1, 5);
  const progressionArr = [];

  for (let i = 0; i < length; i += 1) {
    progressionArr.push(startNum + step * i);
  }

  const hiddenIndex = getRandomNum(1, length - 1);
  const correctAnswer = progressionArr[hiddenIndex];
  progressionArr[hiddenIndex] = '..';
  const question = `${progressionArr.join(' ')}`;

  return [question, correctAnswer]
};

export default () => {
  mainLogic(description, game);
};
