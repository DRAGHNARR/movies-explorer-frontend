const signin = {
  title: 'Рады видеть!',
  submit: 'Войти',
  footDescription: 'Ещё не зарегистрированы?',
  footRoute: 'Регистрация',
  footRouteTo: '/signup',
}

const signup = {
  title: 'Добро пожаловать!',
  submit: 'Зарегистрироваться',
  footDescription: 'Уже зарегистрированы?',
  footRoute: 'Войти',
  footRouteTo: '/signin',
}

const head = {
  main: {
    title: 'Главная',
    to: '/',
  },
  movies: {
    title: 'Фильмы',
    to: '/movies',
  },
  savedMovies: {
    title: 'Сохранённые фильмы',
    to: '/saved-movies',
  },
  profile: {
    title: 'Аккаунт',
    to: '/profile',
  },
}

const movies = [
  {
    _id: 1,
    title: 'Это кинчик',
    link: 'http://localhost:3000/movie__pic.png',
    duration: '1ч42м',
    isSaved: true,
  },
  {
    _id: 2,
    title: 'Это кинчик',
    link: 'http://localhost:3000/movie__pic.png',
    duration: '1ч42м',
    isSaved: true,
  },
  {
    _id: 3,
    title: 'Это кинчик',
    link: 'http://localhost:3000/movie__pic.png',
    duration: '1ч42м',
    isSaved: false,
  },
  {
    _id: 4,
    title: 'Это кинчик',
    link: 'http://localhost:3000/movie__pic.png',
    duration: '1ч42м',
    isSaved: false,
  },
  {
    _id: 5,
    title: 'Это кинчик',
    link: 'http://localhost:3000/movie__pic.png',
    duration: '1ч42м',
    isSaved: false,
  },
  {
    _id: 6,
    title: 'Это кинчик',
    link: 'http://localhost:3000/movie__pic.png',
    duration: '1ч42м',
    isSaved: false,
  },
  {
    _id: 7,
    title: 'Это кинчик',
    link: 'http://localhost:3000/movie__pic.png',
    duration: '1ч42м',
    isSaved: false,
  },
  {
    _id: 8,
    title: 'Это кинчик',
    link: 'http://localhost:3000/movie__pic.png',
    duration: '1ч42м',
    isSaved: false,
  },
  {
    _id: 9,
    title: 'Это кинчик',
    link: 'http://localhost:3000/movie__pic.png',
    duration: '1ч42м',
    isSaved: false,
  },
  {
    _id: 10,
    title: 'Это кинчик',
    link: 'http://localhost:3000/movie__pic.png',
    duration: '1ч42м',
    isSaved: false,
  },
  {
    _id: 11,
    title: 'Это кинчик',
    link: 'http://localhost:3000/movie__pic.png',
    duration: '1ч42м',
    isSaved: false,
  },
  {
    _id: 12,
    title: 'Это кинчик',
    link: 'http://localhost:3000/movie__pic.png',
    duration: '1ч42м',
    isSaved: false,
  },
  {
    _id: 13,
    title: 'Это кинчик',
    link: 'http://localhost:3000/movie__pic.png',
    duration: '1ч42м',
    isSaved: false,
  },
  {
    _id: 14,
    title: 'Это кинчик',
    link: 'http://localhost:3000/movie__pic.png',
    duration: '1ч42м',
    isSaved: false,
  },
  {
    _id: 15,
    title: 'Это кинчик',
    link: 'http://localhost:3000/movie__pic.png',
    duration: '1ч42м',
    isSaved: false,
  },
  {
    _id: 16,
    title: 'Это кинчик',
    link: 'http://localhost:3000/movie__pic.png',
    duration: '1ч42м',
    isSaved: false,
  },
]

const savedMovies = [
  {
    _id: 1,
    title: 'Это кинчик',
    link: 'http://localhost:3000/movie__pic.png',
    duration: '1ч42м',
  },
  {
    _id: 2,
    title: 'Это кинчик',
    link: 'http://localhost:3000/movie__pic.png',
    duration: '1ч42м',
  },
  {
    _id: 3,
    title: 'Это кинчик',
    link: 'http://localhost:3000/movie__pic.png',
    duration: '1ч42м',
  },
]

export {signin, signup, head, movies, savedMovies};