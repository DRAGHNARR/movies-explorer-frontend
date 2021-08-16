import './Search.css';
import React, { useState, useEffect } from 'react';
import searchSubmit from '../../images/search__submit-pic.png';

function Search({onSubmit}) {
  const [isSet, setIsSet] = useState(false);
  const [searcb, setSearch] = useState("");

  function handleSearchChange(event) {
    setSearch(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(searcb, isSet);
  } 

  return (
    <section className="search">
      <form className="search__form" name="search" onSubmit={handleSubmit}>
        <div className="search__line">
          <div className="search__box-text">
            <input value={searcb} onChange={handleSearchChange} className="search__text" id="search-phrase" name="phrase" type="text" placeholder="Фильм"></input>
          </div>
          <button className="search__submit" type="submit"><img className="search__submit-pic" src={searchSubmit} alt="Иконка поиска"/></button>
        </div>
        <div className="search__box-radio">
          <span className="search__radio-description">Короткометражки</span>
          <div className={isSet ? "search__radio-set" : "search__radio-unset"} onClick={() => setIsSet(!isSet)}>
            <div className={isSet ? "search__radio-set-round" : "search__radio-unset-round"}></div>
          </div>
        </div>
        <input className="search__radio" id="search-shorts" name="shorts" type="radio" value={isSet}></input>
      </form>
      <div className="search__divider"></div>
    </section>
  )
}

export default Search;