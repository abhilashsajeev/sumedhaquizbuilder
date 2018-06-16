import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from "@material-ui/core";
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';

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
  chip: {
    margin: theme.spacing.unit
  }
});

class QuizItem extends Component {
  handleClick = index => (event) => {
    if(index === this.props.answer){
      alert("Answer is correct");
    }

    alert("Incorrect answer");
  }
  render() {
    var props = this.props;
    console.log(props)
    var { classes, statements } = props;
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
            {
              props.options.map((item, index) => {
                return (
                  <React.Fragment key={index}>
                    <Chip className={classes.chip} 
                      label={item}
                      onClick={this.handleClick(index)}
                      avatar={<Avatar>{index + 1}</Avatar>}
                    />
                  </React.Fragment>
                );

              })
            }
          </CardContent>
        </Card>
      </div>
    )

  }
}

export default withStyles(styles)(QuizItem);