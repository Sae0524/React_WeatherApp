import React, {useContext} from "react"
import "../styles/styles.css"
import Context from "../Context"

const WeatherData = () => {
  const {weather, city} = useContext(Context)
  const {temp, humidity} = weather
  return (
    <div className="weather-data">
      <p className="weather__tagline">Weather in <span className="weather-data__city">{city}</span></p>
      <div className="weather-data__box">
         <span className="weather-data__property">
           <p className="weather-data__title">Temperature</p>
           <p className="weather-data__value">{temp}°C</p>
         </span>
         <span className="weather-data__property">
           <p className="weather-data__title">Humidity</p>
           <p className="weather-data__value">{humidity}%</p>
         </span>
       </div>
    </div>
  )
}

export default WeatherData