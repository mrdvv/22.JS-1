import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
function Todo() {
    const [tasks, setTasks] = useState([]);
  
    const addTask = () => {
      const task = prompt('Enter a task:');
      if (task) {
        setTasks([...tasks, { text: task, priority: 'low', status: 'todo' }]);
      }
    };
  
    const changePriority = (index) => {
      const updatedTasks = [...tasks];
      const currentPriority = updatedTasks[index].priority;
      let newPriority;
      if (currentPriority === 'low') {
        newPriority = 'medium';
      } else if (currentPriority === 'medium') {
        newPriority = 'high';
      } else if (currentPriority === 'high') {
        newPriority = 'low';
      }
      updatedTasks[index].priority = newPriority;
      setTasks(updatedTasks);
    };
  
    const changeStatus = (index) => {
      const updatedTasks = [...tasks];
      const currentStatus = updatedTasks[index].status;
      let newStatus;
      if (currentStatus === 'todo') {
        newStatus = 'In Progress';
      } else if (currentStatus === 'In Progress') {
        newStatus = 'Done';
      } else if (currentStatus === 'Done') {
        newStatus = 'todo';
      }
      updatedTasks[index].status = newStatus;
      setTasks(updatedTasks);
    };
  
    const editTask = (index) => {
      const updatedTasks = [...tasks];
      const newTaskText = prompt('Enter a new task text:');
      if (newTaskText) {
        updatedTasks[index].text = newTaskText;
        setTasks(updatedTasks);
      }
    };
  
    const deleteTask = (index) => {
      const updatedTasks = [...tasks];
      updatedTasks.splice(index, 1);
      setTasks(updatedTasks);
    };
  
    return (
      <div className="bg-gray-300 p-5">
        <p className="text-left font-bold text-2xl inline-block m-5 w-15rem">Task List</p>
        <button onClick={addTask} className='float-right p-4 bg-purple-500 font-bold m-5 inline-block w-6rem rounded-md px-10'> + Add Task</button>
        <ul>
          {tasks.map((task, index) => (
            <li key={index} className='w-full font-bold m-5 p-5 border-2 border-solid border-black'>
            <div className='inline-block'>
            <h2>Task</h2>
              <span className='m-5'>{task.text}</span>
            </div>
            <div className='inline-block'>
            <h2>Priority</h2>
            <span
        className={`m-5 ${
      task.priority === 'low'
        ? 'text-green-500'
        : task.priority === 'medium'
        ? 'text-yellow-500'
        : 'text-red-500'
        }`}>
        <button onClick={() => changePriority(index)} className='mx-5'>{task.priority}</button></span>
            </div>
                            
            <button onClick={() => changeStatus(index)} className='mx-5 inline-block bg-gray-500 p-2 px-6 rounded-md'>{task.status}</button>
            <button onClick={() => editTask(index)} className='mx-5 float-end'><EditIcon/></button>
            <button onClick={() => deleteTask(index)} className='mx-5 float-end'><DeleteIcon/></button>
            

            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default Todo;