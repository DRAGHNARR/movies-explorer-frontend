import './MoviesCard.css';
import React, { useState } from 'react';

function MoviesCard({movie, onSaveMovie, onUnsaveMovie, loc}) {
  const [isSaved, setIsSaved] = useState(movie.isSaved);

  function handleSubmit(event) {
    event.stopPropagation();
    console.log(isSaved);
    const result =  isSaved ? onUnsaveMovie(movie) : onSaveMovie(movie);
    movie.isSaved = !movie.isSaved;
    setIsSaved(!isSaved);
  }

  console.log(isSaved);

  return (
    <figure className="movie">
      <a className="movie__pic-frame" href={movie.trailerLink}><img className="movie__pic" src={movie.image} alt={movie.nameRU}/></a>
      <div className="movie__description">
        <div className="movie__description-line">
          <figcaption className="movie__title">{movie.nameRU}</figcaption>
          <button className={loc === '/movies' ? (isSaved ? "movie__saved" : "movie__unsaved") : (isSaved ? "movie__saved-additional" : "movie__unsaved-additional")} onClick={handleSubmit}></button>
        </div>
        <p className="movie__duration">{(movie.duration >= 60 ? `${Math.floor(movie.duration / 60)}ч ` : "") + `${movie.duration % 60}м`}</p>
      </div>
    </figure>
  )
}

export default MoviesCard;