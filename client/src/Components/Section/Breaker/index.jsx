import React from 'react';
import withStyle from '@material-ui/core/styles/withStyles';
import breakerStyle from './style';

import Paper from '@material-ui/core/Paper';

class Breaker extends React.Component {
    render() {
        const { classes, children, colour = '#fff', style } = this.props;

        return (
            <Paper className={classes.paperStyle} style={{ ...style, backgroundColor: colour }}>
                {children}
            </Paper>
        );
    }
}

export default withStyle(breakerStyle)(Breaker);