import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from "@material-ui/core";
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import {Radio, RadioGroup, FormControlLabel } from '@material-ui/core';

const styles = theme => ({
  card: {
    display: 'flex',
    maxWidth: "85%",
    margin: 'auto',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
    maxWidth: "100%",
  },
  title: {
    fontSize: 20,
  },
  radio: {
    margin: theme.spacing.unit
  }
});

class QuizItem extends Component {
  state = {
    showAnswer: false,
    value: null
  }
  handleClick = (event) => {
    var {answer, options} = this.props;
    console.log(" evetn target", event.target.value);
    if (event.target.value === options[answer]) {
      this.setState({ showAnswer: true, value:event.target.value })
    } else {
      this.setState({value: event.target.value})
      this.props.showNotifications("Incorrect answer");
    }


  }
  render() {
    var props = this.props;
    var { showAnswer } = this.state;
    var { classes, statements, answer } = props;
    return (
      <div>
        <Card className={classes.card}>
          <CardContent className={classes.content}>
            <Typography variant="headline" component="h4">
              {props.questionText}
            </Typography>
            <List>
              {statements && statements.map((item, index) => {
                return (
                  <React.Fragment key={index}>
                    <ListItemText className={classes.title} disableTypography>
                      {`${index + 1} . ${item}`} </ListItemText>
                  </React.Fragment>
                )
              })}
            </List>
            <RadioGroup
              aria-label="Answer"
              name="answer"
              value={this.state.value}
              onChange={this.handleClick}
            >
              {
                props.options.map((item, index) => {
                  return (
                    <FormControlLabel key={index} value={item} control={<Radio />} label={item} />
                  );

                })
              }
              </RadioGroup>
              {
                showAnswer && (<React.Fragment>
                  <p> The answer is {props.options[answer]} </p>
                </React.Fragment>)
              }
          </CardContent>
        </Card>
      </div>
        )
    
      }
    }
    
export default withStyles(styles)(QuizItem);