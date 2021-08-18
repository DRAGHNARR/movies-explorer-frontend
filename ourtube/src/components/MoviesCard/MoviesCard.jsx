import './MoviesCard.css';
import React, { useState } from 'react';

function MoviesCard({movie, onSaveMovie, onUnsaveMovie}) {
  const [isSaved, setIsSaved] = useState(movie.isSaved);

  function handleSubmit() {
    const result =  isSaved ? onUnsaveMovie(movie) : onSaveMovie(movie);
    setIsSaved(!isSaved);
  }

  return (
    <figure className="movie">
      <img className="movie__pic" src={movie.image} alt={movie.nameRU}/>
      <div className="movie__description">
        <div className="movie__description-line">
          <figcaption className="movie__title">{movie.nameRU}</figcaption>
          <button className={isSaved ? "movie__saved" : "movie__unsaved"} onClick={handleSubmit}></button>
        </div>
        <p className="movie__duration">{(movie.duration >= 60 ? `${Math.floor(movie.duration / 60)}ч ` : "") + `${movie.duration % 60}м`}</p>
      </div>
    </figure>
  )
}

export default MoviesCard;