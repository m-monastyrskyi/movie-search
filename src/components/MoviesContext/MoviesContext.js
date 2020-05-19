import React, {useState, createContext} from "react";

export const MoviesContext = createContext();

export const MoviesProvider = (props) => {
    const [movies, setMovies] = useState(null);
    const [totalResults, setTotalResults] = useState(0);

    return (
        <MoviesContext.Provider value={[movies, setMovies, totalResults, setTotalResults]}>
            {
                props.children
            }
        </MoviesContext.Provider>
    )
}