import game from '../component/brain_game';
import getRandomArr from '../component/prepare_data';

const arr = getRandomArr(3, 2, 1, 10);
const quiz = arr.reduce((acc, [a, b], i) => {
  if (i === 0) {
    acc.push({
      question: `${a} + ${b}`,
      answer: a + b,
    });
  } else if (i === 1) {
    acc.push({
      question: `${a} - ${b}`,
      answer: a - b,
    });
  } else {
    acc.push({
      question: `${a} * ${b}`,
      answer: a * b,
    });
  }
  return acc;
}, []);

const opt = {
  taskText: 'What is the result of the expression?',
  quiz,
};
export default () => {
  game.start(opt);
};
