import sizeModule from "../components/sizes";
const styles = {
    AboutPage: {
        minHeight: '100%',
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
    AboutImg: {
        padding: '0',
        margin: '0 auto',
        maxHeight: '250px',
        width: '250px',
        borderRadius: '50%',
        border: '5px solid rgba(255,255,255,0.4)'
    },
    AboutInfo: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: '1.2rem',
        padding: '0 2rem',
        letterSpacing: '2px',
        lineHeight: '24px',
    }
}

export default styles;