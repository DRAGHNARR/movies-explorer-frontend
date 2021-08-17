import './MoviesCard.css';
import React, { useState } from 'react';

function MoviesCard({movie, onSaveMovie, onUnsaveMovie}) {
  const [isSaved, setIsSaved] = useState(movie.isSaved);

  return (
    <figure className="movie">
      <img className="movie__pic" src={`https://api.nomoreparties.co${movie.image.url}`} alt={movie.nameRU}/>
      <div className="movie__description">
        <div className="movie__description-line">
          <figcaption className="movie__title">{movie.nameRU}</figcaption>
          <button className={isSaved ? "movie__saved" : "movie__unsaved"} onClick={() => setIsSaved(!isSaved)}></button>
        </div>
        <p className="movie__duration">{movie.duration}</p>
      </div>
    </figure>
  )
}

export default MoviesCard;