import sizeModule from "../components/sizes";
const styles = {
    mainContaner: {
        position: 'relative',
        backgroundColor: 'black',
        minHeight: '100vh',
        width: '50vw',
        color: 'azure',
        fontWeight: '700',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        transition: 'all 0.2s ease-in-out',
        [sizeModule.down('xxl')]: {
            fontSize: '4rem',
        },
        [sizeModule.down('lg')]: {
            fontSize: '3.5rem',
        },
        [sizeModule.down("md")]: {
            fontSize: '2.25rem',
        },
        [sizeModule.down("xs")]: {
            fontSize: '2rem',
            width: '100vw',
            margin: '0 auto'
        },
    },
    startingText: {
        position: 'relative',
        width: '80%',
        marginLeft: '5rem',
        transition: 'left 0.35s ease-in-out',
        textDecoration: 'none',
        display: 'block',
        color: 'white',
        left: '0px',
        '&:hover': {
            color: 'yellow',
            left: '40px',
        }
    },
    span: {
        color: 'rgb(185, 40, 27)',
    },
    active: {
        color: '#ffd301'
    }

}

export default styles;