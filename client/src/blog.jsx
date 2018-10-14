import React from 'react';
import ReactDom from 'react-dom';
import { muiTheme } from 'Styles/Theme';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider theme={muiTheme}>
                <div>
                    Hello World!
                </div>
            </MuiThemeProvider>
        );
    };
}

ReactDom.render(<App />, document.getElementById('app'));