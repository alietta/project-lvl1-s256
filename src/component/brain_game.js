import { getPlayerName, getAnswer } from '..';

const game = {};
const welcome = () => console.log('Welcome to the Brain Games!');
const printTask = text => console.log(text);
function setTask(taskText) {
  game.task = taskText;
}
function setRounds(count) {
  game.rountCount = count - 1;
}
game.setTask = setTask;
game.setRounds = setRounds;
game.start = () => {
  welcome();
  printTask(game.task);
  const playerName = getPlayerName();
  const askQuestion = (res = { isRight: true }, step = 0) => {
    if ((step > game.rountCount && res.isRight) || !res.isRight) {
      return res;
    }
    const question = game.questionRule();
    console.log(`Question: ${question}`);
    const answer = getAnswer();
    const rightAnswer = game.answerRule(question);
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
export default game;
