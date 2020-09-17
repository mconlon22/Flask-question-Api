import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },

  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
const subjects = [
  { name: "ConstructionStudies", group: "Practical" },
  { name: "Engineering", group: "Practical" },
  { name: "Technology", group: "Practical" },
  { name: "Applied Maths", group: "Science" },
  { name: "Agricultural Science", group: "Science" },
  { name: "Biology", group: "Science" },
  { name: "Chemistry", group: "Science" },
  { name: "Mathematics", group: "Science" },
  { name: "Physics", group: "Science" },
  { name: "Physics and Chemistry", group: "Science" },
  { name: "Computer Science", group: "Science" },
  { name: "Art", group: "Artistic" },
  { name: "Music", group: "Artistic" },
  { name: "  Design & Comm Graphics", group: "Artistic" },
  { name: "  Arabic", group: "Humanities" },
  { name: "     Classical Studies", group: "Humanities" },
  { name: "  English", group: "Humanities" },
  { name: "  French", group: "Humanities" },
  { name: "     Gaeilge", group: "Humanities" },
  { name: "     Hebrew Studies", group: "Humanities" },
  { name: "  German", group: "Humanities" },
  { name: "  History", group: "Humanities" },
  { name: "  Italian", group: "Humanities" },
  { name: "  Japanese", group: "Humanities" },
  { name: "  Latin", group: "Humanities" },
  { name: "  Russian", group: "Humanities" },
  { name: "  Spanish", group: "Humanities" },
  { name: "Other Language", group: "Humanities" },
  { name: "Ancient Greek", group: "Humanities" },
];
const years=[
  {year:2020},
  {year:2019},
  {year:2018},
  {year:2017},
  {year:2016},
  {year:2015},
  {year:2014},
  {year:2013},
  {year:2012},
  {year:2011},
  {year:2010},
  {year:2009},
  {year:2008},
  {year:2007},
  {year:2006}

]

const UserInput = (props) => {
  const classes = useStyles();
  
  
  return (
    <div>
      <FormControl className={classes.formControl}>
        <ButtonGroup
          size="large"
          color="primary"
          aria-label="large outlined primary button group"
        >
          <Button onClick={(e) => props.certHandler("Leaving")}>
            Leaving Cert
          </Button>
          <Button onClick={(e) => props.certHandler("Junior")}>
            Junior Cert
          </Button>
        </ButtonGroup>
        <br />
        <br />

        <Select value={props.subject} onChange={props.subjectHandler}>
           {subjects.map((subject) => (
            <MenuItem key={subject.name} value={subject.name} >
              {subject.name}
            </MenuItem>
          ))}
        </Select>
        <br />
        <br />
        <Select value={props.year} onChange={props.yearHandler}>
           {years.map((year) => (
            <MenuItem key={year.year} value={year.year} >
              {year.year}
            </MenuItem>
          ))}
        </Select>
        <ButtonGroup 
          size="large"
          color="primary"
          aria-label="large outlined primary button group"
        >
          <Button value='HL' onClick={props.levelHandler}>
            HL
          </Button>
          <Button value='LL' onClick={props.levelHandler}>
            LL
          </Button>
        </ButtonGroup>
      </FormControl>
    </div>
  );
};
export default UserInput;
