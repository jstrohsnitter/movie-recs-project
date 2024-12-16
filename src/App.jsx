import React, { useState, useEffect } from 'react';
import './App.css';
import Search from '/src/components/Search/Search.jsx';
import Watchlist from './components/Watchlist/Watchlist';
import NavBar from './components/NavBar/NavBar';
import * as movieService from './services/movieService'
import HomePage from './components/HomePage/HomePage';


const App = () => {
  const [NavBarState, setNavBarState] = useState('Home');
  const [movies, setMovies] = useState([]);

  const handleNavBar = (theChosenPage) => {
    setNavBarState(theChosenPage);
  };

  const renderPage = () => {
    switch (NavBarState) {
      case 'Search':
        return <Search />;
      case 'Watchlist':
        return <Watchlist movies={movies} />;
      default:
        return <HomePage />;
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
