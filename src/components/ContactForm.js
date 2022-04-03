import { React, useState, useEffect } from 'react';
import { withStyles } from '@mui/styles';
import styles from '../styles/ContactFormStyles.js';
import emailjs, { init } from 'emailjs-com';
init("user_1U3JlVKH7KgbuF3Snaovh");


const ContactForm = (props) => {
    const { classes } = props;
    const [message, setMessage] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [delivered, setDelivered] = useState(null);
    const [disabled, setAllowSubmit] = useState(true);
    let mailSuccessMessage = '';

    const handleChange = (e) => {
        if (e.target.id === 'name') {
            setName(e.target.value);
        } else if (e.target.id === 'email') {
            setEmail(e.target.value);
        } else {
            setMessage(e.target.value);
        }
    }

    const submitForm = (e) => {
        e.preventDefault();
        let templateParams = {
            from_name: name,
            to_name: 'Roman',
            reply_to: email,
            message: message
        }
        emailjs.send('service_5v0dr8f', 'template_608p7bp', templateParams)
            .then(function (response) {
                setDelivered(true)
            }, function (error) {
                setDelivered(false)
            });
        setMessage('');
        setName('');
        setEmail('');
    }

    if (delivered !== null) {
        if (delivered) {
            mailSuccessMessage = 'Thank you for your email, I will respond to you shortly!';
        } else {
            mailSuccessMessage = 'Ooops, something went wrong, please try again!';
        }
    }
    useEffect(() => {
        if (name === '' || email === '' || message === '') {
            setAllowSubmit(true)
        } else {
            setAllowSubmit(false)
        }
    }, [name, email, message]);

    return (
        <>
            <form className={classes.ContactForm} onSubmit={submitForm}>
                <label className={classes.ContactFormLabel} htmlFor='name'>Name:</label>
                <input className={classes.ContactFormName} id='name' type='text' value={name} onChange={handleChange} required></input>
                <label className={classes.ContactFormLabel} htmlFor='email'>Email address:</label>
                <input className={classes.ContactFormName} id='email' type='email' value={email} onChange={handleChange} required></input>
                <label className={classes.ContactFormLabel} htmlFor='message'>Message:</label>
                <textarea className={classes.ContactFormTextarea} type='text' id='message' value={message} onChange={handleChange} required></textarea>
                <button disabled={disabled} className={classes.ContactFormButton} type='submit'>Message me</button>
            </form>
            <p className={classes.deliveryMessage}>{mailSuccessMessage}</p>
        </>
    )
}

export default withStyles(styles)(ContactForm);