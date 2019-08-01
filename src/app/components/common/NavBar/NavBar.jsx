import React, {Component} from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography
} from '@material-ui/core/index';
import {Menu as MenuIcon} from '@material-ui/icons/index';
import ProfileMenu from "./ProfileMenu";
import Grid from "@material-ui/core/Grid";

export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            auth: true
        };
        this.handleClose = this.handleClose.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle() {
        this.setState({open: !this.state.open});
    }

    handleClose() {
        this.setState({open: false});
    }

    render() {

        return (
            <AppBar position='fixed'>
                <Toolbar>
                    <Grid justify={"space-between"} container>
                        <Grid item>
                            <IconButton edge='start' color='inherit' aria-label='Menu'>
                                <MenuIcon/>
                            </IconButton>
                            <Typography variant='h6' display={'inline'}>
                                Lemon
                            </Typography>
                        </Grid>
                        <Grid item>
                            <ProfileMenu
                                open={this.state.open}
                                auth={this.state.auth}
                                handleClose={this.handleClose}
                                handleToggle={this.handleToggle}
                            />
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        );
    }
}