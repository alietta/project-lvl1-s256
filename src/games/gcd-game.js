import { cons } from 'hexlet-pairs';
import playGame from '..';
import randomInt from '../helpers';

const task = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => b ? gcd(b, a % b) : a;
const gameRule = () => {
  const a = randomInt(1, 100);
  const b = randomInt(1, 100);
  const question = `${a} ${b}`;
  const rightAnswer = `${gcd(a, b)}`;
  return cons(question, rightAnswer);
};
export default () => {
  playGame(task, gameRule);
};
