const styles = {
    Header: {
        margin: '1.25rem',
        fontSize: '3rem',
        textTransform: 'uppercase',
        color: '#ffd301',
        fontWeight: '600',
        letterSpacing: '2px',
        textShadow: '1px 1px 1px black',
    },
    Close: {
        position: 'absolute',
        display: 'block',
        color: 'white',
        border: '1px solid rgba(255,255,255,0.8)',
        left: '30px',
        top: '30px',
        width: '40px',
        lineHeight: '40px',
        height: '40px',
        borderRadius: '50%',
        transition: 'all 0.2s ease-in-out',
        textDecoration: 'none',
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: 'rgba(0,0,0,0.4)',
            color: '#ffd301',
            transform: 'scale(1.05)',
            borderColor: '#ffd301'
        },
        '&:active': {
            backgroundColor: 'grey',
            transform: 'scale(1.2)'
        }
    }
}

export default styles;