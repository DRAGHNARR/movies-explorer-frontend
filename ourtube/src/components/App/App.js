import { Route, Switch } from 'react-router-dom';
import './App.css';

import Hero from '../Hero/Hero';
import About from '../About/About';
import Tech from '../Tech/Tech';
import Student from '../Student/Student';
import Foot from '../Foot/Foot';

import Head from '../Head/Head';
import Search from '../Search/Search';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Profile from '../Profile/Profile';
import SignForm from '../SignForm/SignForm';

import Except from '../Except/Except';

import { signin, signup, head, movies, savedMovies } from '../../utils/data';

function App() {
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
        <Route exact path="/movies">
          <Head context={head}/>
          <Search/>
          <MoviesCardList data={movies}/>
          <Foot/>
        </Route>
        <Route exact path="/saved-movies">
          <Head context={head}/>
          <Search/>
          <MoviesCardList data={savedMovies}/>
          <Foot/>
        </Route>
        <Route exact path="/profile">
          <Profile/>
        </Route>
        <Route exact path="/signin">
          <SignForm context={signin}/>
        </Route>
        <Route exact path="/signup">
          <SignForm context={signup}/>
        </Route>
        <Route>
          <Except/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
