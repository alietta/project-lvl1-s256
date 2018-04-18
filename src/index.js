import readlineSync from 'readline-sync';

export const getPlayerName = () => {
  const playerName = readlineSync.question('May I have your name? ');
  return playerName;
};

export const getAnswer = () => readlineSync.question('Your answer: ');
