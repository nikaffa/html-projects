const correctAnswers = ['A', 'B', 'B', 'A'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', event => {
  event.preventDefault(); //prevent refreshing with submitting

  let score = 0;
  const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

  //check answers
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) { //comparing the answers
      score += 25;
    }
  });

  //show the result on a page
  scrollTo(0,0); //automatically scrolling to the top of the page
  result.classList.remove('d-none'); //showing it on a page (hidden on default)

  //animation on showing the result
  let output = 0; //temporal value of score
  const timer = setInterval(() => {
    result.querySelector('span').textContent = `${output}%`; //updating the temp value
    if(output === score) {
      clearInterval(timer); //stop animation
    } else {
      output++;
    }
  }, 10);


});