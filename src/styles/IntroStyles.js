import sizeModule from "../components/sizes";
const styles = {
    IntroText: {
        letterSpacing: '2px',
        fontWeight: '200',
        lineHeight: '2.75rem',
        paddingRight: '5rem',
        color: 'azure',
        transition: 'all 0.2s ease-in-out',
        [sizeModule.down('xxl')]: {
            fontSize: '3.5rem',
            lineHeight: '3.5rem',
        },
        [sizeModule.down('xl')]: {
            fontSize: '2.5rem',
            lineHeight: '3rem',
        },
        [sizeModule.down('lg')]: {
            fontSize: '2rem',
        },
        [sizeModule.down("md")]: {
            fontSize: '1.25rem'
        },
    },
    container: {
        position: 'relative',
        width: '50vw',
        display: 'flex',
        alignItems: 'center',
        [sizeModule.down("sm")]: {
            display: 'none',
            width: '0'
        },
    },
    Intro: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        height: '100vh',
    },
    EmphasizeYellow: {
        color: 'yellow',
        fontWeight: '400'
    },
    '@global': {
        '.intro-appear': {
            opacity: '0',
        },
        '.intro-appear-active': {
            opacity: '1',
            transition: 'opacity 2s ease-in-out 2s'
        },
    }
}

export default styles;