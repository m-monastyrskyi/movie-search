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
            <div className="full">
                <div className="full-aside">
                    <div className="full-aside__poster">
                        <img src={movieInfo.Poster !== "N/A" ? movieInfo.Poster : imgNotFound} alt={movieInfo.Title}/>
                    </div>
                    <div className="full-aside__ratings">
                        <h3 className="full-subtitle">
                            Ratings:
                        </h3>
                        {
                            movieInfo.Ratings.map((item, index) => <p key={index}>{item.Source}: {item.Value}</p>)
                        }
                    </div>
                </div>
                <div className="full-description">
                    <div className="full-description__title">
                        <h2>{movieInfo.Title}</h2>
                    </div>
                    <div className="full-description__caption">
                        <h2>Movie details</h2>
                    </div>
                    <div className="full-description__meta">
                        <h2>Overview</h2>
                        <p>{movieInfo.Plot}</p>
                    </div>
                    <div className="full-description__meta">
                        <h2>Release Date</h2>
                        <p>{movieInfo.Released}</p>
                    </div>
                    <div className="full-description__meta">
                        <h2>Runtime</h2>
                        <p>{movieInfo.Runtime}</p>
                    </div>
                    <div className="full-description__meta">
                        <h2>Country</h2>
                        <p>{movieInfo.Country}</p>
                    </div>
                    <div className="full-description__meta">
                        <h2>Genres</h2>
                        <p>{movieInfo.Genre}</p>
                    </div>
                    <div className="full-description__meta">
                        <h2>Director</h2>
                        <p>{movieInfo.Director}</p>
                    </div>
                    <div className="full-description__meta">
                        <h2>Writer</h2>
                        <p>{movieInfo.Writer}</p>
                    </div>
                    <div className="full-description__meta">
                        <h2>Actors</h2>
                        <p>{movieInfo.Actors}</p>
                    </div>
                    <div className="full-description__meta">
                        <h2>Production</h2>
                        <p>{movieInfo.Production}</p>
                    </div>
                    <div className="full-description__meta">
                        <h2>Languages</h2>
                        <p>{movieInfo.Language}</p>
                    </div>
                    <div className="full-description__meta">
                        <h2>Rated</h2>
                        <p>{movieInfo.Rated}</p>
                    </div>

                </div>
            </div>


            <br/>
            <br/>
            <br/>


            <Link to={"/"} className="btn white">Back</Link>
        </div>
    );

    return <h1>Loading...</h1>

};

export default MovieFullInfo;