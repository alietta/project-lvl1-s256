import game from '../component/brain_game';
import randomInt from '../component/prepare_data';

const math = require('mathjs');

game.setTask('Find the greatest common divisor of given numbers.');
game.questionRule = () => {
  const operations = [30, 15, 25, 16, 50, 40, 10, 2];
  const fisrtIndex = randomInt(0, operations.length - 1);
  const secondIndex = randomInt(0, operations.length - 1);
  return `${operations[fisrtIndex]} ${operations[secondIndex]}`;
};
game.answerRule = (question) => {
  const [a, b] = question.split(' ').map(q => parseInt(q, 10));
  return `${math.gcd(a, b)}`;
};
game.setRounds(3);
export default () => {
  game.start();
};
