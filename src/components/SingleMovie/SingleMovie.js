import React from 'react';

const SingleMovie = ({movie}) => {
    return (
        <div className="movie-card">
            <div className="movie-card__info">
                <h2 className="movie-card__title">{movie.Title}</h2>
                <span className="movie-card__year">{movie.Year}</span>
            </div>
            <div className="movie-card__poster">
                <img src={movie.Poster !== "N/A" ? movie.Poster : "http://placehold.jp/300x440.png"} alt={movie.Title}/>
            </div>

        </div>
    );
};

export default SingleMovie;