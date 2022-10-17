const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  let season;
if(typeof date === 'undefined'){return 'Unable to determine the time of year!'};
if(typeof date.getMonth !== 'function'){throw new Error ('Invalid date!')};
//if(isNaN(Date.parse(date)) === true){throw new Error ('Invalid date!')};
if(Object.getOwnPropertySymbols(date).length !==0){throw new Error ('Invalid date!')};
  let month = date.getMonth()
  if((month>=0)&&(month<2)||(month===11)){season = 'winter'};
  if((month>=2)&&(month<5)){season = 'spring'};
  if((month>=5)&&(month<8)){season = 'summer'};
  if((month>=8)&&(month<11)){season = 'fall'};

return season;
}

module.exports = {
  getSeason
};
