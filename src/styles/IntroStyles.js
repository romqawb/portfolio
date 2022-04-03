import sizeModule from "../components/sizes";
const styles = {
    IntroText: {
        fontFamily: 'BlinkMacSystemFont',
        letterSpacing: '2px',
        fontWeight: '300',
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
            lineHeight: '2.5rem',
        },
        [sizeModule.down("md")]: {
            fontSize: '1.25rem',
            lineHeight: '2rem',
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