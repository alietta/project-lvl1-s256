// import { _ } from 'lodash';

export default (min = 1, max = 100) => {
  let rand = min + (Math.random() * ((max + 1) - min));
  rand = Math.floor(rand);
  return rand;
};
// export default (step = 3, len = 1, min = 1, max = 100) => {
//   const empty = _.range(step);
//   const arr = empty.map(() => {
//     if (len === 1) {
//       return randomInteger(min, max);
//     } else {
//       return _.range(len).map(() => randomInteger(min, max));
//     }
//   });
//   return arr;
// };
