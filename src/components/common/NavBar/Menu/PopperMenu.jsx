import React, {Component} from 'react';
import {Button, Popper} from "@material-ui/core/index";
import GrowPopperMenu from "./GrowPopperMenu";

export default class PopperMenu extends Component {
    constructor(props) {
        super(props);
        this.anchorRef = React.createRef();
    }

    componentWillUnmount() {
        if(this.props.open) {
            this.props.handleClose();
        }
    }

    render() {
        const ButtonIcon = this.props.buttonIcon;
        return (
            <React.Fragment>
                <Button
                    ref={this.anchorRef}
                    aria-controls="menu-list-grow"
                    aria-haspopup="true"
                    onClick={this.props.handleToggle}
                    variant="contained"
                >
                    <ButtonIcon/>
                </Button>
                <Popper
                    open={this.props.open}
                    anchorEl={this.anchorRef && this.anchorRef.current}
                    transition disablePortal
                >
                    <GrowPopperMenu
                        menuComponent={this.props.menuComponent}
                        handleClose={this.props.handleClose}
                    />
                </Popper>
            </React.Fragment>
        )
    }
}