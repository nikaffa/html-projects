//manipulating with data
//default export (one per file)
const users = [
  { name: 'mario', premium: true },
  { name: 'luigi', premium: false },
  { name: 'yoshi', premium: true },
  { name: 'toad', premium: true },
  { name: 'peach', premium: false }
];
export const getPremiumUsers = users => {
  return users.filter(user => user.premium); //new array when users.premium is true
};
export default users; //export users as default value

/* OR, the other way of exporting:
const getPremiumUsers = users => {
  return users.filter(user => user.premium); //new array when users.premium is true
};
export { getPremiumUsers, users as default }; */
