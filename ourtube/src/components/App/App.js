import { Route, Switch, useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './App.css';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import Hero from '../Hero/Hero';
import About from '../About/About';
import Tech from '../Tech/Tech';
import Student from '../Student/Student';
import Foot from '../Foot/Foot';

import Head from '../Head/Head';
import Search from '../Search/Search';
import Profile from '../Profile/Profile';
import SignForm from '../SignForm/SignForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import Except from '../Except/Except';
import Preloader from '../Preloader/Preloader';

import moviesApi from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi';
import auth from '../../utils/auth';

import { signin, signup, head } from '../../utils/data';
import { userContext } from "../../contexts/userContext";
import { savedContext } from "../../contexts/savedContext";

function App() {
  const [user, setUser] = useState({});
  const [movies, setMovies] = useState([]);
  const [moviesFIltered, setMoviesFiltered] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [savedMoviesFiltered, setSavedMoviesFiltered] = useState([]);
  const [loadingStatus, setLoadingStatus] = useState('state');
  const [isSearched, setIsSearched] = useState(false);
  const [loggedIn, setLoggedIn] = useState(0);
  const history = useHistory();

  function onSearchSubmit(search, isShort) {
    setIsSearched(true);
    setLoadingStatus('loading');
    setMoviesFiltered(movies.filter((movie) => {
      return movie.nameRU.indexOf(search) !== -1 && ((isShort && movie.duration < 40) || !isShort);
    }));
    setLoadingStatus('state');
  };

  function onSearchSavedSubmit(search, isShort) {
    setIsSearched(true);
    setLoadingStatus('loading');
    setSavedMoviesFiltered(savedMovies.filter((movie) => {
      return movie.nameRU.indexOf(search) !== -1 && ((isShort && movie.duration < 40) || !isShort);
    }));
    setLoadingStatus('state');
  };
  
  function signCheck() {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      return auth.signCheck(jwt)
        .then((answer) => {
          if (answer) {
            setUser(answer.data);
            setLoggedIn(1);
          }
        })
        .catch((error) => {
          setLoggedIn(2);
        });
    } 
    else {
      setLoggedIn(2);
    }
  }

  function onSignin({email, password}) {
    return auth.signin(email, password)
      .then(answer => {
        if (answer.token) {
          localStorage.setItem('jwt', answer.token);
          signCheck()
          .then(() => history.push('/movies'));
        }
      })
      .catch(error => console.log(error));
  }

  function onSignup({email, password, name}) {
    return auth.signup(email, password, name)
      .then(answer => {
        if (answer.token) {
          localStorage.setItem('jwt', answer.token);
          signCheck()
          .then(() => history.push('/movies'));
        }
      })
      .catch(error => console.log(error));
  }

  function onSaveMovie(movie) {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      setSavedMovies(savedMovies.concat(movie));  
      return mainApi.addMovie(jwt, movie)
        .then((movie) => {
          return movie;
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }

  function onUnsaveMovie(movie) {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
        setSavedMovies(savedMovies.splice(savedMovies.find((current) => {
          return current.movieId === movie.movieId;
        }), 1));
        mainApi.removeMovie(jwt, movie, user)
        .then((movie) => {
          return movie;
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }

  function onUpdateUser(oldEmail, email, name) {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
        return auth.updateUser(jwt, oldEmail, email, name)
        .then((user) => {
          setUser(user.data);
        });
    }
  }

  function onExit() {
    setLoggedIn(2);
    localStorage.removeItem('jwt');
    history.push('/');
  }
  
  useEffect(() => {
    setIsSearched(false);
    signCheck();
  }, []);
  
  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      if (JSON.parse(localStorage.getItem('savedMovies'))) {
        setSavedMovies(JSON.parse(localStorage.getItem('savedMovies')).data);
      }
      else {
        mainApi.getMovies(jwt, user)
        .then((movies) => {
          setSavedMovies(movies.data);
          localStorage.setItem('savedMovies', JSON.stringify(movies));
        })
        .catch((err) => {
          console.log(err);
        });
      }

      if (JSON.parse(localStorage.getItem('movies'))) {
        setMovies(JSON.parse(localStorage.getItem('movies')));
      }
      else {
        moviesApi.getMovies()
        .then((movies) => {
          const test = movies.map(movie => {
            return {
              id: movie.id,
              country: movie.country,
              director: movie.director,
              duration: movie.duration,
              year: movie.year,
              description: movie.description,
              image: `https://api.nomoreparties.co${movie.image.url}`,
              trailerLink: movie.trailerLink,
              thumbnail: movie.thumbnail ? movie.thumbnail : 'https://test.co/123',
              nameRU: movie.nameRU,
              nameEN: movie.nameEN,
              movieId: movie.id,
            };
          });
          setMovies(test);
          localStorage.setItem('movies', JSON.stringify(test));
        })
        .catch((err) => {
          console.log(err);
        });
      }
    }
  }, [loggedIn]);

  if (loggedIn === 0) {
    return (<Preloader/>);
  }
  else {
    return (
      <userContext.Provider value={user}>
        <savedContext.Provider value={savedMovies}>
          <div className="page">
            <Switch>
              <Route exact path="/">
                <Hero loggedIn={loggedIn} context={head}/>
                <About/>
                <Tech/>
                <Student/>
                <Foot/>
              </Route>
              <ProtectedRoute exact path="/movies" loggedIn={loggedIn}>
                <Head context={head}/>
                <Search onSubmit={onSearchSubmit}/>
                <MoviesCardList movies={moviesFIltered} loadingStatus={loadingStatus} onSaveMovie={onSaveMovie} onUnsaveMovie={onUnsaveMovie} isSearched={isSearched} setIsSearched={setIsSearched}/>
                <Foot/>
              </ProtectedRoute>
              <ProtectedRoute exact path="/saved-movies" loggedIn={loggedIn}>
                <Head context={head}/>
                <Search onSubmit={onSearchSavedSubmit}/>
                <MoviesCardList movies={savedMoviesFiltered} loadingStatus={loadingStatus} onSaveMovie={onSaveMovie} onUnsaveMovie={onUnsaveMovie} isSearched={isSearched} setIsSearched={setIsSearched}/>
                <Foot/>
              </ProtectedRoute>
              <ProtectedRoute exact path="/profile" loggedIn={loggedIn}>
                <Head context={head}/>
                <Profile onSubmit={onUpdateUser} onExit={onExit}/>
              </ProtectedRoute>
              <Route exact path="/signin">
                <SignForm context={signin} onSubmit={onSignin}/>
              </Route>
              <Route exact path="/signup">
                <SignForm context={signup} onSubmit={onSignup}/>
              </Route>
              <Route>
                <Except/>
              </Route>
            </Switch>
          </div>
        </savedContext.Provider>
      </userContext.Provider>
    );
  }
}

export default App;
