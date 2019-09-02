import React from 'react';
import {Button, useMediaQuery} from "@material-ui/core/index";
import PopperMenu from "../Menu/PopperMenu";
import ButtonMenu from "../Menu/ButtonMenu";
import useTheme from "@material-ui/core/styles/useTheme";
import {PermIdentity as PermIdentityIcon} from "@material-ui/icons/index";
import ProfileMenu from "./ProfileMenu";

export const ProfileOptions = props => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('xs'));
    if (matches) {
        return (
            <ButtonMenu
                menuComponent={ProfileMenu}
                name={"Account Details"}
                open={props.open}
                handleClose={props.handleClose}
                handleToggle={props.handleToggle}
            />
        );
    }
    return (
        <PopperMenu
            buttonIcon={PermIdentityIcon}
            menuComponent={ProfileMenu}
            open={props.open}
            handleClose={props.handleClose}
            handleToggle={props.handleToggle}
        />
    );
};

export default ProfileOptions;