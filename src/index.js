import { car, cdr } from 'hexlet-pairs';
import readlineSync from 'readline-sync';

const getPlayerName = () => {
  const playerName = readlineSync.question('May I have your name? ');
  return playerName;
};

const getAnswer = () => readlineSync.question('Your answer: ');

const getRightAnswer = quize => cdr(quize);
const getQuestion = quize => car(quize);

const play = (gameRule) => {
  const quize = gameRule();
  const question = getQuestion(quize);
  const rightAnswer = getRightAnswer(quize);
  console.log(`Question: ${question}`);
  const answer = getAnswer();
  const isRight = `${answer}` === `${rightAnswer}`;
  return {
    isRight,
    answer,
    rightAnswer,
  };
};
export default function (task, gameRule) {
  console.log('Welcome to the Brain Games!');
  console.log(task);
  const playerName = getPlayerName();
  let count = 0;
  while (count < 3) {
    const result = play(gameRule);
    if (result.isRight) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(`${result.answer} is wrong answer ;(. Correct answer was ${result.rightAnswer}.`);
      console.log(`Let's try again, ${playerName}`);
      count = 0;
    }
  }
  console.log(`Congratulations, ${playerName}!`);
}
