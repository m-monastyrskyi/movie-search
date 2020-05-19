import React, {useState, createContext} from "react";

export const MoviesContext = createContext();

export const MoviesProvider = (props) => {
    const [movies, setMovies] = useState(null);
    const [totalResults, setTotalResults] = useState(0);
    const [searchLine, setSearchLine] = useState('');

    return (
        <MoviesContext.Provider value={[movies, setMovies, totalResults, setTotalResults, searchLine, setSearchLine]}>
            {
                props.children
            }
        </MoviesContext.Provider>
    )
}