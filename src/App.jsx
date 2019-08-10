import React, {Component} from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import NavBar from './components/common/NavBar/NavBar';
import {Grid} from '@material-ui/core/index';
import renderRoutes from './routes/renderRoutes'

export default class App extends Component {
    render() {
        const auth = true;
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
                            {renderRoutes(auth)}
                        </Switch>
                    </Grid>
                </Grid>
            </Router>
        )
    }
}