import React, { Component } from "react";
import ToDoList from "./components/TodoList";
import SignIn from "./components/SignIn";
import requireAuth from "./components/auth/requireAuth";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUser } from "./actions";
import { compose } from "recompose";
import QuizForm from "./components/quizForm/QuizForm";
import QuizView from "./components/quizForm/quizView";
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { Typography, Button, Toolbar } from '@material-ui/core';
import Message from './components/Message'
import { NavLink } from 'react-router-dom'
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
  remoteDeco: {
    textDecoration: "none",
    color: "white"
  }
};

class App extends Component {
  componentWillMount() {
    this.props.fetchUser();
  }


  render() {
    const { classes } = this.props;
    return (
      <BrowserRouter>
        <div className="container">
          <AppBar position="static">
            <Toolbar>
              <Typography variant="title" color="inherit" className={classes.flex}>
                QuizBuilder
            </Typography>
              <Button>
                <NavLink className={classes.remoteDeco} to="/view"> View </NavLink>
              </Button> 
              <Button>
                <NavLink className={classes.remoteDeco} to="/quiz"> Quiz </NavLink>
              </Button>
            </Toolbar>
          </AppBar>
          <Route exact path="/" component={SignIn} />
          <Route path="/quiz" component={requireAuth(QuizForm)} />
          <Route path="/view" component={requireAuth(QuizView)} />
          <Route path="/app" component={requireAuth(ToDoList)} />
          <Message />
        </div>
      </BrowserRouter>
    );
  }
}

export default compose(
  connect(null, { fetchUser }),
  withStyles(styles)
)(App);