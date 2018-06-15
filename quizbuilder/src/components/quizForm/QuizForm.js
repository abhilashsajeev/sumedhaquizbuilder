import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft:'10%',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
    // width: 200,
  },
  menu: {
    width: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 3,
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  }
});

class QuizForm extends Component {
  state = {
    answer: 'A'
  }
  render() {
    const { classes } = this.props;
    return (
      <form className={classes.container} noValidate autoComplete="off">

        <Grid container spacing={16} alignItems="flex-end">
          <Grid lg={8} sm={6}
              md={8} item>
            <TextField
              id="main"
              label="Main Question"
              margin="normal"
              fullWidth
            />
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary"> Add Statement </Button>
          </Grid>
        </Grid>

        <TextField
          id="A"
          label="Option A Answer"
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="B"
          label="optionB Answer"
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="C"
          label="optionC Answer"
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="D"
          label="optionD Answer"
          className={classes.textField}
          margin="normal"
        />
        <FormControl className={classes.formControl}>
          <Select
            value={this.state.answer}
            name="age"
            displayEmpty
            className={classes.selectEmpty}
          >
            <MenuItem value="" disabled>
              Correct Answer
            </MenuItem>
            <MenuItem value={"A"}>Option A</MenuItem>
            <MenuItem value={"B"}>Option B</MenuItem>
            <MenuItem value={"C"}>Option C</MenuItem>
            <MenuItem value={"D"}>Option D</MenuItem>
          </Select>
        </FormControl>
      </form>

    );
  }
}

QuizForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(QuizForm);