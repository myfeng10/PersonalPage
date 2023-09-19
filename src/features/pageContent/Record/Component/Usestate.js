import React, { useState } from 'react';
import './Usestate.css';
function ClickCount(){
    // declare a variable named count and initialize it to 0
    const [count,setCount] = useState(0);
    
    return(
        <div class="section">
        <p>You've clicked {count} Times</p>
        <button onClick={()=> setCount(count+1)}>Click Me</button>
        </div>
    );
}


function TaskManager() {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState("");
  
    const handleAddTask = () => {
      if (input) {
        setTasks([...tasks, {text:input,completed:false}]);
        setInput("");
      }
    };
    
    const toggleCompletion = (index)=>{
        const newTasks = [...tasks];
        newTasks[index].completed = !newTasks[index].completed;
        setTasks(newTasks);
    }
    return (
      <div class="section">
        <input 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="New task" 
        />
        <button onClick={handleAddTask}>Add Task</button>
        <ul>
          {tasks.map((task, index) => (
          <li 
            key={index} OnClick={()=>toggleCompletion(index)}
            className={task.completed ? 'completed':''}
            >
                {task.text}
          </li>
          ))}
        </ul>
      </div>
    );
  }

  
export {ClickCount,TaskManager};