import React from 'react';
import {ClickAwayListener, Grow, Paper} from "@material-ui/core/index";
import {makeStyles} from "@material-ui/styles/index";

const useStyles = makeStyles(theme => ({
    paper: {
        width: '90%',
        minWidth: theme.spacing(60),
        margin: theme.spacing(6),
        marginTop: 0,
    },
}));

export const GrowPopperMenu = (props, ref) => {
    const classes = useStyles();
    const InputMenu = props.menuComponent;
    return (
        <Grow
            {...props.TransitionProps}
            style={{transformOrigin: props.placement === 'bottom' ? 'center top' : 'center bottom'}}
        >
            <React.Fragment>
                <ClickAwayListener onClickAway={props.handleClose}>
                    <Paper ref={ref} className={classes.paper}>
                        <InputMenu handleClose={props.handleClose}/>
                    </Paper>
                </ClickAwayListener>
            </React.Fragment>
        </Grow>
    );
};

export default React.forwardRef(GrowPopperMenu);