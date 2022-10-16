const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let letters = [];
  let name = '';
  let team = '';
  let member = [];
 if(members === null){return false};
  if(typeof members != 'object'){return false}
  else{
    for(i = 0; i < members.length; i++){
    if(typeof members[i] === 'string'){
    name = members[i].toUpperCase();
    member = name.trim();
    letters.push(member.slice(0,1)); 
    } 
  }
 }
 letters.sort();
  team = letters.join('');
 
  return team;
}

module.exports = {
  createDreamTeam
};
