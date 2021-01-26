import {
  Button,
  Input,
  InputLabel,
  ListItem,
  ListItemText,
  Checkbox,
  FormControl,
} from "@material-ui/core";
import { CloseRounded, DeleteRounded, EditOutlined } from "@material-ui/icons";
import React, { useEffect, useRef, useState } from "react";

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const Todo = ({ task, toggleTaskCompleted, editTask, deleteTask }) => {
  const { id, name, completed } = task;

  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState("");

  const editFieldRef = useRef(null);
  const editButtonRef = useRef(null);

  const wasEditing = usePrevious(isEditing);

  const handleChange = (e) => {
    setNewName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newName.trim()) {
      return;
    }
    editTask(id, newName);
    setNewName("");
    setEditing(false);
  };

  const editingTemplate = (
    <FormControl onSubmit={handleSubmit}>
      <div className="form-group">
        <InputLabel htmlFor={id} className="todo-label">
          New name for {name}
        </InputLabel>
        <Input
          type="text"
          id={id}
          className="todo-text"
          value={newName}
          onChange={handleChange}
          ref={editFieldRef}
        />
      </div>
      <div className="btn-group">
        <Button
          variant="contained"
          color="default"
          type="button"
          className="btn todo-cancel"
          onClick={() => setEditing(false)}
        >
          <CloseRounded /> <span>remaining {name}</span>
        </Button>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={!newName}
        >
          Save
        </Button>
      </div>
    </FormControl>
  );

  const viewTemplate = (
    <div className={`todolist-box`}>
      <div className="todo-items">
        <Checkbox
          color="primary"
          id={id.toString()}
          type="checkbox"
          checked={completed}
          onChange={() => toggleTaskCompleted(id)}
        />
        <InputLabel
          style={{ display: "inline", padding: "10px 10px" }}
          htmlFor={id}
          className={`${completed ? "todo-label line-through" : "todo-label"}`}
        >
          {name}
        </InputLabel>
      </div>
      <div className="btn-group">
        <Button
          variant="contained"
          color="primary"
          type="button"
          className="btn btnEdit"
          onClick={() => setEditing(true)}
          ref={editButtonRef}
        >
          <EditOutlined />
        </Button>
        <Button
          variant="contained"
          color="secondary"
          type="button"
          className="btn btnDelete"
          onClick={() => deleteTask(id)}
        >
          <DeleteRounded />
        </Button>
      </div>
    </div>
  );

  useEffect(() => {
    if (!wasEditing && isEditing) {
      editFieldRef.current.focus();
    }
    if (wasEditing && !isEditing) {
      editButtonRef.current.focus();
    }
  }, [wasEditing, isEditing]);

  return (
    <ListItem>
      <ListItemText className="todo">
        {isEditing ? editingTemplate : viewTemplate}
      </ListItemText>
    </ListItem>
  );
};

export default Todo;
