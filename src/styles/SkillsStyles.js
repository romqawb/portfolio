const styles = {
    skills: {
        color: 'white',
        fontSize: '0.9rem',
        marginTop: '1rem',
        padding: '1rem'
    },
    icons: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        '& > a': {
            fontSize: '3rem',
            padding: '5px 10px',
            color: 'white',
            transition: 'color 0.2s ease-in-out'
        },
        '& a:hover': {
            color: '#ffd301',
            cursor: 'pointer',
            borderBottom: '1px solid rgb(185, 40, 27)'
        }
    },
    divider: {
        color: 'rgb(185, 40, 27)',
        padding: '5px'
    }
}

export default styles;