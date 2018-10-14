import React from 'react';
import ReactDom from 'react-dom';
import { muiTheme } from 'Styles/Theme';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import LoginCard from 'Components/Cards/Login';

class PostPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            post: '',
        };
    }

    render() {
        return (
            <MuiThemeProvider theme={muiTheme}>
                <LoginCard/>
            </MuiThemeProvider>
        );
    }
}

ReactDom.render(<PostPage />, document.getElementById('app'));