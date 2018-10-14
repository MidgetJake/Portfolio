import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from './style';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

class BlogListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Typography className={classes.title} variant={'display3'}>Blog | Jake Barter</Typography>
                <div className={classes.buttonRow}>
                    <Button>Home</Button>
                    <Typography className={classes.buttonDivide}>|</Typography>
                    <Button>Latest</Button>
                    <Typography className={classes.buttonDivide}>|</Typography>
                    <Button>Groups</Button>
                </div>
                <Divider/>
            </div>
        );
    };
}

export default withStyles(styles)(BlogListItem);