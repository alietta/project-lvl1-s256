import game from '../component/brain_game';
import getRandomArr from '../component/prepare_data';

const arr = getRandomArr();
const quiz = arr.reduce((acc, a) => {
  acc.push({
    question: `${a}`,
    answer: a % 2 === 0 ? 'yes' : 'no',
  });
  return acc;
}, []);
const opt = {
  taskText: 'Answer "yes" if number even otherwise answer "no".',
  quiz,
};
export default () => {
  game.start(opt);
};
