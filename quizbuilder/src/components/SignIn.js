import "./SignIn.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../actions";
import PropTypes from "prop-types";
import {compose} from 'recompose';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  contain : {
    textAlign: "center",
    margin: "auto"
  },
  image: {
    maxWidth: "100%",
    height: "auto",
  }
}
class Signin extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillUpdate(nextProps) {
    if (nextProps.auth) {
      this.context.router.history.push("/quiz");
    }
  }

  render() {
    var {classes} = this.props;
    return (
      <div className={classes.contain}>
        <div>
          <img className={classes.image} alt="Sign in" id="sign-in" src="/img/user.png" />
          <h4 id="sign-in-header">Sign In to start</h4>
          <a href="#" className="social-signin" onClick={this.props.signIn}>
            <i className="social-signin-icon" />
            Sign In With Google
          </a>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default compose(
  connect(mapStateToProps, { signIn }),
  withStyles(styles)
)(Signin);