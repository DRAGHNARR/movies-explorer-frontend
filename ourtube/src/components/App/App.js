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
import mainApi from '../../utils/mainApi';
import auth from '../../utils/auth';

import { signin, signup, head, savedMovies } from '../../utils/data';


function App() {
  const [movies, setMovies] = useState([]);
  const [loadingStatus, setLoadingStatus] = useState('state');
  const [loggedIn, setLoggedIn] = useState(0);
  const history = useHistory();

  function onSearchSubmit() {
    setLoadingStatus('loading');
    return moviesApi.getMovies()
      .then((movies) => {
        setMovies(movies);
        setLoadingStatus('state');
      })
      .catch((err) => {
        console.log(err);
        setLoadingStatus('error');
      })
  } 

  function onSavedSearchSubmit() {
    setLoadingStatus('loading');
    return moviesApi.getMovies()
      .then((movies) => {
        setMovies(movies);
        setLoadingStatus('state');
      })
      .catch((err) => {
        console.log(err);
        setLoadingStatus('error');
      })
  } 

  function signCheck() {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      auth.signCheck(jwt)
        .then((answer) => {
          if (answer) {
            setLoggedIn(1);
            console.log(loggedIn);
          }
        })
        .catch((error) => {
          setLoggedIn(2);
          console.log(error);
        });
    } 
  }

  function onSignin(email, password) {
    return auth.signin(email, password)
      .then(answer => {
        if (answer.token) {
          localStorage.setItem('jwt', answer.token);
          signCheck();
        }
      })
      .catch(error => console.log(error));
  }

  function onSignup(email, password) {
    return auth.signup(email, password)
      .then(answer => {
        if (answer.token) {
          localStorage.setItem('jwt', answer.token);
          signCheck();
        }
      })
      .catch(error => {
          console.log(error);
        }
      )
      .catch(error => console.log(error));
  }

  function onSaveMovie() {
    mainApi.addMovie();
  }
  

  function onUnsaveMovie() {
    mainApi.removeMovie();
  }
  
  useEffect(() => signCheck());

  if (loggedIn === 0) {
    return (<Preloader/>);
  }
  else {
    return (
      <div className="page">
        <Switch>
          <Route exact path="/">
            <Hero/>
            <About/>
            <Tech/>
            <Student/>
            <Foot/>
          </Route>
          <ProtectedRoute exact path="/movies" loggedIn={loggedIn}>
            <Head context={head}/>
            <Search onSubmit={onSearchSubmit}/>
            <MoviesCardList movies={movies} loadingStatus={loadingStatus}/>
            <Foot/>
          </ProtectedRoute>
          <ProtectedRoute exact path="/saved-movies" loggedIn={loggedIn}>
            <Head context={head}/>
            <Search/>
            <MoviesCardList data={savedMovies} onSaveMovie={onSaveMovie} onUnsaveMovie={onUnsaveMovie}/>
            <Foot/>
          </ProtectedRoute>
          <ProtectedRoute exact path="/profile" loggedIn={loggedIn}>
            <Head context={head}/>
            <Profile/>
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
    );
  }
}

export default App;
