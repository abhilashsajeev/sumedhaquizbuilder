import React, { Component } from "react";
import ToDoList from "./components/TodoList";
// import SignIn from "./components/SignIn";
// import requireAuth from "./components/auth/requireAuth";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUser } from "./actions";
import QuizForm from "./components/quizForm/QuizForm";
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class App extends Component {
  componentWillMount() {
    // this.props.fetchUser();
  }

  render() {
    const { classes } = this.props;
    return (
      <BrowserRouter>
        <div className="container">
          <AppBar position="static">
            <Typography variant="title" color="inherit" className={classes.flex}>
              QuizBuilder
            </Typography>
          </AppBar>
          <Route exact path="/" component={QuizForm} />
          <Route path="/app" component={ToDoList} />
        </div>
      </BrowserRouter>
    );
  }
}

export default withStyles(styles)(App);