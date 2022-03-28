import sizeModule from "../components/sizes";
const styles = {
    Project: {
        padding: '0 2rem',
        // border: '1px solid white',
        borderRadius: '5px',
        padding: '1rem',
        backgroundColor: 'rgba(0,0,0,0.4)',
        // backgroundColor: 'rgba(19,19,19,1)',
        color: 'rgba(255,255,255,0.8)',
        textAlign: 'left',
        width: '80%',
        margin: '2rem auto',
        display: 'flex',
        alignItems: 'center',
        [sizeModule.down("lg")]: {
            flexDirection: 'column',
        },
    },
    ProjectDescription: {
        width: '50%',
        fontSize: '1.15rem',
        letterSpacing: '1.5px',
        lineHeight: '25px',
        textAlign: 'center',
        paddingLeft: '1rem',
        [sizeModule.down('lg')]: {
            width: '100%',
        },
        '& > p': {
            margin: '1rem 0 0 0',
        },
        '& > p > span': {
            fontWeight: '700',
            color: 'white',
            textDecoration: 'underline',
            textDecorationColor: 'red'
        }
    },
    ProjectMiniView: {
        height: '175px',
        backgroundImage: props => `url(${props.img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '50%',
        borderRadius: '5px',
        // border: '2px solid grey',
        overflow: 'hidden',
        '&:hover > div': {
            transform: 'all 0.2s ease-in-out',
            opacity: '1',
        },
        [sizeModule.down("lg")]: {
            width: '100%',
        },
    },
    ProjectOverlay: {
        backgroundColor: 'rgba(0,0,0,0.8)',
        height: '175px',
        opacity: '0',
        transform: 'all 0.2s ease-in-out',

        '& > div': {
            height: '100%',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
        },
        '& > div > a': {
            display: 'inline-block',
            padding: '0.75rem',
            border: '1px solid white',
            borderRadius: '3px',
            backgroundColor: 'black',
            width: '25%',
            textTransform: 'uppercase',
            textAlign: 'center',
            textDecoration: 'none',
            color: 'white',
            '&:hover': {
                cursor: 'pointer',
                backgroundColor: 'grey'
            }
        }
    }
}

export default styles;