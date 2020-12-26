import React from 'react'

const TodoTask = ({ todoTask }) => {
  const { task } = todoTask;
  return (
    <div>
      <input type="checkbox"/> {task}
    </div>
  )
}

export default TodoTask;
