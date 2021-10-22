const now = new Date();

console.log(dateFns.isToday(now)); //from date-fns.org library

// formatting options
console.log(dateFns.format(now, 'YYYY'));
console.log(dateFns.format(now, 'MMMM')); //October
console.log(dateFns.format(now, 'dddd')); //Friday
console.log(dateFns.format(now, 'Do')); //1st
console.log(dateFns.format(now, 'dddd Do MMMM YYYY')); //Friday 1st October 2021

// comparing dates
const before = new Date('February 1 2019 12:00:00');

// to use in a blogpost, etc.
console.log(dateFns.distanceInWords(now, before, {addSuffix: true})); //over 2 years ago