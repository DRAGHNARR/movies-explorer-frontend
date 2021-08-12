import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import React, { useState, useEffect } from 'react';
import Preloader from '../Preloader/Preloader';

function MoviesCardList({movies, loadingStatus, onSaveMovie, onUnsaveMovie}) {
  const [startCardsCounter, setStartCardsCounter] = useState(12);
  const [addCardsCounter, setAddCardsCounter] = useState(3);
  
  const [displayedMovies, setDisplayedMovies] = useState([]);
  const [isAddButtonNeeded, setIsAddButtonNeeded] = useState(false);

  function handleResize() {
    if (window.innerWidth <= 589) {
      setStartCardsCounter(5);
      setAddCardsCounter(1);
    }
    else if (window.innerWidth <= 989) {
      setStartCardsCounter(8);
      setAddCardsCounter(2);
    }
    else if (window.innerWidth <= 1279) {
      setStartCardsCounter(12);
      setAddCardsCounter(3);
    }
    else {
      setStartCardsCounter(16);
      setAddCardsCounter(4);
    }
  }
  
  useEffect(() => {
    handleResize()
  });

  window.addEventListener('resize', handleResize);

  function handleAdd() {
    setDisplayedMovies(displayedMovies.concat(movies.slice(displayedMovies.length, displayedMovies.length + (displayedMovies.length ? addCardsCounter : startCardsCounter))))
    if (displayedMovies.length < movies.length) {
      setIsAddButtonNeeded(true);
    }
    else {
      setIsAddButtonNeeded(false);
    }
  } 
  
  useEffect(() => {
    handleAdd()
  }, [movies]);
  
  useEffect(() => {
  }, [displayedMovies, loadingStatus]);

  if (loadingStatus === "loading") {
    return (
      <Preloader/>
    )
  }
  else if (loadingStatus === "error") {
    return (
      <section className="movies">
        <h2 className="movies__error">Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</h2>
      </section>
    )
  }
  else if (loadingStatus === "state") {
    return (  
        <section className={movies.length !== 0 ? "movies" : "movies__disable"}>
          <div className="movies__holder">
            {
              displayedMovies.map(movie => <MoviesCard key={movie.id} movie={movie} onSaveMovie={onSaveMovie} onUnsaveMovie={onUnsaveMovie}/>)
            }
          </div>
          <nav className="movies__more">
            <button className={displayedMovies.length < movies.length ? "movies__more-add" : "movies__disable"} type="button" onClick={handleAdd}>Ещё</button>
          </nav>
        </section>
    )
  }
}

export default MoviesCardList;