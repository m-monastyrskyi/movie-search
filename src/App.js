import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './Style/app.scss';
import MovieFullInfo from "./components/MovieIFullInfoPage/MovieFullInfo";
import NotFound from "./components/NotFound/NotFound";
import Main from "./components/Main/Main";


function App() {




    return (
        <Router>
            <Switch>
                <Route exact path="/" >
                    <Main/>
                </Route>
                <Route path="/movie/:id" component={MovieFullInfo}/>
                <Route path="*" component={NotFound}/>
            </Switch>
        </Router>
    );
}

export default App;
