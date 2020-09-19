import React from "react";
import { Component } from "react";

import Parts from "../Parts/Parts";
class Question extends Component {
  render() {
    let mainQuestion = this.props.mainQuestion;
    let partsProp = this.props.parts;

    if (partsProp) {
      var parts = partsProp.map(function (part) {
        return (
          <div>{<Parts question={part.question} anwser={part.anwser} />}</div>
        );
      });
    }
    return (
      <div>
        {parts})}
      </div>
    );
  }
}

export default Question;
