export default theme => ({
    root: {
        width: '100%',
        flexGrow: 1,
        marginTop: 25,
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        height: 50,
        paddingLeft: theme.spacing.unit * 4,
        marginBottom: 20,
        backgroundColor: theme.palette.background.default,
    },
    img: {
        height: 'auto',
        overflow: 'hidden',
        width: '100%',
    },
    mobileStepper: {
        background: 'transparent',
    },
    container: {
        maxHeight: 400,
        overflow: 'hidden',
    }
});