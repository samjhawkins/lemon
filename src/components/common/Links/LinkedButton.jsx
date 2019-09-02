import React from 'react';
import {Button} from "@material-ui/core/index";
import UndecoratedLink from "./UndecoratedLink";

const LinkedButton = ({to, text, size, colour}) => {
    return (
        <UndecoratedLink to={to}>
            <Button size={size} variant={"contained"} color={colour || undefined}>
                {text}
            </Button>
        </UndecoratedLink>
    );
}

export default LinkedButton;