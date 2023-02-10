const _ = require('./lodash');

const numbers = [2, 1, 2, 7, 7];
const uniqueNumbers = _.uniq([...numbers]);

module.exports = { numbers, uniqueNumbers };
