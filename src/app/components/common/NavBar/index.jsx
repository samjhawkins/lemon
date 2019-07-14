import React, {Component} from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
} from '@material-ui/core/index';
import {Menu as MenuIcon} from '@material-ui/icons/index';
import ProfileMenu from "./ProfileMenu";

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

    handleClose(){
        this.setState({open: false});
    }

    render() {

        return (
            <div>
                <AppBar position='static'>
                    <Toolbar>
                        <IconButton edge='start' color='inherit' aria-label='Menu' href={'/'}>
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant='h6'>
                            Lemon
                        </Typography>
                        <ProfileMenu
                            open={this.state.open}
                            auth={this.state.auth}
                            handleClose={this.handleClose}
                            handleToggle={this.handleToggle}
                        />
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}