import React from 'react';
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
        link: {
            textDecoration: "none",
        }
    }
));

export const UndecoratedLink = ({to, children}) => {
    const classes = useStyles();
    return (
        <Link to={to} className={classes.link}>
            {children}
        </Link>
    )

};

export default UndecoratedLink;