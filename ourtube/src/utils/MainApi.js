class MoviesApi {
  constructor({url, head}) {
    this.url = url;
    this.head = head;
  }

  _checkAnswer(answer) {
    if (answer.ok) {
      return answer.json();
    }
    return Promise.reject(`Ошибка ${answer.status}`);
  }

  addMovie(jwt, movie) {
    return fetch(this.url, {
      method: 'POST',
      headers: {"Content-Type": "application/json", "Authorization": `Bearer ${jwt}`},
      body: JSON.stringify(movie)
    })
    .then(this._checkResponse);
  }

  removeMovie(jwt, movie, user) {
    return fetch(`${this.url}/${movie.movieId}`, {
      method: 'DELETE',
      headers: {"Content-Type": "application/json", "Authorization": `Bearer ${jwt}`},
      body: JSON.stringify(movie),
      user: user,
    })
    .then(this._checkResponse);
  }

  getMovies(jwt, user) {
    return fetch(this.url, {
      headers: {"Content-Type": "application/json", "Authorization": `Bearer ${jwt}`},
      user: user,
    })
    .then(this._checkAnswer);
  }
}

const mainApi = new MoviesApi({url: 'http://localhost:3001/movies', head: {
  'Content-Type': 'application/json'
}});

export default mainApi;
