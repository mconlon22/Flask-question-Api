import { connect } from "react-redux";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { getQuestions } from "../actions/questions";
class Questions extends Component {
  componentDidMount() {
    this.props.getQuestions();
  }
  render() {
    return <div></div>;
  }
}
const mapStateToProps = (state) => ({
  questions: state.Questions.questions,
});
export default connect(mapStateToProps,{ getQuestions })(Questions);
