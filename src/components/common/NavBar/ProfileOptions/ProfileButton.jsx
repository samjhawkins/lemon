import React, {Component} from 'react';
import {Button, ClickAwayListener, Grow, MenuItem, MenuList, Paper, Popper} from "@material-ui/core/index";
import {PermIdentity as PermIdentityIcon} from "@material-ui/icons/index";
import ProfileMenu from "./ProfileMenu";

export default class ProfileButton extends Component {
    constructor(props) {
        super(props);
        this.anchorRef = React.createRef();
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose(event) {
        if (this.anchorRef.current && this.anchorRef.current.contains(event.target)) {
            return null;
        }
        this.props.handleClose();
    }

    render() {
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
                                    <ProfileMenu
                                        handleClose={this.handleClose}
                                    />
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </React.Fragment>
        )
    }
}