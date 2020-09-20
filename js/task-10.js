import users from './users.js';
const getSortedUniqueSkills = users => {
  return users
    .reduce((arrSkills, user) => {
      arrSkills.push(...user.skills);
      return arrSkills;
    }, [])
    .filter((elem, index, arrSkills) => index === arrSkills.indexOf(elem))
    .sort();
};
console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
