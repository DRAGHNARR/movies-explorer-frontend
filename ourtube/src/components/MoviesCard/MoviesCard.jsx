import './MoviesCard.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function MoviesCard({movie, onSaveMovie, onUnsaveMovie, loc}) {
  const [isSaved, setIsSaved] = useState(movie.isSaved);

  function handleSubmit(event) {
    event.stopPropagation();
    const result =  isSaved ? onUnsaveMovie(movie) : onSaveMovie(movie);
    setIsSaved(!isSaved);
  }

  function handleOnCardClick() {

  }

  return (
    <figure className="movie">
      <a className="movie__pic-frame" href={movie.trailerLink}><img className="movie__pic" src={movie.image} alt={movie.nameRU}/></a>
      <div className="movie__description">
        <div className="movie__description-line">
          <figcaption className="movie__title">{movie.nameRU}</figcaption>
          <button className={loc === '/movies' ? (isSaved ? "movie__saved" : "movie__unsaved") : "movie__saved-additional"} onClick={handleSubmit}></button>
        </div>
        <p className="movie__duration">{(movie.duration >= 60 ? `${Math.floor(movie.duration / 60)}ч ` : "") + `${movie.duration % 60}м`}</p>
      </div>
    </figure>
  )
}

export default MoviesCard;