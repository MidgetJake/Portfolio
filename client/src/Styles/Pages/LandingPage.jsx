const LandingStyle = theme => ({
    header: {
        width: '100vw',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        maxHeight: 1030,
        overflow: 'hidden',
    },
    headerImage: {
        filter: 'blur(10px)',
        position: 'relative',
        top: -15,
        left: -15,
        width: 'calc(100vw + 30px)',
        height: 'auto',
        zIndex: -1,
        maxHeight: 1050,
    },
    headerText: {
        position: 'absolute',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    },
    contentPaper: {
        background: '#fff',
        padding: 25,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    skillsGrid: {
        marginTop: 13,
        width: '66%',
        justifyContent: 'center',
    },
    skillCard: {
        padding: 25,
    },
    darkBack: {
        background: '#444',
        color: '#fff',
    },
    titleBar: {
        background:
            'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
            'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    gridList: {
        width: '66%',
        transform: 'translateZ(0)',
        overflow: 'hidden',
        borderRadius: 5,
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
});

export default LandingStyle;