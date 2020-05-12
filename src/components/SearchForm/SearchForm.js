import React, {useState} from 'react';

const SearchForm = ({handleSearch}) => {
const [searchString, setSearchString] = useState('');
const [movies, setMovies] = useState(null);

    const handleSubmit = (e, title) => {
        e.preventDefault();
        if (typeof handleSearch === 'function') {
            searchString.length > 1 ? handleSearch(title) : alert('Enter movie title');
        }
    }

    return (
        <form onSubmit={e => handleSubmit(e, searchString)}>
            <p>Enter movie title</p>
            <input type="text" placeholder="f.e. Star wars" value={searchString}
                   onChange={e => setSearchString(e.target.value)}/>
            <input type="submit" value="Search"/>
        </form>
    );
};

export default SearchForm;