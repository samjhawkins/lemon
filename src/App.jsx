import React, {Component} from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import NavBar from './components/common/NavBar/NavBar';
import {Grid, TableCell} from '@material-ui/core/index';
import renderRoutes from './routes/renderRoutes'

export class App extends Component {
    render() {
        const auth = false;
        return (
            <Router>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <NavBar/>
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

export default App;