import {
  Button,
  FormControl,
  IconButton,
  Input,
  InputLabel,
  makeStyles,
} from "@material-ui/core";
import { AddCircleRounded, PlusOneRounded } from "@material-ui/icons";
import React, { useState } from "react";
// import { FaPlus, FaPlusCircle } from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const Form = (props) => {
  const classes = useStyles();
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      return;
    }
    props.addTask(name);
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <InputLabel htmlFor="new-todo-input">What needs to be done?</InputLabel>
        <Input
          type="text"
          id="new-todo-input"
          name="text"
          placeholder="Add subtask"
          value={name}
          onChange={handleChange}
        />
      </FormControl>
      <IconButton type="submit" variant="outlined" aria-label="add">
        <AddCircleRounded />
      </IconButton>
    </form>
  );
};

export default Form;
