const loginFormStyle = theme => ({
    mainContainer: {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        maxWidth: 345,
    },
    media: {
        height: 200,
    },
    textField: {
        width: '100%',
    },
    signupButton: {
        color: '#fff',
        marginLeft: 'auto',
        marginRight: 0,
        marginButton: 4,
    },
    forgotButton: {
        color: '#aaa',
        fontSize: 10,
    },
    socialContainer: {
        display: 'flex',
        justifyContent: 'space-evenly',
        flexDirection: 'column',
        width: '100%',
        maxWidth: 345,
        marginTop: 20,
    },
    socialTitle: {
        color: '#000',
    },
    socialButtons: {
        display: 'flex',
        justifyContent: 'space-evenly',
        width: '100%',
        marginTop: 20,
    },
    discord: {
        background: '#7289DA',
        color: '#fff',
        '&:hover': {
            background: '#4d5999',
        }
    },
    google: {
        background: '#DB4437',
        color: '#fff',
        '&:hover': {
            background: '#a1383a',
        }
    },
    popper: {
        background: '#fff',
        color: '#444',
        width: 'max-content',
        padding: '5px 10px',
        boxShadow: '0 0 2px rgba(0, 0, 0, 0.5);',
        borderRadius: '2px',
        marginBottom: -10,
    },
    popper_arrow: {
        width: 0,
        height: 0,
        borderStyle: 'solid',
        position: 'absolute',
        margin: '5px',
        borderWidth: '5px 5px 0 5px',
        borderColor: '#fff transparent transparent transparent',
        bottom: '-5px',
        left: 'calc(50%, -5px)',
        marginTop: 0,
        marginBottom:0,
    },
});

export default loginFormStyle;