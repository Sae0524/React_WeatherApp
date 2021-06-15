import React, {useContext} from "react"
import "../styles/styles.css"

import Context from "../Context"

const Search = () => {
  const {api_call} = useContext(Context)
  return (
    <div className="weather-search">
      <form onSubmit ={api_call} className="weather-search__form">
        <input name="location" autoComplete="off" className="weather-search__input" type="text" placeholder="Search"/>
        <button className="weather-search__button">&rarr;</button>
     </form>
    </div>
  )
}

export default Search