import MovieCard from "../MovieCard/MovieCard"
import axios from 'axios'




const SearchList = (props) => {

    const movie = props.foundTitle


    const handleAdd = () => {
        //event.preventDefault()
            let data = JSON.stringify({
            "Title": `${movie.Title}`,
            "Plot": `${movie.Plot}`,
            "Runtime": `${movie.Runtime}`,
            "Rated": `${movie.Rated}`,
            "Released": `${movie.Released}`,
            "Genre": `${movie.Genre}`,
            "Poster": `${movie.Poster}`,
            "Director": `${movie.Director}`,
            "Actors": `${movie.Actors}`,
            "Awards": `${movie.Awards}`,
            "watched": "false",
            });

            let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://3.90.140.106:3001/movies',
            headers: { 
                'Content-Type': 'application/json'
            },
            data : data
            };

            axios.request(config)
            .then((response) => {
            console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
            console.log(error);
            });
    }


    return (
        <>
        {movie === '' ? <br></br> :
        <>
        <MovieCard movie={movie}/>
        <button onClick={handleAdd}>Add To Watchlist</button>
        </>
    }
        </>
    )
}

export default SearchList