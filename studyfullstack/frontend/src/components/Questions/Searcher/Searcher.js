import React, { useState } from "react";
import { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import { Subjects } from "../Subjects/Subejcts.js";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import {
  createMuiTheme,
  withStyles,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import { green, purple } from "@material-ui/core/colors";
import ButtonGrouped from "../../UI/Navbar/Button/ButtonGrouped.js";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import SelectButton from "../../UI/Navbar/SelectButton.js";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "#d0bef9",
    font: theme.palette.text.primary,
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));


const Searcher = (props) => {
  const classes = useStyles();
function checkSubject(subject) {
  return subject.name===props.subject
}
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <ButtonGrouped
            button1="Leaving Cert"
            button2="Junior Cert"
            comparator={props.cert}
            choiceHandler={props.certHandler}
          />
        </Grid>
        <Grid item xs={12}>
          <ButtonGrouped
            button1="Higher Level"
            button2="Lower Level"
            button3="Foundation Level"
            comparator={props.level}
            choiceHandler={props.levelHandler}
          />
        </Grid>
        <Grid item xs={2} />
        <Grid item xs={12}>
          <h5>Select Subject</h5>

        <SelectButton iterator={Subjects} buttonText={props.subject==''?'Choose Subject':props.subject} selectionHandler={props.subjectHandler}/>
        </Grid>
        <Grid item xs={12}>
          
          {props.subject!=''? 
          <div>
          <h5>Select Topic</h5>
          <SelectButton  iterator= {
           Subjects.filter(checkSubject)[0].Topics
            }  buttonText={props.topic==''?'Choose Topic':props.topic}
              selectionHandler={props.topicHandler}
            />
          </div>:
         <div/>}
         <br/>
                 <Grid item xs={12}>

         {props.topic!=''? 
          <div>
          <Button fullWidth={true} color='default' size='large' variant='contained' onClick={props.getQuestionsHandler}>GO</Button>
          </div>:
         <div/>}
         </Grid>
        </Grid>

       

      </Grid>
    </div>
  );
};
export default Searcher;
