import React, { useState } from 'react'
import { FaPlusCircle } from 'react-icons/fa';

const Form = (props) => {
  const [name, setName] = useState('');
  
  const handleChange = (e) => {
    setName(e.target.value);
  }
  const handleSubmit = e => {
    e.preventDefault();
    if (!name.trim()) {
      return;
    }
    props.addTask(name);
    setName('');
  }
  return (
    <form
      className="todoForm"
      onSubmit={handleSubmit}>
      <h2 className='todo-heading'>
        <label htmlFor="new-todo-input">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        name="text"
        placeholder="Add subtask"
        value={name}
        onChange={handleChange}
      />
      <button
        type='submit'
        className='btn addTask'
      ><FaPlusCircle /></button>
    </form>
  );
}

export default Form;