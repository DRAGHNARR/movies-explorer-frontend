import './MoviesCard.css';

function MoviesCard({movie}) {
  return (
    <figure className="movie">
      <img className="movie__pic" src={movie.link} alt={movie.title}/>
      <figcaption className="movie__title">{movie.title}</figcaption>
      <div className="movie__divider"></div>
      <p className="movie__duration">{movie.duration}</p>
    </figure>
  )
}

export default MoviesCard;