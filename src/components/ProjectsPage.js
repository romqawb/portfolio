import { withStyles } from '@mui/styles';
import styles from '../styles/ProjectsPageStyles.js';
import '../styles/transitions.css';
import { CSSTransition } from 'react-transition-group';
import { useEffect } from 'react';
import PageHeader from './PageHeader.js';
import HorizontalRule from './HorizontalRule';
import Project from './Project';

const ProjectsPage = (props) => {
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
            <div className={classes.ProjectPage}>
                <PageHeader name='Projects' setActive={setActive} />
                <Project
                    description={'Fake barber shop web site that was built on express.js, with RESTful routing in mind and mongoDB to save the persistent data. Also some geolocation third party api was used during this project.'}
                    url={'https://quiet-anchorage-25973.herokuapp.com/'}
                    github={'https://github.com/romqawb/barber-shop'}
                    img={"/miniBarber.png"}
                />
                <HorizontalRule />
                <Project
                    description={'React IPTV playlist parser app. Allows to upload m3u8 playlist and manipulate it. Built by using React.'}
                    url={'https://iptv-sorter-app.herokuapp.com/'}
                    github={'https://github.com/romqawb/iptv-playlist-sorter'}
                    img={"/iptv.png"}
                />
                <HorizontalRule />
            </div>
        </CSSTransition>

    )
}

export default withStyles(styles)(ProjectsPage);