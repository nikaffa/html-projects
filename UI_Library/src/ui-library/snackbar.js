import './styles/snackbar.css';

class Snackbar {
  constructor(){
    this.snackbar = document.createElement('div');
  }
  init(){
    this.snackbar.classList.add('snackbar');
    document.querySelector('body').appendChild(this.snackbar); //append to the DOM
  }
  show(message){
    this.snackbar.textContent = message;
    this.snackbar.classList.add('active'); //shows a message on a page when has class active
    setTimeout(() => {
      this.snackbar.classList.remove('active');
    }, 4000); //hides the message after 4 sec
  }
}

export { Snackbar as default };