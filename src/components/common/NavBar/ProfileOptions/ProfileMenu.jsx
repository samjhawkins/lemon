import React, {Component} from 'react';
import {MenuList, MenuItem, Typography} from "@material-ui/core";
import UndecoratedLink from "../../UndecoratedLink/UndecoratedLink";

export default class ProfileMenu extends Component {
    render() {
        return (
            <MenuList>
                <MenuItem onClick={this.props.handleClose}>
                    <UndecoratedLink to={"/myAccount"}>
                        <Typography color={"primary"}>
                            My Account
                        </Typography>
                    </UndecoratedLink>
                </MenuItem>
                <MenuItem onClick={this.props.handleClose}>
                    <UndecoratedLink to={"/signOut"}>
                        <Typography color={"secondary"}>
                            Sign Out
                        </Typography>
                    </UndecoratedLink>
                </MenuItem>
            </MenuList>
        )
    }
}