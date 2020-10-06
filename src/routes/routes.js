import React from "react"
import { Route, Router, Switch, Redirect } from 'react-router-dom';

import RepositoryList from "../RepositoryList";
import RepositoryDetails from "../RepositoryDetails";
import history from "./history";
import Header from "../Header";
import FavoriteRepos from "../FavoriteRepos";

const Routes = () => {
    return (
        <Router history={history}>
            <Header />
            <Switch>
                <Route exact path="/repos" component={RepositoryList} />
                <Route exact path="/favorite-repos" component={FavoriteRepos} />
                <Route exact path="/repo-details" component={RepositoryDetails} />
                <Redirect from="/" to={"/repos"} />
            </Switch>
        </Router>
    )
}

export default Routes;