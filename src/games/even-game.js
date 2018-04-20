import game from '../component/brain_game';
import randomInt from '../component/prepare_data';

game.setTask('Answer "yes" if number even otherwise answer "no".');
game.questionRule = () => randomInt();
game.answerRule = question => (question % 2 === 0 ? 'yes' : 'no');
game.setRounds(3);
export default () => {
  game.start();
};
