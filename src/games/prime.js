import mainLogic from '../index.js';
import getRandomNum from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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

const game = () => {
  const randomNum = getRandomNum(1, 100);
  const question = `${randomNum}`
  const correctAnswer = isPrime(randomNum);

  return [question, correctAnswer]
};

export default () => {
  mainLogic(description, game);
};
