import { cons } from 'hexlet-pairs';
import playGame from '../component/brain_game';
import randomInt from '../component/prepare_data';

const task = 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => {
  let a = num1;
  let b = num2;
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  return a + b;
};
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
