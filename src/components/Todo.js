import React, { useEffect, useRef, useState } from 'react'
import { FaPencilAlt, FaTimesCircle, FaTrashAlt } from 'react-icons/fa';

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const Todo = (props) => {
  const { id, name, completed, toggleTaskCompleted, editTask, deleteTask } = props;

  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState('');

  const editFieldRef = useRef(null);
  const editButtonRef = useRef(null);

  const wasEditing = usePrevious(isEditing);

  const handleChange = (e) => {
    setNewName(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newName.trim()) {
      return;
    }
    editTask(id, newName);
    setNewName("");
    setEditing(false);
  }

  const editingTemplate = (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor={id} className="todo-label">
          New name for {name}
        </label>
        <input
          type="text"
          id={id}
          className="todo-text"
          value={newName}
          onChange={handleChange}
          ref={editFieldRef}
        />
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="btn todo-cancel"
          onClick={()=> setEditing(false)}
        >
          <FaTimesCircle /> <span>remaining { name }</span>
        </button>
        <button
          type="submit"
          className="btn todo-edit"
        >
          Save
        </button>
      </div>
    </form>
  );

  const viewTemplate = (
    <div className={`todolist-box`}>
      <div className="todo-items">
        <input
          id={id}
          type="checkbox"
          defaultChecked={completed}
          onChange={() => toggleTaskCompleted(id)}
        />
        <label htmlFor={id} className={`${completed ? "todo-label line-through": "todo-label"}`}>
          {name}
        </label>
      </div>
      <div className="btn-group">
        <button
          type="button"
          className='btn btnEdit'
          onClick={() => setEditing(true)}
          ref={editButtonRef}
        >
          <FaPencilAlt />
        </button>
        <button
          type="button"
          className='btn btnDelete'
          onClick={() => deleteTask(id)}
        >
          <FaTrashAlt />
        </button>
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
    <li className="todo">
      {isEditing ? editingTemplate : viewTemplate}
    </li>
  );
}

export default Todo
