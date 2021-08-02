import './Search.css';
import searchSubmit from '../../images/search__submit-pic.png';

function Search() {
  return (
    <section className="search">
      <form className="search__form" name="search">
        <div className="search__box-text">
          <input className="search__text" id="search-phrase" name="phrase" type="text" placeholder="Фильм"></input>
          <button className="search__submit" type="submit"><img className="search__submit-pic" src={searchSubmit} alt="Иконка поиска"/></button>
        </div>
        <div className="search__box-radio">
          <span className="search__radio-description">Короткометражки</span>
          <input className="search__radio" id="search-shorts" name="shorts" type="radio"></input>
        </div>
      </form>
      <div className="search__divider"></div>
    </section>
  )
}

export default Search;