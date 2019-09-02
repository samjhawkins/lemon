import React from 'react';
import {Button, Collapse, Paper} from "@material-ui/core/index";
import {ArrowDropDownSharp, ArrowDropUpSharp} from "@material-ui/icons/index";

export const ButtonMenu = props => {
    const InputMenu = props.menuComponent;
    return (
        <div>
            <Button
                onClick={props.handleToggle}
                variant="contained"
            >
                {props.name}
                {props.open ? <ArrowDropUpSharp/> : <ArrowDropDownSharp/> }
            </Button>
            <Collapse in={props.open}>
                <Paper>
                    <InputMenu handleClose={props.handleClose}/>
                </Paper>
            </Collapse>
        </div>
    );
}

export default ButtonMenu;