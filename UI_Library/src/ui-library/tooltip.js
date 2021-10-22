import './styles/tooltip.css';

class Tooltip {
  constructor(element){
    this.element = element;
    this.message = element.getAttribute('data-message');
  }
  init() { //initializing element
    const tip = document.createElement('div');
    tip.classList.add('tip'); //adding class 
    tip.textContent = this.message;
    this.element.appendChild(tip); //appending to the DOM

    this.element.addEventListener('mouseenter', () => {
      tip.classList.add('active');
    });

    this.element.addEventListener('mouseleave', () => {
      tip.classList.remove('active');
    });

  } 
}

export { Tooltip as default};