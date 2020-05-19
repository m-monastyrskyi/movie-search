import React, {useState, useContext, useEffect} from 'react';
import SearchForm from "../SearchForm/SearchForm";
import Movies from "../Movies/Movies";
import {getMovieByTitle} from "../../API/api";
import {MoviesContext} from "../MoviesContext/MoviesContext";


const Main = () => {

    const [movies, setMovies, totalResults, setTotalResults] = useContext(MoviesContext);

    const [searchLine, setSearchLine] = useState('');
    const [loading, setLoading] = useState(false);
    const [btnLoading, setBtnLoading] = useState(false);
    const [errors, setErrors] = useState('');

    useEffect(()=>{
        window.scrollTo(0, 0);
    },[]);
    const searchMovies = (title) => {
        console.log(`Search line: ${title}`);
        setSearchLine(title);
        setLoading(true);
        setErrors('');
        getMovieByTitle(title)
            .then(data => {
                    if (data.Response === "False") {
                        setErrors(data.Error)
                    } else {
                        setMovies(data.Search);
                        setTotalResults(data.totalResults);
                    }
                    setLoading(false);
                }
            );
    }
    const loadMoreMovies = () => {
        const currentPage = Math.floor(movies.length / 10 + 1);
        setBtnLoading(true);
        getMovieByTitle(searchLine, currentPage)
            .then(data => {
                data.Response === "False" ? setErrors(data.Error) : setMovies(prev => [...prev, ...data.Search]);
                setBtnLoading(false);
            });
    }
    return (
        <div className="container">
            <SearchForm handleSearch={searchMovies}/>
            {
                errors && <h1>{errors}</h1>
            }
            {
                !errors && !loading && movies && <>
                    <Movies moviesList={movies} moviesCount={totalResults}/>
                    {
                        movies.length < totalResults &&
                        <button className="load-more btn"
                                onClick={loadMoreMovies}>{btnLoading ? 'Loading...' : 'Load more...'}</button>
                    }
                </>
            }
            {
                loading && <h1>Loading...</h1>
            }

        </div>
    );
};

export default Main;

