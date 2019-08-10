import React from 'react';
import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";

const LinkedButton = ({to, text, size, colour}) => (
    <Link to={to}>
        <Button size={size} variant="contained" color={colour || undefined}>
            {text}
        </Button>
    </Link>
);

export default LinkedButton;