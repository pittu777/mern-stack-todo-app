import React, { useState, useEffect } from 'react'
import AddTodoForm from '../components/AddTodoForm'
import TodoList from '../components/TodoList'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import TodoItem from '../components/TodoItem';
import { serverUrl } from '../api';
const Home = () => {
  const [todoList, setTodoList] = useState([]);
  const [loading, setLoading] = useState(true); // 👈 for showing loading message

  const fetchTodos = async () => {
    try {
      setLoading(true); // 👈 start loading
      const response = await axios.get(`${serverUrl}/api/todos`);
      setTodoList(response.data);
    } catch (error) {
      console.error("Error fetching todos", error);
    } finally {
      setLoading(false); // 👈 stop loading
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className='min-h-screen bg-gray-100 p-4'>
      <AddTodoForm fetchTodos={fetchTodos} />
      {loading ? (
        <div className="text-center mt-4 text-lg font-semibold text-gray-600">
          Loading tasks...
        </div>
      ) : (
        <TodoItem todoList={todoList} fetchTodos={fetchTodos} />
      )}
    </div>
  );
};

export default Home;