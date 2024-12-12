Movie recommendation (movie api)

User story:
I want to be able to search for movies by title or by genre.
I want to be able to add movie from search to my watchlist with a click of a button.
I want to be able to navigate to and view my watch list.
I want to be to able to ‘check-off’ from my watch list movies I have already seen.

Components:
Home page - search third party API
Features to have:
Search functionality - returns movies by genres or names
Schema: list of movies we have seen
Data to extract from third party api results:
** Title, rating, runtime, genre, year, director, actors: (first three), plot, awards, watched/unwatched **
(?) redbox functionality - populates results near you by zip code if a Redbox is holding your film
Interests
Miles: Authentication,
Justin: Authentication,
Abdullah: Authentication,

Functionality -- 
1. have a user search for movies by title or by genre (React Home Page Component)
- Search functionality making a call to the OMDb API (React Search Bar Component)
- this call will return a specific movie (React State Variable within the search bar Search Results Component)
- the call will display a returned movie on a movie card (React component)


2. user will be able to add movie from search to my watchlist with a click of a button.




React Skeleton
1. Home Page Component
2. Search Bar Component
3. Nav Bar with two options -- Home Page/Watchlist 
4. Search Result List
5. Watchlist - Hearder that says watchlist, items of data listed out in cards
6. Movie card component, search result card will have a button that sends data from the api call to the data base 

Running To-Do
- movie card component -- priority for for finishing the watchlist and home(search)
- deploy to AWS
- service module
- 


Wednesday
-Abdullah -- MVC set up, communication w database, schema set up (Complete 12/12)
-Miles -- form to communicate with our database and API

Thursday
* Database with Schema built by 0900 (Completed 12/12)

* Watchlist Component -- Hearder that says watchlist, items of data listed out in cards by 0900 ** will update when card component is integrated ONGOING


* Home Componenet -- calls to api -- search bar component, if i can -> render search results by 0900 ONGOING

Thursday Day Work
* Search results rendered -> search results added to watchlist 


Friday
-Deploy to AWS
Saturday & Sunday

Monday



Tuesday
-CSS/Styling Finish 1500
-Deploy AWS

Wednesday --SUBMIT
-Rehearsal 