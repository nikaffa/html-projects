//manipulation with Weather APIs and getting data from there

//creating a class with properties and methods
class Forecast{
  constructor(){
    this.key = 'iWuKAGSs9ErX31A2eDs5kbb03lCEDycG';
    this.weatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/';
    this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search';
  }
  //update the city info
  async updateCity(city){
    const cityDetails = await this.getCity(city); //awaits the promise from getCity resolves and assigns it to a var
    const weather = await this.getWeather(cityDetails.Key); //awaits the promise from getWeather resolves and assigns it to a var
    return { cityDetails, weather }; //returns an object using object shorthand notation (a property and a key names are equal)
  }
  //get the city informatiom
  async getCity(city){
    const query = `?apikey=${this.key}&q=${city}`;
    const response = await fetch(this.cityURI + query); //awaits the promise until it resolves and assigns it to var
    const data = await response.json(); //awaits the promise to resolve and returns the data
    return data[0];
  }
  //get the weather information
  async getWeather(id) {
    const query = `${id}?apikey=${this.key}`;
    const response = await fetch(this.weatherURI + query);
    const data = await response.json();
    return data[0];
  }
}



