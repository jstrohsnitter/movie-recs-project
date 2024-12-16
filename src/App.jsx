import React, { useState, useEffect } from 'react';
import './App.css';
import Search from '/src/components/Search/Search.jsx';
import Watchlist from './components/Watchlist/Watchlist';
import NavBar from './components/NavBar/NavBar';
import * as movieService from './services/movieService'
import HomePage from './components/HomePage/HomePage';


const App = () => {
const API_BASE_URL = 'http://3.90.140.106:3001/movies';
const [navBarState, setNavBarState] = useState('Home');
const [movies, setMovies] = useState([]);

const handleNavBar = (theChosenPage) => {
  setNavBarState(theChosenPage);
};


const fetchDataForMovies = async () => { 
  const data = await movieService.getMoviesFromExpress()
  setMovies(data)
}
  
  
const deleteFromWatchList = async (movieId) => {
  try {
    const response = await fetch(API_BASE_URL + '/' + movieId, {
      method: 'delete'
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`) // <3 - Checks for HTTP response status before attempting to parse it as JSON.
    }
    await response.json(); 
    fetchDataForMovies()
  } catch (error) {
    console.error('deleteFromWatchList returning error: ', error) //Console 'logs' or 'records' information
    return {error: error.message} //An actionable step due to an error to control the flow of program / resolve errors or other condiitons that affect program execution.
  }
}

// console.log(deleteFromWatchList)

const handleCheckboxWatched = async (movieId, watchedStatus) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${movieId}`, {
      method: 'PUT',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        watched: watchedStatus
      })
    })
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    fetchDataForMovies();
    await response.json();
    } catch (error) {
      console.error('Error updating movie watched status: ', error)
    }
}

const renderPage = () => {
switch (navBarState) {
  case 'Search':
return <Search />;
case 'Watchlist':
  return <Watchlist movies={movies} deleteFromWatchList={deleteFromWatchList} handleCheckboxWatched={handleCheckboxWatched}/>;
default:
    return <HomePage />;
  }
};
 
useEffect(() => {
  fetchDataForMovies()
}
, []);
 
return (
  <>
    <NavBar handleNavBar={handleNavBar} />
    {renderPage()}
  </>
);
}

export default App;


      // Refactored fetchMovies to be a standalone function
      // const fetchMovies = async () => {
      //   try {
      //     const response = await fetch(API_BASE_URL);
      //     const data = await response.json();
      //     setMovies(data);
      //     console.log(data);
      //   } catch (error) {
      //     console.error('Error fetching movies:', error);
      //   }