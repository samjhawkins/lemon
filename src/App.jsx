import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './app/components/Home/Home';
import About from './app/components/About';
import NavBar from "./app/components/common/NavBar/NavBar";
import {Grid} from "@material-ui/core/index";

export default class App extends Component {
    render() {
        return (
            <Router>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    spacing={8}
                >
                    <Grid item xs={12}>
                        <NavBar/>
                    </Grid>
                    <Grid item xs={12}>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/about" component={About}/>
                            <Route render={() => <h1>Page not found</h1>}/>
                        </Switch>
                    </Grid>
                </Grid>
            </Router>
        )
    }
}