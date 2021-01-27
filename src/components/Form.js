import {
  FormControl,
  IconButton,
  Input,
  InputLabel,
  Paper,
} from "@material-ui/core";
import { AddCircleRounded } from "@material-ui/icons";
import React, { useState } from "react";

const Form = (props) => {
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
    <Paper elevation={0}>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <InputLabel htmlFor="new-todo-input">
            What needs to be done?
          </InputLabel>
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
    </Paper>
  );
};

export default Form;
