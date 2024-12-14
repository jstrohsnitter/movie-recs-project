import React from "react";
import "./MovieCard.css";

const MovieCard = (props) => {
  console.log("MovieCard.jsx: " + props.deleteFromWatchList)
  return (
      <main className="card">
        <img src={props.movie.Poster} alt="movie poster" />
      {/* {console.log(props.movie)} */}
      <div className="card-content">
        <h2>{props.movie.Title}</h2>
          <ul className="movieInfo">
            <li>{props.movie.Actors}</li>
            <li>{props.movie.Plot}</li>
            <li>{props.movie.Year}</li>
            <li>{props.movie.Genre}</li>
            <li>{props.movie.Runtime}</li>
            <li>{props.movie._id}</li>
          </ul>
        <button onClick={() => props.deleteFromWatchList(props.movie._id)}>Delete</button>
      </div>
    </main>
  );
};

export default MovieCard;
