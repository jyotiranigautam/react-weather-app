import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './Components/showdata.css'
import axios from 'axios';
import ShowData from './Components/ShowData';
import { FaSearch } from 'react-icons/fa'

const App = () => {

  const [city, setCity] = useState('');
  const [data, setData] = useState({
    name: '',
    description: '',
    icon: ' ',
    temp: undefined,
    temp_min: undefined,
    temp_max: undefined,
    feels_like: undefined,
    humidity: undefined,
    sunrise: undefined,
    sunset: undefined,
    country: undefined,
    wind: undefined,
  })



  const defaultCityWeather = () => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=5bea2ff5504eb246b971fa2501b2ec57`)
      .then((response) => {
        setData({
          description: response.data.weather[0].description,
          icon: response.data.weather[0].icon,
          name: response.data.name,
          temp: response.data.main.temp,
          temp_min: response.data.main.temp_min,
          temp_max: response.data.main.temp_max,
          feels_like: response.data.main.feels_like,
          humidity: response.data.main.humidity,
          country: response.data.sys.country,
          wind: response.data.wind.speed,
        })
        console.log(response.data);
      })
  }

  const iconUrl = <img src={`https://openweathermap.org/img/wn/${data.icon}.png`} alt="icon" style={{ height: '80px' }} />

  useEffect(() => {
    defaultCityWeather();
  }, [])

  const handleClick = () => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5bea2ff5504eb246b971fa2501b2ec57`)
      .then((response) => {
        setData({
          description: response.data.weather[0].description,
          icon: response.data.weather[0].icon,
          name: response.data.name,
          temp: response.data.main.temp,
          temp_min: response.data.main.temp_min,
          temp_max: response.data.main.temp_max,
          feels_like: response.data.main.feels_like,
          humidity: response.data.main.humidity,
          country: response.data.sys.country,
          wind: response.data.wind.speed,
        })
        console.log(response.data);
      })
  }

  return (
    <>
      <div className="container">
        <div className="WeatherBg">
          <div className='container text-center mt-5'>
            <h1 style={{ color: 'white' }}>Weather App</h1>
            {/* ----------search bar----------------- */}
            <div className="search_bar mt-5">

              <input type="text" className='search_input  ' value={city} onChange={(e) => {
                setCity(e.target.value);
              }} />
              <button className='btn btn-primary mx-3' type='submit' onClick={handleClick} style={{ width: '100px' }}><FaSearch /> </button>
            </div>

            {/* -------Temprature section----------- */}
            <div className="section_temprature mt-5" >

              <div className=" city_display" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1rem' }}>
                <h3>{data.name}, {data.country} </h3>
                <h3>{data.description}</h3>
              </div>
              <div className=" temprature">
                <div className="icon" >{iconUrl}</div>
                <div className="temp">
                  {
                    data.temp !== undefined ? (<h3>{(data.temp - 273.15).toFixed(2)}°C</h3>) : null
                  }
                </div>
              </div>

            </div>
          </div>
          <div className="description">
            <ShowData text={data} />
          </div>

        </div>

      </div>
    </>
  )
}

export default App;