import React from 'react';
import 'tailwindcss/tailwind.css';
import 'daisyui/dist/full.css'; 

// Uppgiftskomponent
const TodoItem = ({ todo }) => {
  return <li className="p-2 bg-white rounded shadow mb-2">{todo}</li>;
};

// Formulärkomponent
const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo.trim()) return;
    addTodo(todo);
    setTodo('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <label htmlFor="todo" className="block mb-2">
        Ny uppgift:
      </label>
      <input
        type="text"
        id="todo"
        name="todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="input input-bordered w-full mb-2"
        placeholder="Skriv en ny uppgift här"
      />
      <button type="submit" className="btn btn-primary">
        Lägg till
      </button>
    </form>
  );
};

// Arbetslistkomponent
const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Arbetslista</h1>
      <TodoForm addTodo={addTodo} />
      <ul className="space-y-2">
        {todos.map((todo, index) => (
          <TodoItem key={index} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

