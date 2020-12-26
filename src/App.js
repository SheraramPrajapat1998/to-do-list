import { useState } from "react";
import TodoList from "./components/TodoList";
// import Form from "./components/Form";
// import TodoList from "./components/TodoList";

function App() {
  const [input, setInput] = useState('');
  const [todoList, setTodoList] = useState([]);

  const handleSubmit = (e) => {
    if (input) {
      e.preventDefault();
      setTodoList([...todoList, {id: Date.now(), task: input, completed:false}]);
      setInput('');
    }
  }

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="task">Add a task</label>
        <input
          type="text"
          id='task'
          className='task'
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button
          type='submit'
          className='btn'
          onClick={handleSubmit}
        >
          add task
        </button>
      </form>
      <TodoList todoList={todoList} />
    </div>
  )
}

export default App;
