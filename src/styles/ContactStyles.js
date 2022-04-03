import sizeModule from "../components/sizes";
const styles = {
    ContactPage: {
        minHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
        width: '50vw',
        textAlign: 'center',
        backgroundColor: 'rgb(30,30,30)',
        position: 'absolute',
        right: '0',
        border: '1px solid rgb(50,50,50)',
        [sizeModule.down("sm")]: {
            width: '100vw',
        },
    },
    ContactDescription: {
        color: 'rgba(255,255,255,0.8)',
        padding: '0rem 4rem',
        fontSize: '1.2rem',
        lineHeight: '24px',
        letterSpacing: '2px',
    },
    ContactInfoContainer: {
        backgroundColor: 'rgb(19,19,19)',
        borderRadius: '5px',
        width: '80%',
        maxWidth: '500px',
        margin: '1rem auto',
        padding: '1rem'
    },
    ContactInfo: {
        backgroundColor: 'rgb(8,8,8)',
        borderRadius: '5px',
        listStyle: 'none',
        margin: '0',
        padding: '0.5rem 0',
        width: '100%',
        '& > li': {
            padding: '0.75rem',
            textAlign: 'center',
            width: '100%',
        },
        '& > li > a': {
            textDecoration: 'none',
            width: '100%',
            color: 'white',
            fontSize: '1rem',
            textTransform: 'uppercase',
            padding: '0.5rem',
            borderBottom: '2px solid transparent',
            transition: 'all 0.2s ease-in-out',
        },
        '& > li > a:hover': {
            borderBottom: '2px solid rgb(185, 40, 27)'
        },
        '& > li > a > i': {
            paddingRight: '0.5rem'
        }
    }
}

export default styles;