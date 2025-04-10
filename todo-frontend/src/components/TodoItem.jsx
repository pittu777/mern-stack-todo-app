import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const TodoItem = ({ todoList, fetchTodos }) => {
  const [loadingId, setLoadingId] = useState(null); // track which item is being updated/deleted

  const handleDelete = async (id) => {
    if (!id) {
      toast.warn("ID not found");
      return;
    }

    try {
      setLoadingId(id);
      await axios.delete(`http://localhost:3000/api/todos/${id}`);
      toast.success("Item deleted");
      fetchTodos();
    } catch (err) {
      toast.error("Error deleting item");
      console.error("Deleting error:", err);
    } finally {
      setLoadingId(null);
    }
  };

  const handleToggleCompleted = async (todo) => {
    try {
      setLoadingId(todo._id);
      const updated = {
        title: todo.title,
        completed: !todo.completed,
      };
      await axios.put(`http://localhost:3000/api/todos/${todo._id}`, updated);
      toast.success("Task updated");
      fetchTodos();
    } catch (err) {
      toast.error("Error updating task");
      console.error("Updating error:", err);
    } finally {
      setLoadingId(null);
    }
  };

  return (
    <div>
      {todoList.map((todo) => (
        <div key={todo._id} className='w-[100%] flex justify-center items-center'>
          <input
            type='checkbox'
            className='mx-2'
            checked={todo.completed}
            onChange={() => handleToggleCompleted(todo)}
            disabled={loadingId === todo._id}
          />
          <p className={`my-2 font-mono font-semibold ${todo.completed ? "line-through text-gray-500" : ""}`}>
            {todo.title}
          </p>
          <button
            onClick={() => handleDelete(todo._id)}
            className='btn btn-danger mx-2'
            disabled={loadingId === todo._id}
          >
            {loadingId === todo._id ? "Deleting..." : "Delete"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoItem;
