import React from 'react';
import {MenuList, MenuItem, Typography} from "@material-ui/core";
import UndecoratedLink from "../../UndecoratedLink/UndecoratedLink";
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    item: {
        backgroundColor: theme.color.white,
        justifyContent: 'center',
    }
}));

export const ProfileMenu = (props) => {
    const classes = useStyles();
    return (
        <MenuList>
            <UndecoratedLink to={"/myAccount"}>
                <MenuItem onClick={props.handleClose} className={classes.item}>
                    <Typography color={"primary"}>
                        My Account
                    </Typography>
                </MenuItem>
            </UndecoratedLink>
            <UndecoratedLink to={"/signOut"}>
                <MenuItem onClick={props.handleClose} className={classes.item}>
                    <Typography color={"secondary"}>
                        Sign Out
                    </Typography>
                </MenuItem>
            </UndecoratedLink>
        </MenuList>
    );
};

export default ProfileMenu;