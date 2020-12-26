import React from 'react'
import TodoTask from './TodoTask'

const TodoList = ({ todoList }) => {
  console.log(todoList)
  return (
    <ul>
      {
        todoList.map(todoTask => {
          return (
            <TodoTask
              key={todoTask.id}
              todoTask={todoTask}
            />
          )
        })
      }
    </ul>
  );
}

export default TodoList;
