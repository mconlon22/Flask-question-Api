import React, { Component } from "react";
import img from "../Images/question.png";
import Question from "../Question/Question.js";
import { CardBody, Card } from "reactstrap";
import marking from "../Images/marking.png";
import q1a from "../Images/question1a.png";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import TopicFinder from '../Searcher/TopicFinder'

 class Questions extends Component {
  state = {
    questions: [
      {
        key:1,
        mainQuestion: img,
        parts: [
          {key:1, question: q1a, anwser: marking },
          { key:2,question: q1a, anwser: marking },
        ],
        markingArray: [0, 4, 11, 15],
      },
     
    ],
  };
  render() {
    return (

      <React.Fragment>
    
      <CssBaseline />
      <Container maxWidth="sm">
          

        <Card style={{ width: '50rem' ,  }}>
          <CardBody>
            {this.state.questions.map((question) => {
              return (
                <Question

                  mainQuestion={question.mainQuestion}
                  parts={question.parts}
                />
              );
            })}
            }
          </CardBody>
        </Card>
     </Container>
    </React.Fragment>
    );
  }
}

export default Questions;
