import React, {useContext, useState} from 'react';
import {MoviesContext} from "../MoviesContext/MoviesContext";

const SearchForm = ({handleSearch}) => {
    const [searchString, setSearchString] = useState('');
    const [classes, setClasses] = useState("form-center");
    const [movies] = useContext(MoviesContext);

    const handleSubmit = (e, title) => {
        e.preventDefault();
        if (typeof handleSearch === 'function') {
            searchString.length > 1 ? handleSearch(title) : alert('Enter movie title');
        }
        setClasses("form-top");
    }

    return (
        <form className={movies ? "form-top" : classes} onSubmit={e => handleSubmit(e, searchString)}>
            <label className={"form-label"} htmlFor={"search"}>Movie title?</label>
            <input id={"search"}
                   type="text"
                   placeholder="e.g. Star wars"
                   value={searchString}
                   className={"form-input"}
                   onChange={e => setSearchString(e.target.value)}
            />
        </form>
    );
};

export default SearchForm;