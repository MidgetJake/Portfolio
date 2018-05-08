import createMuiTheme from 'material-ui/styles/createMuiTheme';

const muiTheme = createMuiTheme({
    palette: {
        primary: {
            light: '#64B5F6',
            main: '#2196F3',
            dark: '#0D47A1',
            contrastText: '#fff',
            text: '#fff',
        },
        secondary: {
            light: '#EF9A9A',
            main: '#EF5350',
            dark: '#C62828',
            contrastText: '#fff',
        },
        danger: {
            main: '#e74c3c',
            hover: '#ae4133',
            contrastText: '#fff',
        },
        success: {
            main: '#2ecc71',
            hover: '#0fa361',
            contrastText: '#fff',
        },
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
});

export {
    muiTheme,
};