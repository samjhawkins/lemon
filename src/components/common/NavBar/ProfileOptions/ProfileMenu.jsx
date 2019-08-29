import React from 'react';
import {MenuList, MenuItem, Typography, Paper} from "@material-ui/core";
import UndecoratedLink from "../../UndecoratedLink/UndecoratedLink";
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        margin: theme.spacing(4)
    },
    item: {
        backgroundColor: theme.color.white,
    },
}));

export const ProfileMenu = (props, ref) => {
    const classes = useStyles();
    return (
        <Paper ref={ref} className={classes.root}>
            <MenuList>
                <MenuItem onClick={props.handleClose} className={classes.item}>
                    <UndecoratedLink to={"/myAccount"}>
                        <Typography color={"primary"}>
                            My Account
                        </Typography>
                    </UndecoratedLink>
                </MenuItem>
                <MenuItem onClick={props.handleClose} className={classes.item}>
                    <UndecoratedLink to={"/signOut"}>
                        <Typography color={"secondary"}>
                            Sign Out
                        </Typography>
                    </UndecoratedLink>
                </MenuItem>
            </MenuList>
        </Paper>
    );
};

export default React.forwardRef(ProfileMenu);