import React from 'react';
import ReactDom from 'react-dom';
import { muiTheme } from 'Styles/Theme';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import MainView from 'Pages/BlogMain';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import AppTopbar from 'Components/BlogTopbar';

const hist = createBrowserHistory();

class App extends React.Component {
    render() {
        return (
            <Router history={hist}>
                <MuiThemeProvider theme={muiTheme}>
                    <div
                        style={{
                            width: '100vw',
                            minHeight: '100vh',
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <AppTopbar/>
                        <Switch>
                            <Route path={'/'} component={MainView}/>
                            <Redirect from={'*'} to={'/'}/>
                        </Switch>
                    </div>
                </MuiThemeProvider>
            </Router>
        );
    };
}

ReactDom.render(<App />, document.getElementById('app'));
