import React from "react";
import { Component } from "react";
import Searcher from "./Searcher";
class TopicFinder extends Component {
    constructor(props) {
 super (props)
  
   this.state ={
    search: {
      cert: "Leaving Cert",
      year: 2019,
      subject: '',
      level: 'Higher Level',
      topic: '',
    },
  };
    }
  selectCertHandler = (type) => {
    const tempSearch = { ...this.state.search };
    tempSearch["cert"] = type;
    console.log(type);

    this.setState({ search: tempSearch });
  };
  subjectChoiceHandler = (name) => {
    console.log(name);
    const tempSearch = { ...this.state.search };
    tempSearch["subject"] = name;
        tempSearch["topic"] = '';

    this.setState({ search: tempSearch });

  };
  topicChoiceHandler = (name) => {
    console.log(name);
    const tempSearch = { ...this.state.search };
    tempSearch["topic"] = name;
    this.setState({ search: tempSearch });
  };
  yearChoiceHandler = (e) => {
    console.log(e.target.value);
    const tempSearch = { ...this.state.search };
    tempSearch["year"] = e.target.value;
    this.setState({ search: tempSearch });
  };
  levelChoiceHandler = (value) => {
    console.log(value);
    const tempSearch = { ...this.state.search };
    tempSearch["level"] = value;
    this.setState({ search: tempSearch });
  };

  render() {
    return (
      <Searcher
        subject={this.state.search.subject}
        level={this.state.search.level}
                cert={this.state.search.cert}
              topic= {this.state.search.topic}

        levelHandler={this.levelChoiceHandler}
        topicHandler={this.topicChoiceHandler}
        certHandler={this.selectCertHandler}
        subjectHandler={this.subjectChoiceHandler}
      />
    );
  }
}

export default TopicFinder;
