// import React, { useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const AddTodoForm = ({ fetchTodos }) => {
//   const [inputValue, setInputValue] = useState("");
//   const handleAddTodo = async () => {
//     if (!inputValue.trim()) {
//       toast.warn("Please enter a valid task");
//       return;
//     }
//     try {
//       await axios.post("http://localhost:3000/api/create", {
//         title: inputValue,
//         completed: false,
//       })
//       toast.success("Task added successfully ✅");
//       setInputValue("");
//       fetchTodos();
//     } catch (err) {
//       toast.error(err?.response?.data?.message||err.message||"something went wrong!!");
//       console.log(err);

//     }
//   }
//   return (
//     <>
    
//       <div className='w-full h-auto 
//       flex justify-center
//       '>

//         <div className='
//     border-black
//     h-[8rem] my-4 w-[90%] md:w-[70%]
//     xl:w-[40%]'>
//           <h1 className='text-center font-mono'>MERN Stack Task Manager</h1>
//           <div className='flex flex-row 
        
//         justify-center items-center'>
//             <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="text" 
//             className='
//             my-4 form-control 
//             max-w-[14rem] h-[2.5rem]
//             md:max-w-[25rem]
//             xl:bg-green-400
//             ' placeholder='Enter Tasks here' />
//             <button className='btn btn-primary w-[5rem] text-center h-[2.5rem]
//             mx-2' onClick={handleAddTodo}>Add</button>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default AddTodoForm




import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import { serverUrl } from '../api';

const AddTodoForm = ({ fetchTodos }) => {
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false); // 👈 Loading state

  const handleAddTodo = async () => {
    if (!inputValue.trim()) {
      toast.warn("Please enter a valid task");
      return;
    }

    try {
      setLoading(true);
      await axios.post(`${serverUrl}/api/create`, {
        title: inputValue,
        completed: false,
      });
      toast.success("Task added");
      setInputValue("");
      fetchTodos();
    } catch (err) {
      toast.error("Failed to add task");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='w-full h-auto flex justify-center'>
      <div className='border-black h-[8rem] my-4 w-[90%] md:w-[70%] xl:w-[40%]'>
        <h1 className='text-center font-mono'>MERN Stack Task Manager</h1>
        <div className='flex flex-row justify-center items-center'>
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
            className='my-4 form-control max-w-[14rem] h-[2.5rem] md:max-w-[25rem] xl:bg-green-400'
            placeholder='Enter Tasks here'
            disabled={loading}
          />
          <button
            className='btn btn-primary w-[5rem] text-center h-[2.5rem] mx-2'
            onClick={handleAddTodo}
            disabled={loading}
          >
            {loading ? "Adding..." : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTodoForm;
