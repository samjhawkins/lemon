import React from 'react';
import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
        link: {
            textDecoration: "none",
        }
    }
));

const LinkedButton = ({to, text, size, colour}) => {
    const classes = useStyles();
    return (
        <Link to={to} className={classes.link}>
            <Button size={size} variant="contained" color={colour || undefined}>
                {text}
            </Button>
        </Link>
    );
}

export default LinkedButton;