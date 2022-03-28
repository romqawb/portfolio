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
    ContactHeader: {
        color: 'rgba(255,255,255,0.8)',
        padding: '1rem 2rem',
        fontSize: '1.4rem',
        letterSpacing: '1.5px'
    },
    ContactInfo: {
        listStyle: 'none',
        width: '80%',
        margin: '0 auto',
        padding: '0.5rem 0',
        '& > li': {
            padding: '0.75rem',
            textAlign: 'center'
        },
        '& > li > a': {
            textDecoration: 'none',
            color: 'white',
            fontSize: '1.1rem',
            textTransform: 'uppercase',
            padding: '0.5rem'
        },
        '& > li > a:hover': {
            color: '#ffd301',
            borderBottom: '1px solid red'
        },
        '& > li > a > i': {
            paddingRight: '0.5rem'
        }
    },
    ContactDescription: {
        color: 'rgba(255,255,255,0.8)',
        fontSize: '1.4rem',
        padding: '1rem 5rem 1rem 5rem',
        letterSpacing: '1.5px'
    },
    HorizontalRule: {
        borderColor: 'red',
        borderStyle: 'dashed',
        display: 'block',
        width: '40%',
    }
}

export default styles;