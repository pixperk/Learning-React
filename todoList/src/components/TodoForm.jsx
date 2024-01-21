import React from 'react';
import { useState } from 'react';
import { useTodo } from '../contexts';

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();

    if (!todo) return;

    addTodo({ todo, completed: false });
    setTodo("");
  };

  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        placeholder="What's on your mind?"
        className="w-full border border-pink-300 rounded-l-lg px-3 outline-none duration-150 bg-lavender-50/20 py-1.5 text-gray-800"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-pink-500 text-white shrink-0 hover:bg-pink-600 focus:outline-none focus:ring focus:border-blue-300"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
