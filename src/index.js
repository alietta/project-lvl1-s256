import readlineSync from 'readline-sync';

export default () => {
  const playerName = readlineSync.question('May I have your name? ');
  return playerName;
};
