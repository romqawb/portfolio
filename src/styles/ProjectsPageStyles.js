import sizeModule from "../components/sizes";
const styles = {
    ProjectPage: {
        minHeight: '100vh',
        width: '50vw',
        textAlign: 'center',
        backgroundColor: 'rgb(30,30,30)',
        position: 'absolute',
        right: '0',
        border: '1px solid rgb(50,50,50)',
        [sizeModule.down("sm")]: {
            width: '100vw',
        }
    },
}

export default styles;