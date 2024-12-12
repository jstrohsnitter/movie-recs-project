import React from "react";
import "./MovieCard.css";

const MovieCard = (props) => {
  return (
      <main className="card">
        <img src={props.movie.Poster} alt="movie poster" />
      {/* {console.log(props.movie)} */}
      <div className="card-content">
        <h2>{props.movie.Title}</h2>
        <p>
            <ul className="movieInfo">
                <li>{props.movie.Actors}</li>
                <li>{props.movie.Plot}</li>
                <li>{props.movie.Year}</li>
                <li>{props.movie.Genre}</li>
                <li>{props.movie.Runtime}</li>
            </ul>
            </p>

      </div>

    </main>
  );
};

export default MovieCard;
