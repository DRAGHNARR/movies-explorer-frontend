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

  addMovie(movie) {
    return fetch(this.url, {
      method: 'POST',
      headers: {"Content-Type": "application/json" },
      body: JSON.stringify({
        movie,
      })
    })
    .then(this._checkResponse);
  }

  removeMovie(movie) {
    return fetch(this.url, {
      method: 'DELETE',
      headers: {"Content-Type": "application/json" },
      body: JSON.stringify({
        movie,
      })
    })
    .then(this._checkResponse);
  }

  getMovies() {
    return fetch(this.url, {headers: this.head})
      .then(this._checkAnswer);
  }
}

const mainApi = new MoviesApi({url: 'http://localhost:3001', head: {
  'Content-Type': 'application/json'
}});

export default mainApi;