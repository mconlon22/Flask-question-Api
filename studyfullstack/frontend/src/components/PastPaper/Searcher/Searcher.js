import React from "react";
import { Component } from "react";
import UserInput from "./UserInput/UserInput";
//import PdfViewer from './PdfViewer/PdfViewer'

class Searcher extends Component {
  state = {
    search: {
      cert: null,
      year: null,
      subject: null,
      level: null,
    },
  };
  selectCertHandler = (type) => {
    const tempSearch = { ...this.state.search };
    tempSearch["cert"] = type;
    console.log(type);

    this.setState({ search: tempSearch });
  };
  subjectChoiceHandler = (e) => {
    console.log(e.target.value);
    const tempSearch = { ...this.state.search };
    tempSearch["subject"] = e.target.value;
    this.setState({ search: tempSearch });
  };
  yearChoiceHandler = (e) => {
    console.log(e.target.value);
    const tempSearch = { ...this.state.search };
    tempSearch["year"] = e.target.value;
    this.setState({ search: tempSearch });
  };
  levelChoiceHandler = (e) => {
    console.log(e.target.value);
    const tempSearch = { ...this.state.search };
    tempSearch["level"] = e.target.value;
    this.setState({ search: tempSearch });
  };
  render() {
    return (
      <div>
        <UserInput
          levelHandler={this.levelChoiceHandler}
          subject={this.state.search.subject}
          year={this.state.search.year}
          yearHandler={this.yearChoiceHandler}
          certHandler={this.selectCertHandler}
          subjectHandler={this.subjectChoiceHandler}
        />
      </div>
    );
  }
}

export default Searcher;
