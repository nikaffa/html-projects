const clock = document.querySelector('.clock');

//get current time
const tick = () => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const html = `
  <span>${hours}</span> :
  <span>${minutes}</span> :
  <span>${seconds}</span> 
  `;

  //insert it to html
  clock.innerHTML = html;
};

//call the function every sec (update time)
setInterval(tick, 1000);