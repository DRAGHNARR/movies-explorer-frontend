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

  getMovies() {
    return fetch(this.url, {headers: this.head})
      .then(this._checkAnswer);
  }
}

const moviesApi = new MoviesApi({url: 'https://api.nomoreparties.co/beatfilm-movies', head: {
  'Content-Type': 'application/json'
}});

export default moviesApi;