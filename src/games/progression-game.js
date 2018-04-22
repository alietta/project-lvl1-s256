import { cons } from 'hexlet-pairs';
import { _ } from 'lodash';
import playGame from '..';
import randomInt from '../helpers';

const task = 'What number is missing in this progression?';
const progLen = 10;
const makeProgression = () => {
  const step = randomInt(1, 5);
  return _.range(progLen).map((elem, i) => elem + 1 + (step * i));
};
const gameRule = () => {
  const arr = makeProgression();
  const index = randomInt(0, progLen - 1);
  const rightAnswer = `${arr[index]}`;
  arr[index] = '..';
  const question = `${arr.join(' ')}`;
  return cons(question, rightAnswer);
};
export default () => {
  playGame(task, gameRule);
};
