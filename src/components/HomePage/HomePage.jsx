import './HomePage.css';

const HomePage = () => {
    return (
    <div className="home-container-content">
        <h1>Welcome to the Watchlist App!</h1>
        <h2>To add a movie to your Watchlist:</h2>
        <ul>
            <li>Go to 'Search' and enter the imdbID of the moive you would like to add</li>
            <li>Once you have found your title, click 'Add To Watchlist' to add it to your Watchlist</li>
            <li>When you get around to watching it, click the 'unseen' box to mark it was watched</li>
        </ul>
        <h2>To find an imdbID:</h2>
        <ul>
            <li>Navigate to IMDB and search for a movie you would like to add to your Watchlist</li>
            <li>After selecting your movie, look at the URL, the ID will be a number listed after /title/, prefaced with tt </li>
            <li>Copy the number including the 'tt'. For example, Johnnie To's classic 'Election' has the imdbID of 'tt0434008'</li>
        </ul>
        <div className='homepage-image-div-1'>
        <img src='https://imgur.com/u90UppD.png'/>
        </div>
        <div className='hpmepage-image-div-2'>
        <img src='https://m.media-amazon.com/images/M/MV5BYWQwNjVmYjctN2NjYy00MzU5LWJkYWQtYmIyNDZhMjRjNDczXkEyXkFqcGc@._V1_QL75_UY562_CR14,0,380,562_.jpg'/>
        </div>
    </div>
    )
}

export default HomePage