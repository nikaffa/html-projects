const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
const pattern = /^[a-zA-Z]{6,10}$/; //any letter, which starts and ends the string(only letters, no numbers, no spec.chars), 6-10 chars long //test the regex with .test method

form.addEventListener('submit', event => {
  event.preventDefault(); //to prevent refreshing the page while submitting

  //validation with Regex
  const username = form.username.value; //get the value of user's input
  if(pattern.test(username)) { //if passed the test (true)
    feedback.textContent = 'valid username';
  }else {
    feedback.textContent = 'username must contains 6 to 10 letters only';
  }
});

//live feedback
form.username.addEventListener('keyup', e => { //event=typing
  if(pattern.test(e.target.value)) { //if input passes the test
    form.username.setAttribute('class', 'success'); //field becomes green. DOESN'T WORK!  
  } else {
    form.username.setAttribute('class', 'error'); //field becomes red. DOESN'T WORK!
  }
});