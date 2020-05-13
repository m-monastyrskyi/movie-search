import React, {useState} from 'react';

const SearchForm = ({handleSearch}) => {
    const [searchString, setSearchString] = useState('');
    const [classes, setClasses] = useState("form-center");

    const handleSubmit = (e, title) => {
        e.preventDefault();
        if (typeof handleSearch === 'function') {
            searchString.length > 1 ? handleSearch(title) : alert('Enter movie title');
        }
        setClasses("form-top");
    }

    return (
        <form className={classes} onSubmit={e => handleSubmit(e, searchString)}>
            <label className={"form-label"}>Movie title?</label>
            <input type="text"
                   placeholder="e.g. Star wars"
                   value={searchString}
                   className={"form-input"}
                   onChange={e => setSearchString(e.target.value)}/>
        </form>
    );
};

export default SearchForm;