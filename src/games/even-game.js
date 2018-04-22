import { cons } from 'hexlet-pairs';
import playGame from '..';
import randomInt from '../helpers';

const task = 'Answer "yes" if number even otherwise answer "no".';
const gameRule = () => {
  const question = randomInt();
  const rightAnswer = question % 2 === 0 ? 'yes' : 'no';
  return cons(question, rightAnswer);
};

export default () => {
  playGame(task, gameRule);
};
