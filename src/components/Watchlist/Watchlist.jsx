import React from "react";

const Watchlist = ({ movies }) => {
  return ( 
    <>
      <h1>Watchlist</h1>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>
            <h2>{movie.title}</h2>
            <p>Actors: {movie.actors.join(", ")}</p>
            <p>Year: {movie.year}</p>
            <p>Rating: {movie.rating}</p>
            <p>Watched: {movie.watched ? "Yes" : "No"}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Watchlist;
