import React, { Component } from "react";
import SignIn from "./components/SignIn";
import requireAuth from "./components/auth/requireAuth";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUser, signOut } from "./actions";
import { compose } from "recompose";
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { Typography, Button, Toolbar } from '@material-ui/core';
import Message from './components/Message'
import { NavLink } from 'react-router-dom'
import asyncComponent from "./components/hoc/asyncComponent";

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

let asyncQuizView = asyncComponent(() => {
  return import("./components/quizForm/quizView");
});

let asyncTodo = asyncComponent(() => {
  return import("./components/TodoList")
});
let asyncQuizForm = asyncComponent(() => {
  return import("./components/quizForm/QuizForm")
});


class App extends Component {
  componentWillMount() {
    this.props.fetchUser();
  }

  componentDidMount() {
    console.log("props app.js", this.props);
  }

  handleSignOut = () => {
    this.props.signOut();
  }

  renderNavigation = (classes) => {
    if (this.props.authenticated) {
      return (
        <React.Fragment>
          <Button>
            <NavLink className={classes.remoteDeco} to="/view"> View </NavLink>
          </Button>
          <Button>
            <NavLink className={classes.remoteDeco} to="/quiz"> Quiz </NavLink>
          </Button>
          <Button>
            <NavLink className={classes.remoteDeco} to="/create-test"> Create test </NavLink>
          </Button>
          <Button onClick={this.handleSignOut}>
            logout
        </Button>
        </React.Fragment>
      )
    }

    return null;
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
              {
                this.renderNavigation(classes)
              }

            </Toolbar>
          </AppBar>
          <Route exact path="/" component={SignIn} />
          <Route path="/quiz" component={requireAuth(asyncQuizForm)} />
          <Route path="/view" component={requireAuth(asyncQuizView)} />
          <Route path="/todo" component={requireAuth(asyncTodo)} />
          <Route path="/create-test" component={requireAuth(asyncTodo)} />
          
          <Message />
        </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth };
}

export default compose(
  connect(mapStateToProps, { fetchUser, signOut }),
  withStyles(styles)
)(App);