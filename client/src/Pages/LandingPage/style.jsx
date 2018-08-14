export default theme => ({
    header: {
        width: '100vw',
        height: '100vh',
        maxHeight: '40vh',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        position: 'absolute',
        boxShadow: '0 3px 12px rgba(0, 0, 0, 0.5)',
        [theme.breakpoints.down(1200)]: {
            maxHeight: 'unset',
        },
    },
    headerImage: {
        filter: 'blur(10px)',
        position: 'relative',
        top: -15,
        left: -15,
        width: 'calc(100vw + 30px)',
        minHeight: 'calc(100% + 30px)',
        height: 'auto',
        zIndex: -1,
        maxHeight: 1050,
        [theme.breakpoints.down(1900)]: {
            width: 'auto',
            minWidth: 'calc(100vw + 30px)',
            height: 'calc(100vh + 30px)',
        },
        [theme.breakpoints.down(1200)]: {
            height: 'calc(100vh + 30px)',
        },
    },

    content: {
        marginTop: 300,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    avatar: {
        width: 200,
        height: 200,
        background: '#444',
        top: 0,
        transform: 'translate(0, -50%)',
        position: 'absolute',
        zIndex: 5,
        boxShadow: '0 3px 12px rgba(0, 0, 0, 0.5)',
    },
    card: {
        paddingTop: 120,
        width: 'calc(100% - 50px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: 25,
        marginBottom: 25,
        [theme.breakpoints.down('sm')]: {
            width: 'calc(100% - 20px)',
        },
    },

    gamesList: {
        marginTop: 20,
        width: '66%',
        [theme.breakpoints.down('sm')]: {
            width: 'calc(100% - 8px)',
        },
    },
    gridList: {
        width: '100%',
        transform: 'translateZ(0)',
        overflow: 'hidden',
    },
    tileButton: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        zIndex: 10,
        color: 'rgba(255, 255, 255, 0)',
        fontSize: '200%',
        fontWeight: 200,
        transition: theme.transitions.easing.easeInOut,
        transitionDuration: theme.transitions.duration.standard,
        '&:hover': {
            color: 'rgba(255, 255, 255, 1)',
        },
    },
    tileItem: {
        borderRadius: 15,
        overflow: 'hidden',
        [theme.breakpoints.down('sm')]: {
            borderRadius: 4,
            marginBottom: 5,
        },
    },

    social: {
        marginTop: 20,
        display: 'flex',
        width: 200,
        justifyContent: 'space-between',
    },

    footer: {
        width: 'calc(100% - 20px)',
        marginTop: 50,
    },
});