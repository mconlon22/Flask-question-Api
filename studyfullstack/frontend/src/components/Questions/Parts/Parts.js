import React, { useState } from "react";
import { Collapse, Button, CardBody, Card } from "reactstrap";
import Slider from '../../Helper/Slider';
import Container from '@material-ui/core/Container';

export const Parts = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  let question = props.question;
  return (
    <div>
    <img variant="top" src={question} alt=''/>

      <Button variant="primary" onClick={toggle} style={{ marginBottom: "1rem" }}>
        Toggle
      </Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
          <Container maxWidth="sm">
            <img src={props.anwser} alt="" />
            <Slider />
            </Container>
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
};

export default Parts;
