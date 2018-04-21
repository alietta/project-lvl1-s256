import { cons } from 'hexlet-pairs';
import playGame from '../component/brain_game';
import randomInt from '../component/prepare_data';

const math = require('mathjs');

const task = 'Find the greatest common divisor of given numbers.';
const gameRule = () => {
  const question = `${randomInt(1, 100)} ${randomInt(1, 100)}`;
  const [a, b] = question.split(' ').map(q => parseInt(q, 10));
  const rightAnswer = `${math.gcd(a, b)}`;
  return cons(question, rightAnswer);
};
export default () => {
  playGame(task, gameRule);
};
