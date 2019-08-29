import React from 'react';
import {MenuList, MenuItem, Typography, Paper} from "@material-ui/core";
import UndecoratedLink from "../../UndecoratedLink/UndecoratedLink";
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    root: {
        width: '90%',
        minWidth: theme.spacing(60),
        margin: theme.spacing(6),
        marginTop: 0,
    },
    item: {
        backgroundColor: theme.color.white,
        justifyContent: 'center',
    },
}));

export const ProfileMenu = (props, ref) => {
    const classes = useStyles();
    return (
        <Paper ref={ref} className={classes.root}>
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
        </Paper>
    );
};

export default React.forwardRef(ProfileMenu);