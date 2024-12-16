import React from "react";
import MovieCard from "../MovieCard/MovieCard";


const Watchlist = ({ movies, deleteFromWatchList, handleCheckboxWatched}) => {
  // console.log("Watchlist.jsx: " + deleteFromWatchList)
  // console.log("Watchlist.jsx: " + handleCheckboxWatched)
  
    return ( 
    <>
      <h1>Watchlist</h1>
      <ul>
        {movies.map((movie, index) => ( // Iterate over the movies array
          <li key={index}> {/* Provide a unique key for each list item */}
            <MovieCard movie={movie} deleteFromWatchList={deleteFromWatchList} handleCheckboxWatched={handleCheckboxWatched} /> {/* Pass each movie object to the MovieCard component */}
            {/* <button className="delete-button" onClick={() => props.deleteFromWatchList(props.movie._id)}>Delete</button> */}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Watchlist;
