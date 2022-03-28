import { withStyles } from '@mui/styles';
import '../styles/transitions.css';
import styles from '../styles/IntroStyles';
import { CSSTransition } from 'react-transition-group';

const Intro = (props) => {
    const { classes } = props;
    return (
        <CSSTransition
            className={classes.container}
            key={1}
            appear={true}
            in={true}
            classNames={'intro'}
            timeout={{ enter: 4000, exit: 200 }}
        >
            <div className={classes.Intro}>
                <p className={classes.IntroText}>
                    An ambitious Birkbeck University graduate who is seeking to land an <span className={classes.EmphasizeYellow}>entry-level</span> job in Web Development.
                </p>
            </div>
        </CSSTransition>
    )
}

export default withStyles(styles)(Intro);
