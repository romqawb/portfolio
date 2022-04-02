const styles = {
    HorizontalRule: {
        border: '1.5px solid rgba(185, 40, 27)',
        borderRadius: '25px',
        width: props => !props.width ? "50%" : `${props.width}%`,
        margin: '1rem auto'
    }
}

export default styles;