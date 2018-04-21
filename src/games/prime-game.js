import { cons } from 'hexlet-pairs';
import playGame from '../component/brain_game';
import randomInt from '../component/prepare_data';

const task = 'Is this number prime?';
const isPrime = (num) => {
  let div = 2;
  while (num % div !== 0) {
    div += 1;
  }
  return div === num;
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
