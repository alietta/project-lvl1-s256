import { cons } from 'hexlet-pairs';
import playGame from '..';
import randomInt from '../helpers';

const math = require('mathjs');

const task = 'What is the result of the expression?';
const gameRule = () => {
  const operations = ['+', '-', '*'];
  const index = randomInt(0, operations.length - 1);
  const question = `${randomInt(1, 10)} ${operations[index]} ${randomInt(1, 10)}`;
  const rightAnswer = `${math.eval(question)}`;
  return cons(question, rightAnswer);
};
export default () => {
  playGame(task, gameRule);
};
