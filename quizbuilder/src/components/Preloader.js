import React, { Component } from "react";
import CircularProgress from '@material-ui/core/CircularProgress';
import { PropTypes } from "react"
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
  },
  wrapper: {
    textAlign:"center"
  }
});

class Preloader extends Component {
  render() {
    var { classes } = this.props;
    return (
      <div className={classes.wrapper}>
        <CircularProgress className={classes.progress} color="secondary" />
      </div>
    );
  }
};

export default withStyles(styles)(Preloader);