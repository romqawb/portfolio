const sizeModule = {
    down(size) {
        const sizes = {
            xs: '575px',
            sm: '767px',
            md: '991px',
            lg: '1200px',
            xl: '1700px',
            xxl: '2500px'
        }
        return (`@media (max-width: ${sizes[size]})`)
    }
}

export default sizeModule;