import { cons } from 'hexlet-pairs';
import playGame from '..';
import randomInt from '../helpers';

const task = 'Is this number prime?';
const isPrime = (num) => {
  let div = 2;
  while (num % div !== 0 && num > 1) {
    div += 1;
  }
  return div === num && num > 1;
};
const gameRule = () => {
  const num = randomInt(1, 100);
  const question = `${num}`;
  const rightAnswer = isPrime(num) ? 'yes' : 'no';
  return cons(question, rightAnswer);
};
export default () => {
  playGame(task, gameRule);
};
