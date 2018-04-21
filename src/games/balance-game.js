import { cons } from 'hexlet-pairs';
import playGame from '../component/brain_game';
import randomInt from '../component/prepare_data';

const task = 'Balance the given number.';
const gameRule = () => {
  const question = `${randomInt(100, 999)}`;
  const nums = question.match(/\d/g).map(q => parseInt(q, 10)).sort();
  const balanceNumber = () => {
    const isBalance = nums.every((n, i, arr) => n === arr[0] || n === arr[0] + 1);
    if (isBalance) {
      return nums.join('');
    } else {
      nums[nums.length - 1] = nums[nums.length - 1] - 1;
      nums[0] += 1;
      nums.sort();
      return balanceNumber();
    }
  };
  const rightAnswer = balanceNumber();
  return cons(question, rightAnswer);
};
export default () => {
  playGame(task, gameRule);
};
