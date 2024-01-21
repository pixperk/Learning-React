import React, { useState } from 'react';
import { useTodo } from '../contexts';

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const { updateTodo, deleteTodo, toggleCompleter } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };

  const toggleCompleted = () => {
    toggleCompleter(todo.id);
  };

  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.completed ? "bg-[#88f7ee]" : "bg-[#ccbed7]"
        
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={toggleCompleted}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isTodoEditable ? 'border-dark-pink px-2' : 'border-transparent'
        } ${todo.completed ? 'line-through bg-aqua': ''}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      {/* Edit, Save Button */}
      <button
        className={`inline-flex w-8 h-8 rounded-lg text-sm border border-dark-pink justify-center items-center ${
          todo.completed
            ? 'bg-aqua opacity-50 cursor-not-allowed'
            : 'bg-lavender/50/20 hover:bg-lavender/50'
        } shrink-0`}
        onClick={() => {
          if (todo.completed) return;

          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? '📄' : '✏️'}
      </button>
      {/* Delete Todo Button */}
      <button
        className={`inline-flex w-8 h-8 rounded-lg text-sm border border-dark-pink justify-center items-center bg-lavender/50/20 hover:bg-lavender/50 shrink-0 ${
          todo.completed ? 'bg-aqua' : ''
        }`}
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;
