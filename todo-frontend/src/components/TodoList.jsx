import React, { useEffect, useState } from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos, fetchTodos }) => {


  return (
    <>
    <div>
      <h3 className='display-6
      text-start my-2 mx-[2.5rem]'>Todo List</h3>
      <TodoItem todoList={todos} fetchTodos={fetchTodos} />
    </div>
    
      </>
  )
}

export default TodoList