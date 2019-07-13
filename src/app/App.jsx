import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route render={() => <h1>Page not found</h1>}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}