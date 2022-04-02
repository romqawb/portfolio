import { withStyles } from '@mui/styles';
import ContactForm from './ContactForm';
import styles from '../styles/ContactStyles.js';
import '../styles/transitions.css';
import { CSSTransition } from 'react-transition-group';
import { useEffect } from 'react';
import PageHeader from './PageHeader';
import HorizontalRule from './HorizontalRule';

const ContactPage = (props) => {
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
            <div className={classes.ContactPage}>
                <PageHeader name='contact' setActive={setActive} />
                <p className={classes.ContactDescription}>Looking forward to hear from you via one of the channels below</p>
                <div className={classes.ContactInfoContainer}>
                    <ul className={classes.ContactInfo}>
                        <li><a href='mailto:roman.sukys@gmail.com'><i className="fa fa-envelope"></i>roman.sukys@gmail.com</a></li>
                        <li><a href='https://www.linkedin.com/in/romanas-sukys-1b091513a/' target='_blank' rel='noreferrer'><i className="fa-brands fa-linkedin"></i>linkedin</a></li>
                        <li><a href='https://github.com/romqawb' target='_blank' rel='noreferrer'><i className="fa-brands fa-github"></i>GitHub</a></li>
                    </ul>
                </div>
                <HorizontalRule />
                <p className={classes.ContactDescription}>Or simply leave a message via form below and i will respond to you as soon as possible.</p>
                <HorizontalRule />
                <ContactForm />
            </div>
        </CSSTransition>
    )
}

export default withStyles(styles)(ContactPage);