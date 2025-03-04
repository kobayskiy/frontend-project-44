import mainLogic from '../index.js';
import getRandomNum from '../utils.js';

const operators = ['+', '-', '*'];
const description = 'What is the result of the expression?';
const calc = (firstNum, secondNum, randomOperator) => {
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

const game = () => {
  const firstNum = getRandomNum(1, 100);
  const secondNum = getRandomNum(1, 100);
  const randomOperator = operators[getRandomNum(0, 2)];
  const question = `${firstNum} ${randomOperator} ${secondNum}`;
  const correctAnswer = `${calc(firstNum, secondNum, randomOperator)}`;
  return [question, correctAnswer];
};

export default () => {
  mainLogic(description, game);
};
