import { withStyles } from '@mui/styles';
import styles from '../styles/ProjectStyles'
const Project = (props) => {
    const { classes, description, url, github } = props;
    return (
        <div className={classes.Project}>
            <div className={classes.ProjectMiniView}>
                <div className={classes.ProjectOverlay}>
                    <div>
                        <a href={github} target='_blank' rel='noreferrer'>Code</a>
                        <a href={url} target='_blank' rel='noreferrer'>View</a>
                    </div>
                </div>
            </div>
            <div className={classes.ProjectDescription}>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default withStyles(styles)(Project);