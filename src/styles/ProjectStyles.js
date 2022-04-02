import sizeModule from "../components/sizes";
const styles = {
    Project: {
        backgroundColor: 'rgba(0,0,0,0.4)',
        width: '80%',
        margin: '2rem auto',
        color: 'rgba(255,255,255,0.8)',
        borderRadius: '5px',
        padding: '1rem',
        '& > p': {
            paddingBottom: '0.5rem',
            margin: '0',
            textAlign: 'left',
            borderBottom: '3px solid rgba(185, 40, 27)',
        }
    },
    ProjectsInfo: {
        paddingTop: '0.5rem',
        minHeight: '175px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        [sizeModule.down("lg")]: {
            flexDirection: 'column',
        },
    },
    ProjectDescription: {
        minHeight: '175px',
        display: 'flex',
        alignItems: 'center',
        width: '49%',
        fontSize: '1rem',
        letterSpacing: '1.5px',
        lineHeight: '25px',
        [sizeModule.down('lg')]: {
            width: '100%',
            borderLeft: 'none',
            marginLeft: '0rem',
            minHeight: 'auto',
        },
        '& > p': {
            margin: '0',
        },
        '& > p > span': {
            fontWeight: '700',
            color: 'white',
            textDecoration: 'underline',
            textDecorationColor: 'red'
        }
    },
    ProjectMiniView: {
        minHeight: '175px',
        backgroundImage: props => `url(${props.img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '49%',
        borderRadius: '5px',
        overflow: 'hidden',
        '&:hover > div': {
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
        transition: 'all 0.2s ease-in-out',
        '& > div': {
            height: '100%',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
        },
        '& > div > a': {
            padding: '10px 20px',
            border: '0.5px solid azure',
            borderRadius: '5px',
            backgroundColor: 'black',
            textTransform: 'uppercase',
            textAlign: 'center',
            textDecoration: 'none',
            color: 'white',
            '&:hover': {
                cursor: 'pointer',
                backgroundColor: 'grey'
            }
        }
    },
    Divider: {
        minHeight: '150px',
        border: '1px solid rgba(185, 40, 27)',
        width: '0%',
        margin: '1rem',
        display: 'block',
        backgroundColor: 'rgba(185, 40, 27)',
        borderRadius: '25px',
        [sizeModule.down("lg")]: {
            minHeight: '4px',
            width: '80%',
        },
    },
    Technologies: {
        fontWeight: '700',
        color: 'white'
    }
}

export default styles;