import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './WeatherApp.css';



export default function WeatherApp() {

const [city,setCity] = useState('');
const [weatherData, setWeatherData] = useState(null);
const API_KEY = 'cdec1e01fbc44a1a84402658243103';
const [clicked,clickHandler] = useState(false);
const conditionsList = 'https://www.weatherapi.com/docs/weather_conditions.json'


  const fetchData = async () => {
    try {
      const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`);
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

const handleButtonClick = ()=>{

clickHandler(true);
fetchData();
console.log(conditionsList);


}


const handleInputChange = (event) => {
    setCity(event.target.value);
    
  }

  
  // Event handler to update the city state when the user types in the input box
  


    return (
    
        <div id="app-header">
          <h1>Weather App</h1>
            
           <div>

    
    <div class="search-container">
      <input type="text" value={city} onChange={handleInputChange} id="search-input" placeholder="Enter city name"/>
      <button onClick={handleButtonClick} id="search-button">Search</button>
    </div>
    {clicked && weatherData && (<div className="weather-info" id="weather-info">
      <h2>{weatherData.location.name}, {weatherData.location.country}</h2>
     <div className='weather-content'>
      <div><p>Temperature: {weatherData.current.temp_c}°C</p>
          <p>Condition: {weatherData.current.condition.text}</p>
          </div>
      
          <img src={weatherData.current.condition.icon}/></div> 
          
          
          </div>)}
    
    
    </div>

  </div>
            
    );
}
