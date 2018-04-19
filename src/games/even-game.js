import { getPlayerName, getAnswer } from '..';

const randomInteger = (min = 1, max = 100) => {
  let rand = min + (Math.random() * ((max + 1) - min));
  rand = Math.floor(rand);
  return rand;
};
const numbers = [0, 1, 2].map(() => randomInteger());
console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".');
const playerName = getPlayerName();

const askQuestion = (res = { isRight: true }, step = 0) => {
  if ((step > 2 && res.isRight) || !res.isRight) {
    return res;
  }
  console.log(`Question: ${numbers[step]}`);
  const answer = getAnswer();
  const rightAnswer = numbers[step] % 2 === 0 ? 'yes' : 'no';
  const isRight = answer === rightAnswer;
  if (isRight) {
    console.log('Correct!');
  }
  const result = {
    isRight,
    answer,
    rightAnswer,
  };
  return askQuestion(result, step + 1);
};

export default () => {
  const gameResult = askQuestion();
  if (gameResult.isRight) {
    console.log(`Congratulations, ${playerName}!`);
  } else {
    console.log(`${gameResult.answer} is wrong answer ;(. Correct answer was ${gameResult.rightAnswer}.`);
  }
};
