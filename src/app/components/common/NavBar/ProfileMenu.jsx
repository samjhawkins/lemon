import React, {Component} from 'react';
import {Button, ClickAwayListener, Grow, MenuItem, MenuList, Paper, Popper} from "@material-ui/core";
import {PermIdentity as PermIdentityIcon} from "@material-ui/icons";

export default class ProfileMenu extends Component{
    constructor(props) {
        super(props);
        this.anchorRef = React.createRef();
        this.handleClose = this.handleClose.bind(this);
    }
    handleClose(event) {
        if (this.anchorRef.current && this.anchorRef.current.contains(event.target)) {
            return;
        }
        this.props.handleClose();
    }
    render() {
        if (this.props.auth) {
            return (
                <React.Fragment>
                    <Button
                        ref={this.anchorRef}
                        aria-controls="menu-list-grow"
                        aria-haspopup="true"
                        onClick={this.props.handleToggle}
                        variant="contained"
                    >
                        <PermIdentityIcon/>
                    </Button>
                    <Popper
                        open={this.props.open}
                        anchorEl={this.anchorRef.current}
                        transition disablePortal
                    >
                        {({TransitionProps, placement}) => (
                            <Grow
                                {...TransitionProps}
                                style={{transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'}}
                            >
                                <Paper id="menu-list-grow">
                                    <ClickAwayListener onClickAway={this.handleClose}>
                                        <MenuList>
                                            <MenuItem onClick={this.handleClose}>My account</MenuItem>
                                            <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Grow>
                        )}
                    </Popper>
                </React.Fragment>
            );
        }
        return (
            <Button variant="contained" href='/'>
                Login
            </Button>
        );
    }
}