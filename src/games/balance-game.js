import game from '../component/brain_game';
import randomInt from '../component/prepare_data';

game.setTask('Balance the given number.');
game.questionRule = () => `${randomInt(100, 999)}`;
game.answerRule = (question) => {
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
  return balanceNumber();
};
game.setRounds(3);
export default () => {
  game.start();
};
