import { React, useState, useEffect } from 'react';
import { withStyles } from '@mui/styles';
import styles from '../styles/ContactFormStyles.js';
import emailjs, { init } from 'emailjs-com';
init("user_1U3JlVKH7KgbuF3Snaovh");


const ContactForm = (props) => {
    const { classes } = props;
    const [value, updateForm] = useState('');
    const [delivered, setDelivered] = useState('');
    let mailSuccessMessage = '';
    // let sentStatus = false;
    const submitForm = (e) => {
        e.preventDefault();
        let templateParams = {
            name: 'Roman from contaformjs',
            notes: 'Notes from contaformjs',
            to_name: 'Roman',
            message: value
        }
        emailjs.send('service_5v0dr8f', 'template_608p7bp', templateParams)
            .then(function (response) {
                mailSuccessMessage = 'You have successfully sent an email! Will respond to you shortly!'
                setDelivered(true)
            }, function (error) {
                mailSuccessMessage = 'Unfortunately, mail wasn\'t sent, try again :('
                setDelivered(false)
            });
        updateForm('');
    }
    const handleChange = (e) => {
        updateForm(e.target.value);
    }
    useEffect(() => {
        console.log('delivered changed')
    }, [])
    return (
        <>
            <form className={classes.ContactForm} onSubmit={submitForm}>
                <label className={classes.ContactFormLabel} htmlFor='message'>Get in touch</label>
                <textarea className={classes.ContactFormTextarea} type='text' id='message' value={value} onChange={handleChange} required></textarea>
                <button className={classes.ContactFormButton} type='submit'>Message me</button>
            </form>
        </>
    )
}

export default withStyles(styles)(ContactForm);