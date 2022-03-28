import { withStyles } from "@mui/styles";
import styles from '../styles/HorizontalRuleStyles';

const HorizontalRule = (props) => {
    const { classes } = props;
    return (
        <hr className={classes.HorizontalRule} />
    )
}

export default withStyles(styles)(HorizontalRule);