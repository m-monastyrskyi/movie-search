import React, {useState} from 'react';
import './App.css';

const getMovieFromIMDBbyId = (id) => {
    fetch(`http://www.omdbapi.com/?apikey=aeb57972&i=${id}`)
        .then(data => data.json())
        .then(data => console.log(data))
}

const getMovieByTitle = async (title,page=1) => {
    //"Title":"Avengers: Endgame"
    // "Year":"2019"
    // "imdbID":"tt4154796"
    // "Type":"movie"
    // "Poster": img url

    let response = await fetch(`https://movie-database-imdb-alternative.p.rapidapi.com/?page=${page}&r=json&s=${title}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
            "x-rapidapi-key": "84193c2eb6msh74e8ee46ce8934dp1ad6aajsn1d058590a92f"
        }
    });
    let result = await response.json();


    return result.Search;
}

function App() {
    const [searchString, setSearchString] = useState('');
    const [movies, setMovies] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e, title) => {
        e.preventDefault();
        getMovieByTitle(searchString).then(data => setMovies(data));
    }


    return (
        <div className="App">
            <form onSubmit={e => handleSubmit(e, searchString)}>
                <p>Enter movie title</p>
                <input type="text" placeholder="f.e. Star wars" value={searchString}
                       onChange={e => setSearchString(e.target.value)}/>
                <input type="submit" value="Search"/>
            </form>
            {
                !movies ? <h1>Loading...</h1> : <>
                <h1>Found {movies.length} films</h1>
                    <ul>
                        {
                            movies.map((film,index) => <li key={index}>
                                <h2>Title: {film.Title}</h2>
                                <h2>Year: {film.Year}</h2>
                                <img src={film.Poster} />
                            </li>)
                        }
                    </ul>
                </>
            }

        </div>
    );
}

export default App;
