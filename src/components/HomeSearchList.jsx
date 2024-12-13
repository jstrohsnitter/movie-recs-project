import MovieCard from "./MovieCard/MovieCard"
import axios from 'axios'




const HomeSearchList = (props) => {

    const movie = props.foundTitle


    const handleAdd = () => {
        //event.preventDefault()
            let data = JSON.stringify({
            "title": `${movie.Title}`,
            "plot": `${movie.Plot}`,
            "runtime": `${movie.Runtime}`,
            "rated": `${movie.Rated}`,
            "released": `${movie.Released}`,
            "genre": `${movie.Genre}`,
            "poster": `${movie.Poster}`,
            "director": `${movie.Director}`,
            "actors": `${movie.Actors}`,
            "awards": `${movie.Awards}`,
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

export default HomeSearchList