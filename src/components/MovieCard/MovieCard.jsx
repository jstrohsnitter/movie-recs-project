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
            <li>
            <input className="input-watched-checkbox" 
            type="checkbox" 
            checked={props.movie.watched}
            onChange={() => props.handleCheckboxWatched(props.movie._id, !props.movie.watched )}
            id="item1"
            />
            <label htmlFor="item1">{props.movie.watched} ? 'watched' : 'unseen' </label>
            </li>
          </ul>
        <button className="delete-button" onClick={() => props.deleteFromWatchList(props.movie._id)}>Delete</button>
      </div>
    </main>
  );
};

export default MovieCard;
