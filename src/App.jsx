import React, { useState, useEffect } from 'react';
import './App.css';
import HomeSearch from '/src/components/HomeSearch.jsx';
import Watchlist from './components/Watchlist/Watchlist';
import NavBar from './components/NavBar/NavBar';
import * as movieService from './services/movieService'

const App = () => {
  const [NavBarState, setNavBarState] = useState('Home');
  const [movies, setMovies] = useState([]);

  const handleNavBar = (theChosenPage) => {
    setNavBarState(theChosenPage);
  };

  const renderPage = () => {
    switch (NavBarState) {
      case 'Home':
        return <HomeSearch />;
      case 'Watchlist':
        return <Watchlist movies={movies} />;
      default:
        return <HomeSearch />;
    }
  };

  useEffect(() => {
    const fetchDataForMovies = async () => { 
      const data = await movieService.getMoviesFromExpress()
      setMovies(data)
    }
    fetchDataForMovies()
  })
  , [];

  return (
    <>
      <NavBar handleNavBar={handleNavBar} />
      {renderPage()}
    </>
  );
}
export default App;
