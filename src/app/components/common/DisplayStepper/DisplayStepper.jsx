import React, {Component} from 'react';
import {
    MobileStepper,
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardMedia,
    CardContent,
    Typography
} from "@material-ui/core";
import {KeyboardArrowLeft, KeyboardArrowRight} from '@material-ui/icons';

import monastery from '../../../../images/monastery.png';
import sunsetSpin from '../../../../images/sunsetSpin.png';
import walkway from '../../../../images/walkway.png';

const tutorialSteps = [{
    label: 'Monastery',
    imgPath: monastery
}, {
    label: 'Sunset',
    imgPath: sunsetSpin
}, {
    label: 'Walkway',
    imgPath: walkway
}];

export default class TextMobileStepper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeStep: 0,
            steps: tutorialSteps
        };
        this.handleNext = this.handleNext.bind(this);
        this.handleBack = this.handleBack.bind(this);
    }

    handleNext() {
        const {steps, activeStep} = this.state;
        const updatedStep = (activeStep + 1) % steps.length;
        this.setState({
            activeStep: updatedStep
        });
    }

    handleBack() {
        const {steps, activeStep} = this.state;
        const updatedStep = (activeStep + steps.length - 1) % steps.length;
        this.setState({
            activeStep: updatedStep
        });
    }

    render() {
        const {steps, activeStep} = this.state;
        return (
            <Card raised>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt={steps[activeStep].label}
                        image={steps[activeStep].imgPath}
                        title={steps[activeStep].label}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {steps[activeStep].label}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <MobileStepper
                        style={{width: '100%'}}
                        steps={steps.length}
                        position="static"
                        variant="dots"
                        activeStep={activeStep}
                        nextButton={
                            <Button size="small" onClick={this.handleNext}>
                                Next
                                <KeyboardArrowRight/>
                            </Button>
                        }
                        backButton={
                            <Button size="small" onClick={this.handleBack}>
                                <KeyboardArrowLeft/>
                                Back
                            </Button>
                        }
                    />
                </CardActions>
            </Card>
        );
    }

}