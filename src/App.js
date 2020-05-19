import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './Style/app.scss';
import MovieFullInfo from "./components/MovieIFullInfoPage/MovieFullInfo";
import NotFound from "./components/NotFound/NotFound";
import Main from "./components/Main/Main";
import {MoviesProvider} from "./components/MoviesContext/MoviesContext";


function App() {


    return (
        <Router>
            <Switch>
                <MoviesProvider>
                    <Route exact path="/" component={Main}/>
                    <Route path="/movie/:id" component={MovieFullInfo}/>
                </MoviesProvider>
                <Route path="*" component={NotFound}/>
            </Switch>
        </Router>
    );
}

export default App;
