import game from '../component/brain_game';
import randomInt from '../component/prepare_data';

const math = require('mathjs');

game.setTask('What is the result of the expression?');
game.questionRule = () => {
  const operations = ['+', '-', '*'];
  const index = randomInt(0, operations.length - 1);
  return `${randomInt(1, 10)} ${operations[index]} ${randomInt(1, 10)}`;
};
game.answerRule = question => `${math.eval(question)}`;
game.setRounds(3);
export default () => {
  game.start();
};
