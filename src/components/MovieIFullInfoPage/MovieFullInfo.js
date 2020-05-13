import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {getMovieFromIMDBbyId} from "../../API/api";
import imgNotFound from "../../assets/nofound.jpg";

const MovieFullInfo = (props) => {
    const id = props.match.params.id;
    const [movieInfo, setMovieInfo] = useState(null);
    const [errors, setErrors] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getMovieFromIMDBbyId(id)
            .then(data => {
                    if (data.Response === "False") {
                        setErrors(data.Error)
                    } else {
                        setMovieInfo(data);
                    }
                    setLoading(false);
                }
            );
    }, [])

    if (errors) return <h1>{errors}</h1>;

    if (!loading && movieInfo) return (<div className="container">
            <img src={movieInfo.Poster !== "N/A" ? movieInfo.Poster : imgNotFound} alt={movieInfo.Title}/>
            <p>{movieInfo.Title}</p>
            <p>{movieInfo.Year}</p>
            <p>{movieInfo.Country}</p>
            <p>{movieInfo.Production}</p>
            <p>{movieInfo.Rated}</p>
            <p>{movieInfo.Released}</p>
            <p>{movieInfo.Runtime}</p>
            <p>{movieInfo.Genre}</p>
            <p>{movieInfo.Director}</p>
            <p>{movieInfo.Actors}</p>
            <p>{movieInfo.Plot}</p>
            <h2>Ratings:</h2>
            {
                movieInfo.Ratings.map((item, index)=> <p key={index}>{item.Source} {item.Value}</p>)
            }


            <Link to={"/"} className="btn white">Back</Link>
        </div>
    );

    return <h1>Loading...</h1>

};

export default MovieFullInfo;