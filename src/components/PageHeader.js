import { Link } from 'react-router-dom';
import { withStyles } from '@mui/styles';
import styles from '../styles/PageHeaderStyles';

const PageHeader = (props) => {
    const { classes, name, setActive } = props;
    return (
        <>
            <Link to='/' className={classes.Close} onClick={() => setActive(false)}>X</Link>
            <h1 className={classes.Header}>{name}</h1>
        </>
    )
}

export default withStyles(styles)(PageHeader);