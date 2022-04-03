import { withStyles } from '@mui/styles';
import styles from '../styles/AboutStyles.js';
import Skills from './Skills';
import '../styles/transitions.css';
import { CSSTransition } from 'react-transition-group';
import { useEffect } from 'react';
import PageHeader from './PageHeader';
import HorizontalRule from './HorizontalRule.js';

const AboutPage = (props) => {
    const { classes, setActive } = props;
    useEffect(() => {
        setActive(true);
    })
    return (
        <CSSTransition
            key={1}
            in={true}
            appear={true}
            classNames={'about'}
            timeout={400}
        >
            <div className={classes.AboutPage}>
                <PageHeader name='About' setActive={setActive} />
                <img className={classes.AboutImg} src='/selfie.jpg' alt='img of myself' />
                <p className={classes.AboutInfo}>
                    Currently working as an IT support specialist where I grew my interest in technology and problem solving.<br />
                </p>
                <HorizontalRule />
                <p className={classes.AboutInfo}>
                    On a personal level, I am highly-motivated, self-driven, hard-working, result-oriented, fast-learner and constantly seeking to improve my skills.
                    In addition to this, I have the ability to adapt to any type of team environment, I am team oriented and get along with others when working in a group setting. I also have the ability to work independently while staying on schedule and meeting those tight deadlines.
                </p>
                <HorizontalRule />
                <Skills />
            </div>
        </CSSTransition>
    )
}

export default withStyles(styles)(AboutPage);