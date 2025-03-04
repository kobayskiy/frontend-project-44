import getRandomNum from '../utils.js';
import mainLogic from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

const game = () => {
  const question = getRandomNum(1, 100);
  const correctAnswer = isEven(question);
  return [question, correctAnswer];
};

export default () => {
  mainLogic(description, game);
};
