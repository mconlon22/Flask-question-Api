import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { green, purple } from "@material-ui/core/colors";


  const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    font: theme.palette.text.secondary,
    border: 0,
    borderRadius: 3,
    
    height: 48,
    padding: "0 30px",
  },
  active: {
    background: theme.palette.warning.main,
    padding: theme.spacing(2),
    textAlign: "center",
    boxShadow: "3px 3px 5px 2px rgba(255, 105, 135, .3)",
    color: green,
  },
}));

  

const ButtonGrouped = (props) => {
    const classes = useStyles();

  return (
    <ButtonGroup disableElevation variant="contained" fullWidth={true}>
      <Button value={props.button1} className={props.comparator===props.button1?classes.active:classes.root} onClick={()=>props.choiceHandler(props.button1)}>
        {props.button1}
      </Button>
      <Button value={props.button2} className={props.comparator===props.button2?classes.active:classes.root} onClick={()=>props.choiceHandler(props.button2)}>
        {props.button2}
      </Button>
      {props.button3 != null ? (
        <Button value={props.button3} className={props.comparator===props.button3?classes.active:classes.root} onClick={()=>props.choiceHandler(props.button3)}>
          {props.button3}
        </Button>
      ) : null}
    </ButtonGroup>
  );
};
export default ButtonGrouped;
