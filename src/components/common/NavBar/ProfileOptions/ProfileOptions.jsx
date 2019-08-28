import React from 'react';
import {Button, useMediaQuery} from "@material-ui/core/index";
import ProfileButton from "./ProfileButton";
import useTheme from "@material-ui/core/styles/useTheme";
import ProfileMenu from "./ProfileMenu";

export const ProfileOptions = props => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('xs'));
    if (props.auth) {
        if(matches){
            return (
                <ProfileMenu
                    handleClose={props.handleClose}
                />
            );
        }
        return (
            <ProfileButton
                open={props.open}
                handleClose={props.handleClose}
                handleToggle={props.handleToggle}
            />
        );
    }
    return (
        <Button variant="contained" href='/'>
            Login
        </Button>
    );
};

export default ProfileOptions;