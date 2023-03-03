import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {TOKEN} from '../Seacret'


const DrfAPIFetch = () => {

    const [tasks,setTasks]=useState([])
    const [selectedTask,setSelectedTask]=useState([])
    const [id,setId]=useState(1)
    const [editedTask,setEditedTask]=useState({id:'',title:''})

    useEffect(()=>{
        axios.get("http://localhost:8000/api/tasks/",{
            headers:{
                "Authorization":TOKEN
            }
        })
        .then(res =>{setTasks(res.data)})
    },[])

    const getTask=()=>{
        axios.get(`http://localhost:8000/api/tasks/${id}/`,{
            headers:{
                "Authorization":TOKEN
            }    
        })
        .then(res=>{setSelectedTask(res.data)})
    }
    const deleteTask=(id)=>{
        axios.delete(`http://localhost:8000/api/tasks/${id}/`,{
            headers:{
                "Authorization":TOKEN
            }    
        })
        .then(res=>{setTasks(tasks.filter(task=>task.id !==id));
                    setSelectedTask([])})
    }

    const newTask=(task)=>{
        const data={
            title:task.title
        }
        axios.post(`http://localhost:8000/api/tasks/`,data,{
            headers:{
                "Content-Type":"application/json",
                "Authorization":TOKEN,
            }    
        }).then(res=>{setTasks([...tasks,res.data]);
                      setEditedTask({id:'',title:''})})
    }

    const HandleInputChange=()=>evt=>{
        const value=evt.target.value;
        const name=evt.target.name;

        setEditedTask({...editedTask,[name]:value})

    }

    const editTask=(task)=>{

        axios.put(`http://localhost:8000/api/tasks/${task.id}/`,task,{
            headers:{
                "Content-Type":"application/json",
                "Authorization":TOKEN,
            }    
        }).then((res)=>{setTasks(tasks.map((task)=>(task.id===editedTask.id?res.data:task)));
                      setEditedTask({id:'',title:''})});
    }


  return (
    <div>
      <ul>
        {
            tasks.map((task)=><li key={task.id}>{task.title} {task.id}
                                <button onClick={()=>{deleteTask(task.id)}}>
                                    <i className='fas fa-trash-alt'></i></button>
                                <button onClick={()=>{setEditedTask(task)}}>
                                    <i className='fas fa-pen'></i></button></li>)
        }
      </ul>
      <input type="text" value={id} onChange={evt=>(setId(evt.target.value))}></input>
       <button onClick={getTask}>GetTask</button>
       {/* <button onClick={deleteTask}>DeleteTask</button> */}
       <br/>
        <input type="text" name="title" value={editedTask.title} onChange={HandleInputChange()} placeholder="New task" required />
        {editedTask.id ?
        <button onClick={()=>{editTask(editedTask)}}>Update</button>:
        <button onClick={()=>{newTask(editedTask)}}>Create</button>}
        
       <p>{selectedTask.title}</p>
       <p>{selectedTask.id}</p> 
    </div>
  )
}

export default DrfAPIFetch
