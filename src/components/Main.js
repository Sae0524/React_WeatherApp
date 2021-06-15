import React, { useState, useEffect } from "react"
import axios from "axios"

import Context from "../Context"

import Content from "./Content"
import Search from "./Search"
import WeatherData from "./WeatherData"
import Error from "./Error"

const Main = () => {


  const [weather, setWeather] = useState()
  const [city, setCity] = useState()
  const [error, setError] = useState()
  

  const location = null
  const api_call = async (e,location) => {
    e.preventDefault() //to make sure it doesn't refresh when you submitted 
    location = e.target.elements.location.value;
  
    if (!location) return setError("No weather found :("),setWeather(null)
    const API_KEY = "0fc6feddfe7397fb225cfa9a3e731808"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
    const request = axios.get(url)
    const response = await request
    setWeather(response.data.main)
    setCity(response.data.name)
    setError(null)
  }

  const firstFetch = async (location) => {
    // Error messege
  if (!location) return setError("No weather found :("),setWeather(null)
  const API_KEY = "0fc6feddfe7397fb225cfa9a3e731808"
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
  const request = axios.get(url)
  const response = await request
  setWeather(response.data.main)
  setCity(response.data.name)
  setError(null)
 }


  useEffect(() => {
    firstFetch("Vancouver")
  },[]);



  weather && console.log(weather)
  return (
    <div className="main">
      <Content>
        <Context.Provider value={{api_call, weather, city}}>
        <Search/>
        { weather && <WeatherData/>}
        {error && <Error error={error}/>}
        </Context.Provider>
      </Content>
    </div>
  )
}

export default Main 