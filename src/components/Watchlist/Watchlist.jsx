import React from "react";
import MovieCard from "../MovieCard/MovieCard";

const Watchlist = ({ movies }) => {
  console.log(movies)
  return ( 
    <>
      <h1>Watchlist</h1>
      <ul>
        {movies.map((movie, index) => ( // Iterate over the movies array
          <li key={index}> {/* Provide a unique key for each list item */}
            <MovieCard movie={movie} /> {/* Pass each movie object to the MovieCard component */}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Watchlist;
