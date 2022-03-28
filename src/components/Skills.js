import React from 'react';
import { withStyles } from '@mui/styles';
import styles from '../styles/SkillsStyles.js';


const Skills = (props) => {
    const { classes } = props;
    return (
        <div className={classes.skills}>
            <h2>Technologies<span className={classes.divider}>/</span>Frameworks<span className={classes.divider}>/</span>Libraries</h2>
            <div className={classes.icons}>
                <a href='https://en.wikipedia.org/wiki/CSS' target='_blank' rel="noreferrer"><i className="fab fa-css3-alt"></i></a>
                <a href='https://en.wikipedia.org/wiki/HTML5' target='_blank' rel="noreferrer"><i className="fab fa-html5"></i></a>
                <a href='https://en.wikipedia.org/wiki/JavaScript' target='_blank' rel="noreferrer"><i className="fab fa-js"></i></a>
                <a href='https://en.wikipedia.org/wiki/React_(JavaScript_library)' target='_blank' rel="noreferrer"><i className="fab fa-react"></i></a>
                <a href='https://en.wikipedia.org/wiki/Node.js' target='_blank' rel="noreferrer"><i className="fab fa-node-js"></i></a>
                <a href='https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)' target='_blank' rel="noreferrer"><i className="fab fa-bootstrap"></i></a>
            </div>
        </div>
    )
}

export default withStyles(styles)(Skills);