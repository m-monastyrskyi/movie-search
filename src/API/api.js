export const getMovieFromIMDBbyId = async (id) => {
    let response = await fetch(`https://www.omdbapi.com/?apikey=aeb57972&i=${id}&plot=full`);
    let result = await response.json();

    //console.log(result);
    return result;
}

export const getMovieByTitle = async (title, page = 1) => {
//console.log(`URL: https://movie-database-imdb-alternative.p.rapidapi.com/?page=${page}&r=json&s=${title}`);
    let response = await fetch(`https://movie-database-imdb-alternative.p.rapidapi.com/?page=${page}&r=json&s=${title}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
            "x-rapidapi-key": "aac17277c6mshe4ec2a90554d2a2p17d16fjsn3c2dea417205"
        }
    });
    let result = await response.json();

    //  console.log(result);
    return result;
}