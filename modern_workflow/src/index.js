import {styleBody, addTitle, contact} from './dom'; //imports functions from dom.js
import users, { getPremiumUsers } from './data'; //import default value and function

const premUsers = getPremiumUsers(users);
console.log(users, premUsers);

console.log('test 2')