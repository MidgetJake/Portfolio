export default theme => ({
    root: {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    lists: {
        display: 'flex',
        alignItems: 'flex-start',
        flex: 0.5,
        padding: 25,
        paddingLeft: 250,
        paddingRight: 250,
    },
    blogList: {
        flex: 1,
        marginRight: 45,
    },
    otherList: {
        flex: 0.5,
    },
    featuredList: {
        display: 'flex',
        flexDirection: 'column',
    },
    featuredTitle: {
        padding: 15,
        textAlign: 'center',
    },
});