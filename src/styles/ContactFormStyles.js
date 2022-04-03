const styles = {
    ContactForm: {
        display: 'flex',
        flexDirection: 'column',
        padding: '0rem 1rem 1rem 1rem',
        margin: '1rem auto',
        textTransform: 'uppercase',
        width: '80%',
        maxWidth: '500px',
        letterSpacing: '2px',
        backgroundColor: '#131313',
        borderRadius: '5px',
    },
    ContactFormLabel: {
        fontSize: '0.75rem',
        textAlign: 'left',
        color: 'white',
        padding: '1rem 0',
    },
    ContactFormTextarea: {
        minHeight: '150px',
        maxWidth: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        color: '#ffd301',
        padding: '1rem',
        outline: 'none',
        border: 'none',
        resize: 'none',
        borderRadius: '5px',
        '&:focus': {
            backgroundColor: 'rgb(0,0,0,0.8)',
        }
    },
    ContactFormName: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        color: '#ffd301',
        padding: '1rem',
        outline: 'none',
        border: 'none',
        resize: 'none',
        borderRadius: '5px',
        colorScheme: 'dark',
        '&:focus': {
            backgroundColor: 'rgb(0,0,0,0.8)',
        }
    },
    ContactFormButton: {
        position: 'relative',
        marginTop: '1rem',
        height: '50px',
        textTransform: 'uppercase',
        backgroundColor: 'rgba(0,0,0,0.5)',
        color: 'white',
        letterSpacing: '1px',
        border: 'none',
        borderRadius: '5px',
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
            backgroundColor: 'rgba(50,50,50,0.7)',
            cursor: 'pointer',
            color: '#ffd301',
        },
        '&:active': {
            top: '3px',
            backgroundColor: 'black'
        },
        '&:focus': {
            outline: '0'
        },
        '&:disabled': {
            cursor: 'not-allowed',
            backgroundColor: 'rgba(50,50,50,0.1)',
            color: 'rgba(255,255,255,0.3)'

        }
    },
    deliveryMessage: {
        letterSpacing: '2px',
        color: '#ffd301',
        lineHeight: '20px',
        padding: '0rem 4rem'
    }
}

export default styles;