import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from 'mdi-react/KeyboardArrowLeftIcon';
import KeyboardArrowRight from 'mdi-react/KeyboardArrowRightIcon';
import Slider from 'react-slick';
import style from './style';

class SwipeableTextMobileStepper extends React.Component {
    constructor(props) {
        super(props);

        this.goToNext = setTimeout(() => {
            this.handleNext();
            this.goToNext = setTimeout(() => {
                this.handleNext();
            }, 5000);
        }, 5000);

        this.state = {
            activeStep: 0,
        };
        this.slider = null;
    }

    handleNext = () => {
        clearTimeout(this.goToNext);

        this.goToNext = this.goToNext = setTimeout(() => {
            this.handleNext();
        }, 5000);

        this.setState(prevState => {
            let nextStep = prevState.activeStep + 1;
            if (prevState.activeStep + 1 === this.props.gallery.length) {
                nextStep = 0;
            }

            this.slider.slickGoTo(nextStep);
            return {
                activeStep: nextStep,
            };
        });
    };

    handleBack = () => {
        this.setState(prevState => {
            let nextStep = prevState.activeStep - 1;
            if (prevState.activeStep - 1 === -1) {
                nextStep = this.props.gallery.length;
            }

            this.slider.slickGoTo(nextStep);
            return {
                activeStep: nextStep,
            }
        });
    };

    handleStepChange = activeStep => {
        this.setState({ activeStep });
    };

    render() {
        const { classes, theme, gallery } = this.props;
        const { activeStep } = this.state;

        return (
            <div className={classes.root}>
                {/*<Paper square elevation={0} className={classes.header}>
                    <Typography>{tutorialSteps[activeStep].label}</Typography>
                </Paper>*/}
                <Slider
                    ref={slider => this.slider = slider}
                    settings={{
                        dots: false,
                        // index={this.state.activeStep}
                        // onChangeIndex={this.handleStepChange}
                        // enableMouseEvents
                        // slideClassName={classes.container}
                        // containerStyle={classes.container}
                        className: classes.container,
                        customPaging: null,
                        afterChange: this.handleStepChange,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }}
                >
                    {gallery.map(step => (
                        <img key={step.label} className={classes.img} src={step.imgPath} alt={step.label} />
                    ))}
                </Slider>
                {/*<MobileStepper
                    steps={gallery.length}
                    position="static"
                    activeStep={activeStep}
                    className={classes.mobileStepper}
                    variant={'text'}
                    nextButton={
                        <Button size="small" onClick={this.handleNext}>
                            Next
                            <KeyboardArrowRight />
                        </Button>
                    }
                    backButton={
                        <Button size="small" onClick={this.handleBack}>
                            <KeyboardArrowLeft />
                            Back
                        </Button>
                    }
                />*/}
            </div>
        );
    }
}

export default withStyles(style)(SwipeableTextMobileStepper);
