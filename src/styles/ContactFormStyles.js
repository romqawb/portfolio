const styles = {
    ContactForm: {
        display: 'flex',
        flexDirection: 'column',
        padding: '0.5rem',
        margin: '1rem auto',
        textTransform: 'uppercase',
        width: '80%',
        '& > label': {
            marginBottom: '1rem'
        },
        letterSpacing: '2px',
        backgroundColor: '#131313',
    },
    ContactFormLabel: {
        marginBottom: '1rem',
        display: 'none',
        paddingBottom: '1rem',
        fontSize: '2rem',
        color: 'white',
    },
    ContactFormTextarea: {
        minHeight: '200px',
        maxWidth: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        color: '#ffd301',
        padding: '1rem',
        outline: 'none',
        border: 'none',
        resize: 'none'
    },
    ContactFormButton: {
        position: 'relative',
        marginTop: '1rem',
        height: '50px',
        textTransform: 'uppercase',
        backgroundColor: 'rgba(0,0,0,0.5)',
        color: '#ffd301',
        letterSpacing: '1px',
        border: 'none',
        '&:hover': {
            backgroundColor: 'rgba(50,50,50,0.7)',
            boxShadow: '0px 2px 0px red',
            cursor: 'pointer'
        },
        '&:active': {
            top: '3px',
            backgroundColor: 'black'
        },
        '&:focus': {
            outline: '0'
        }
    },
    ContactInfo: {

    }
}

export default styles;