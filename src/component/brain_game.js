import { getPlayerName, getAnswer } from '..';

const welcome = () => console.log('Welcome to the Brain Games!');
const task = text => console.log(text);

const start = ({ taskText, quiz }) => {
  welcome();
  task(taskText);
  const playerName = getPlayerName();
  const askQuestion = (res = { isRight: true }, step = 0) => {
    if ((step > 2 && res.isRight) || !res.isRight) {
      return res;
    }
    console.log(`Question: ${quiz[step].question}`);
    const answer = getAnswer();
    const rightAnswer = quiz[step].answer;
    const isRight = `${answer}` === `${rightAnswer}`;
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
  const gameResult = askQuestion();
  if (gameResult.isRight) {
    console.log(`Congratulations, ${playerName}!`);
  } else {
    console.log(`${gameResult.answer} is wrong answer ;(. Correct answer was ${gameResult.rightAnswer}.`);
  }
};
export default {
  start,
};
