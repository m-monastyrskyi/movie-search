import React from 'react';
import SingleMovie from "../SingleMovie/SingleMovie";

const Movies = ({moviesList}) => {
    return (
        <>
            <h1>Found {moviesList.totalResults} movies</h1>
            {
                moviesList.Search.map((film, index) => <SingleMovie key={index} movie={film}/>)
            }
        </>
    );
};

export default Movies;