import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {getMovieFromIMDBbyId} from "../../API/api";
import imgNotFound from "../../assets/nofound.jpg";
import FullDescriptionMeta from "../fullDescriptionMeta/FullDescriptionMeta";

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
                    {
                        movieInfo.Ratings.length > 0 && (
                            <div className="full-aside__ratings">
                                <h3 className="full-subtitle">
                                    Ratings:
                                </h3>
                                {
                                    movieInfo.Ratings.map((item, index) => <p
                                        key={index}>{item.Source}: {item.Value}</p>)
                                }
                            </div>
                        )
                    }
                </div>
                <div className="full-description">
                    <div className="full-description__title">
                        <h2>{movieInfo.Title}</h2>
                    </div>
                    <div className="full-description__caption">
                        <h2>Movie details</h2>
                    </div>
                    {
                        movieInfo.Plot && <FullDescriptionMeta title={"Overview"} meta={movieInfo.Plot}/>
                    }
                    {
                        movieInfo.Released && <FullDescriptionMeta title={"Release Date"} meta={movieInfo.Released}/>
                    }
                    {
                        movieInfo.Runtime && <FullDescriptionMeta title={"Runtime"} meta={movieInfo.Runtime}/>
                    }
                    {
                        movieInfo.Country && <FullDescriptionMeta title={"Country"} meta={movieInfo.Country}/>
                    }
                    {
                        movieInfo.Genre && <FullDescriptionMeta title={"Genres"} meta={movieInfo.Genre}/>
                    }
                    {
                        movieInfo.Director && <FullDescriptionMeta title={"Director"} meta={movieInfo.Director}/>
                    }
                    {
                        movieInfo.Writer && <FullDescriptionMeta title={"Writer"} meta={movieInfo.Writer}/>
                    }
                    {
                        movieInfo.Actors && <FullDescriptionMeta title={"Actors"} meta={movieInfo.Actors}/>
                    }
                    {
                        movieInfo.Production && <FullDescriptionMeta title={"Production"} meta={movieInfo.Production}/>
                    }
                    {
                        movieInfo.Language && <FullDescriptionMeta title={"Languages"} meta={movieInfo.Language}/>
                    }
                    {
                        movieInfo.Rated && <FullDescriptionMeta title={"Rated"} meta={movieInfo.Rated}/>
                    }


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