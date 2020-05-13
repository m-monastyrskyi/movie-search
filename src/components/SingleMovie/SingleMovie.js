import React from 'react';
import {Link} from 'react-router-dom';
import imgNotFound from '../../assets/nofound.jpg';


const SingleMovie = ({movie}) => {
    return (
        <div className="movie-card">

            <img src={movie.Poster !== "N/A" ? movie.Poster : imgNotFound} alt={movie.Title}/>

            <div className="movie-card__descriptions">
                <h2>{movie.Title}</h2>
                <p>
                    {movie.Year}
                </p>
                <p>
                    {movie.Type}
                </p>
                <Link to={`/movie/${movie.imdbID}`} className="btn">More info</Link>
            </div>
        </div>
    );
};

export default SingleMovie;