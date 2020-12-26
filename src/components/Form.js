// import React, { useState } from 'react'

// const Form = () => {
//   const [input, setInput] = useState();
//   const [todoList, setTodoList] = useState([]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setTodoList([...todoList, input]);
//     setInput('');
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="task">Add a task</label>
//       <input
//         type="text"
//         id='task'
//         className='task'
//         onChange={(e) => setInput(e.target.value)}
//         value={input}
//       />
//       <button
//         type='button'
//         className='btn'
//         onClick={handleSubmit}
//       >
//         add task
//       </button>
//     </form>
//   )
// }

// export default Form
