import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import * as actions from '../../actions'
// import FormHelperText from '@material-ui/core/FormHelperText';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { compose } from 'recompose';
import { connect } from "react-redux";

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: '10%',
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
    marginTop: theme.spacing.unit,
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  }
});

class QuizForm extends Component {
  state = {
    questionText: "",
    statements: [],
    options: [
      "", "", "", ""
    ],
    answer: "",
  }
  addNewStateMent = () => {
    this.setState({ statements: [...this.state.statements, "Enter your text here"] });
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleOptionsChange = index => (event) => {
    var options = Object.assign(this.state.options);
    options[index] = event.target.value;
    this.setState({ options });
  }
  handleStateMentChange = index => (evt) => {
    console.log(this.state);
    var statements = Object.assign(this.state.statements)
    statements[index] = evt.target.value;
    this.setState({ statements })
  }
  saveQuestion = () => {
    var { answer, questionText } = this.state;
    if (questionText === "" || answer === "") {
      alert("Please fill all the columns")
      return;
    }
    var { addQuestion, auth } = this.props;
    debugger;
    console.log('add question', addQuestion);
    addQuestion(this.state, auth.uid)
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
              name="questionText"
              label="Main Question"
              placeholder="Main Question"
              margin="normal"
              value={this.state.questionText}
              onChange={this.handleChange}
              fullWidth
            />
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" onClick={this.addNewStateMent}>
              Add Statement
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={16} alignItems="flex-end">
          <Grid lg={8} sm={6}
            md={8} item>
            {
              this.state.statements.map((item, index) => {
                return (
                  <TextField
                    key={index}
                    label={"Statement - " + (index + 1)}
                    value={item}
                    margin="normal"
                    onChange={this.handleStateMentChange(index)}
                    fullWidth
                  />
                )
              })
            }
          </Grid>
        </Grid>

        {
          this.state.options.map((item, index) => {
            return (
              <TextField
                key={index}
                label={`Option ${index + 1} Answer`}
                className={classes.textField}
                value={item}
                onChange={this.handleOptionsChange(index)}
              />
            )
          })
        }

        <Grid container spacing={16} alignItems="flex-end">
          <Grid item>
            <FormControl className={classes.formControl}>
              <Select
                value={this.state.answer}
                onChange={this.handleChange}
                name="answer"
                displayEmpty
                className={classes.selectEmpty}
              >
                <MenuItem value={""} disabled>
                  Correct Answer
            </MenuItem>
                <MenuItem value={0}>Option 1</MenuItem>
                <MenuItem value={1}>Option 2</MenuItem>
                <MenuItem value={2}>Option 3</MenuItem>
                <MenuItem value={3}>Option 4</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={16} alignItems="flex-end">
          <Grid item>
            <Button variant="contained" color="primary" onClick={this.saveQuestion}>
              Save Question
          </Button>
          </Grid>
        </Grid>
      </form>

    );
  }
}

QuizForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({ auth }) => {
  return {
    auth
  };
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps, actions)
)(QuizForm)
