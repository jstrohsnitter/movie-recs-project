import React, { useState, useEffect } from 'react';
import './App.css';
import Search from '/src/components/Search/Search.jsx';
import Watchlist from './components/Watchlist/Watchlist';
import NavBar from './components/NavBar/NavBar';
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
    const fetchMovies = async () => {
      try {
        const response = await fetch('http://3.90.140.106:3001/movies');
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <>
      <NavBar handleNavBar={handleNavBar} />
      {renderPage()}
    </>
  );
};

export default App;
