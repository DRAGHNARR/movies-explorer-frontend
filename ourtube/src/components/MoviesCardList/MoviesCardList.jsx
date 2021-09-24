import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import React, { useState, useEffect } from 'react';
import Preloader from '../Preloader/Preloader';
import { savedContext } from '../../contexts/savedContext';
import { useLocation } from 'react-router-dom';

function MoviesCardList({movies, loadingStatus, onSaveMovie, onUnsaveMovie, isSearched, setIsSearched}) {
  const location = useLocation();
  let saved = React.useContext(savedContext);
  const [startCardsCounter, setStartCardsCounter] = useState(12);
  const [addCardsCounter, setAddCardsCounter] = useState(3);
  
  const [displayedMovies, setDisplayedMovies] = useState([]);
  const [isAddButtonNeeded, setIsAddButtonNeeded] = useState(false);
  const [loc, setLoc] = useState(location.pathname);

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
    handleResize();
    setLoc(location.pathname);
  });
  
  useEffect(() => {
    return () => setIsSearched(false);
  }, []);
  
  useEffect(() => {
    setIsSearched(false);
  }, [loc]);

  useEffect(() => {
    setDisplayedMovies(movies.slice(0, startCardsCounter));
  }, [movies]);

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
  else if (loadingStatus === "state" && isSearched && !movies.length) {
    return (
      <section className="movies">
        <h2 className="movies__error">Ничего не найдено.</h2>
      </section>
    )
  }
  else if (loadingStatus === "state") {
    return (  
        <section className={movies.length !== 0 ? "movies" : "movies__disable"}>
          <div className="movies__holder">
            {
              displayedMovies.map(movie => {
                console.log(saved);
                if (loc ==='/movies' && saved.find((current) => {
                  return current.movieId === movie.movieId;
                })) {
                  movie.isSaved = true;
                }
                return <MoviesCard key={movie.movieId} movie={movie} onSaveMovie={onSaveMovie} onUnsaveMovie={onUnsaveMovie} loc={loc}/>
              })
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