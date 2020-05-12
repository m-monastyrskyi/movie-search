import React, {useState} from 'react';
import SearchForm from "./components/SearchForm/SearchForm";
import Movies from "./components/Movies/Movies";
import {getMovieByTitle} from "./API/api";


function App() {
    const [movies, setMovies] = useState(null);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState('');

    const searchMovies = (title) => {
        console.log(`Search line: ${title}`);
        setLoading(true);
        setErrors('');
        getMovieByTitle(title)
            .then(data => {
                data.Response === "False" ? setErrors(data.Error) : setMovies(data);
                setLoading(false);
            });
    }

    return (
        <div style={{textAlign: "center"}}>
            <SearchForm handleSearch={searchMovies}/>
            {
                errors && <h1>{errors}</h1>
            }
            {
                !errors && !loading && movies && <Movies moviesList={movies}/>
            }
            {
                loading && <h1>Loading...</h1>
            }

        </div>
    );
}

export default App;
