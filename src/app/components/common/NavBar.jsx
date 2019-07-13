import React, {Component} from 'react';
import {AppBar, Toolbar, IconButton, Typography, Button} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <AppBar position='static'>
                    <Toolbar>
                        <IconButton edge='start' color='inherit' aria-label='Menu' href={'#'}>
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant='h6'>
                            Lemon
                        </Typography>
                        <Button color='inherit' href='#'>Login</Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}