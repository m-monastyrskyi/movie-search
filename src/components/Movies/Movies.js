import React from 'react';
import SingleMovie from "../SingleMovie/SingleMovie";

const Movies = ({moviesList, moviesCount}) => {
    return (
        <>
            <h1 className="movies-count">Found {moviesCount} movies</h1>
            <div className="movies">
            {
                moviesList.map((film, index) => <SingleMovie key={index} movie={film}/>)
            }
            </div>
        </>
    );
};

export default Movies;