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
    if (this.props.quiz === "loading") {
      return (
        <div>
          <Preloader />
        </div>
      );
    }
    var { quiz, auth } = this.props;
    return (
      <div>
        <div className="row">
        </div>
        {
          map(quiz[auth.uid], (item, index) => {
            return (<QuizItem key={index} {...item} />)
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