import { useState } from 'react';
import { withStyles } from '@mui/styles';
import styles from '../styles/NavbarStyles';
import { NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import '../styles/transitions.css';

const Navbar = (props) => {
    const [helloHovered, setHelloHovered] = useState(false);
    const [iAmHovered, setiAmHovered] = useState(false);
    const [romanHovered, setRomanHovered] = useState(false);
    const { classes, setAboutActive, aboutActive, setProjectActive, projectActive, contactActive, setContactActive } = props;

    const clickProjects = () => {
        setContactActive(false);
        setAboutActive(false);
    }
    const clickAbout = () => {
        setContactActive(false);
        setProjectActive(false);
    }
    const clickContact = () => {
        setProjectActive(false);
        setAboutActive(false);
    }
    return (
        <div className={classes.mainContaner}>
            <CSSTransition
                classNames={'hello'}
                appear={true}
                in={true}
                timeout={2000}
                key={1}
            >
                <NavLink
                    to='/about'
                    onMouseEnter={() => setHelloHovered(true)}
                    onMouseLeave={() => setHelloHovered(false)}
                    onClick={clickAbout}
                    className={`${classes.startingText} ${aboutActive ? classes.active : null}`}

                >
                    {helloHovered || aboutActive ? '> ABOUT ' : 'HELLO '}
                    <span className={classes.span}>/</span>
                </NavLink>
            </CSSTransition>
            <CSSTransition
                key={2}
                classNames={'iam'}
                in={true}
                appear={true}
                timeout={3000}
            >
                <NavLink
                    to='/projects'
                    onMouseEnter={() => setiAmHovered(true)}
                    onMouseLeave={() => setiAmHovered(false)}
                    onClick={clickProjects}
                    className={`${classes.startingText} ${projectActive ? classes.active : null}`}
                >
                    {iAmHovered || projectActive ? '> PROJECTS ' : 'I AM '}
                    <span className={classes.span}>/</span>
                </NavLink>
            </CSSTransition>
            <NavLink
                to='/contact'
                onMouseEnter={() => setRomanHovered(true)}
                onMouseLeave={() => setRomanHovered(false)}
                onClick={clickContact}
                className={`${classes.startingText} ${contactActive ? classes.active : null}`}
            >
                {romanHovered || contactActive ? '> CONTACT ' : 'ROMAN '}
                <span className={classes.span}>!</span>
            </NavLink>
        </div>
    )
}

export default withStyles(styles)(Navbar);