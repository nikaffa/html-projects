//responsible for DOM manipulation and event handeling

const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');
const forecast = new Forecast(); //new object instance

const updateUI = data => {
  //destructing properties from an object and store them in a const same name, same as:
  // const cityDetails = data.cityDetails;
  // const weather = data.weather;
  const { cityDetails, weather } = data;

  //update html details template
  details.innerHTML = `
    <h5 class="my-3">${cityDetails.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
      <span>${weather.Temperature.Metric.Value}</span>
      <span>&deg;C</span>
    </div>
  `;

  //update the weather icon image in small box
  const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
  icon.setAttribute('src', iconSrc); //sets sourse atribute depends on weather

  //update the day/night image in big box, using the ternary operator
  let timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';
  time.setAttribute('src', timeSrc); //sets sourse atribute depends on day/night

  //remove d-none class if exists
  if(card.classList.contains('d-none')) {
    card.classList.remove('d-none');
  }
};

cityForm.addEventListener('submit', event => {
  event.preventDefault(); //prevents default action(refreshing the page)

  //get city value from input form
  const city = cityForm.city.value.trim();//get the input field value
  cityForm.reset(); //clear up the form field

  //update the ui with new city the user typed in 
  forecast.updateCity(city) //returns a promise
    .then(data => updateUI(data)) //data from the promise (returned object)
    .catch(err => console.log(err));

  //set local storage to store user's input
  localStorage.setItem('city', city);
});

//stores the user's input with uploading/refreshing the page
if(localStorage.getItem('city')) { //if city already exists in local storage (inputted in earlier)
  forecast.updateCity(localStorage.getItem('city')) //returns a promise
    .then(data => updateUI(data)) 
    .catch(err => console.log(err));
}

