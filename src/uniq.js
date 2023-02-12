import _ from './lodash.js';

export const numbers = [2, 1, 2, 7, 7];
export const uniqueNumbers = _.uniq([...numbers]);
