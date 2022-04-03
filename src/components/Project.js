import { withStyles } from '@mui/styles';
import styles from '../styles/ProjectStyles';

const Project = (props) => {
    const { classes, description, url, github, tech } = props;
    return (
        <div className={classes.Project}>
            <p className={classes.Technologies}>{tech.join()}</p>
            <div className={classes.ProjectsInfo}>
                <div className={classes.ProjectMiniView}>
                    <div className={classes.ProjectOverlay}>
                        <div>
                            <a href={github} target='_blank' rel='noreferrer'>Code</a>
                            <a href={url} target='_blank' rel='noreferrer'>View</a>
                        </div>
                    </div>
                </div>
                <div className={classes.Divider}></div>
                <div className={classes.ProjectDescription}>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default withStyles(styles)(Project);