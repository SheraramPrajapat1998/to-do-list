import { ButtonGroup, IconButton, Link, List } from "@material-ui/core";
import { GitHub } from "@material-ui/icons";
import React, { useEffect, useRef, useState } from "react";
import FilterButton from "./components/FilterButton";
import Form from "./components/Form";
import Todo from "./components/Todo";

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

const App = () => {
  const [tasks, setTasks] = useState([
    { name: "task1", id: 1, completed: false },
    { name: "task2", id: 2, completed: true },
  ]);
  const [filter, setFilter] = useState("All");

  const addTask = (name) => {
    const newTask = { id: Date.now(), name: name, completed: false };
    setTasks([...tasks, newTask]);
  };
  const deleteTask = (id) => {
    const remainingTasks = tasks.filter((task) => task.id !== id);
    setTasks(remainingTasks);
  };
  const toggleTaskCompleted = (id) => {
    const updatedTasks = tasks.map((task) => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        // use object spread to make a new obkect
        // whose `completed` prop has been inverted
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };
  const editTask = (id, newName) => {
    const editedTaskList = tasks.map((task) => {
      // if this task has same ID as the edited task
      if (id === task.id) {
        return { ...task, name: newName };
      }
      return task;
    });
    setTasks(editedTaskList);
  };

  const taskList = tasks
    .filter(FILTER_MAP[filter])
    .map((task) => (
      <Todo
        key={task.id}
        task={task}
        toggleTaskCompleted={toggleTaskCompleted}
        editTask={editTask}
        deleteTask={deleteTask}
      />
    ));

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton key={name} name={name} setFilter={setFilter} active={name} />
  ));

  const taskNoun = taskList.length !== 1 ? "tasks" : "task";
  const headingText = `${taskList.length} ${taskNoun} remaining`;

  const listHeadingRef = useRef(null);
  const prevTaskLength = usePrevious(tasks.length);

  useEffect(() => {
    if (tasks.length - prevTaskLength === -1) {
      listHeadingRef.current.focus();
    }
  }, [tasks.length, prevTaskLength]);

  return (
    <div className="box-todo">
      <Form addTask={addTask} />

      <div className="app__filter-button-group filters btn-group">
        <ButtonGroup
          disableElevation
          size="large"
          color="secondary"
        >
          {filterList}
        </ButtonGroup>
      </div>
      <h2 id="list-heading" tabIndex="-1" ref={listHeadingRef}>
        {headingText}
      </h2>
      <List role="list" className="todo-list">
        {taskList}
      </List>

      <div className="github-user">
        <IconButton color="primary" aria-label="SheraramPrajapat1998">
          <Link href="https://github.com/SheraramPrajapat1998" target="_blank">
            <GitHub fontSize="large" />
          </Link>
        </IconButton>
      </div>
    </div>
  );
};

export default App;
