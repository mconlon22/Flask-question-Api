import React from "react";
import { Component } from "react";
import Searcher from "./Searcher";
import Container from "react-bootstrap/Container";
import {connect} from 'react-redux';
import { NavLink, withRouter ,Redirect} from 'react-router-dom';
import {getQuestions} from '../../../actions/questions'
import PropTypes from 'prop-types'


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
    static propTypes={
      getQuestions:PropTypes.func.isRequired,
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
getQuestionsHandler = () => {
  this.props.getQuestions(this.state.search )
    this.props.history.push('/Questions')
}
  render() {
    return (

      <Container maxwidth="sm">
      <br/>
            <br/>
      <br/>
  <h1>hi</h1>
      <Searcher
        subject={this.state.search.subject}
        level={this.state.search.level}
                cert={this.state.search.cert}
              topic= {this.state.search.topic}

        levelHandler={this.levelChoiceHandler}
        topicHandler={this.topicChoiceHandler}
        certHandler={this.selectCertHandler}
        subjectHandler={this.subjectChoiceHandler}
        getQuestionsHandler={this.getQuestionsHandler}
      />
            </Container>

    );
  }
}
const mapStateToProps=state=>
({
  isAuthenticated:state.auth.isAuthenticated
}

)


export default connect(mapStateToProps,{getQuestions})(withRouter(TopicFinder));
