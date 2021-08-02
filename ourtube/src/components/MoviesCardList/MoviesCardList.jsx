import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({data}) {
  return (
    <section className="movies">
      <div className="movies__holder">
        {
          data.map(movie => <MoviesCard key={movie._id} movie={movie}/>)
        }
      </div>
      <nav className="movies__more">
        <button className="movies__more-add">Ещё</button>
      </nav>
    </section>
  )
}

export default MoviesCardList;