//import js files
import Tooltip from './ui-library/tooltip';
import Dropdown from './ui-library/dropdown'; 
import Tabs from './ui-library/tabs'; 
import Snackbar from './ui-library/snackbar'; 

//create a tooltip instance
const tooltip = new Tooltip(document.querySelector('.tooltip'));

tooltip.init(); //initializing tooltip & appending to DOM

//create dropdown instances,
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
  const instance = new Dropdown(dropdown);
  instance.init(); //and initialize them (add event listener on triggers)
});

//create tabs instance
const tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();

//create snackbar instance
const snackbar = new Snackbar();
snackbar.init();

//create a button
const button = document.querySelector('button');
button.addEventListener('click', () => {
  snackbar.show('you clicked me!'); //shows a message in a snackbar
});


