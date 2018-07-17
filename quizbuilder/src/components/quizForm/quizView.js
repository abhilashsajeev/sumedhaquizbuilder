import React, { Component } from "react";
import { connect } from "react-redux";
// import _ from "lodash";
import * as actions from "../../actions";
import { map } from "lodash";
import Preloader from "../Preloader";
import QuizItem from "./QuizItem";

class QuizView extends Component {
  componentWillMount() {
    const { auth } = this.props;
    this.props.fetchQuiz(auth.uid);
  }

  render() {
    var {showNotifications} = this.props;
    if (this.props.quiz === "loading") {
      return (
        <div>
          <Preloader />
        </div>
      );
    }
    let { quiz } = this.props;
    let key = Object.keys(quiz)[0]
    console.log(quiz);
    return (
      <div>
        <div className="row">
        </div>
        {
          map(quiz[key], (item, index) => {
            return (<QuizItem key={index} {...item} showNotifications={showNotifications} />)
          })
        }
      </div>
    );
  }
}

const mapStateToProps = ({ quiz, auth }) => {
  return {
    quiz,
    auth
  };
};

export default connect(mapStateToProps, actions)(QuizView);