import React from 'react'
import { useState,useEffect,useRef } from 'react'
import './App.css'
import  {Addtodo,Removetodos,Edittodos,Checktodos, Rendertodos}  from './redux/todoslice'
import { useSelector, useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'


function App() {
  const [state, setstate] = useState({input:""})
  const [checked, setchecked] = useState(false)
  const dispatch=useDispatch();
  const id=nanoid();


const change=(e)=>{
e.preventDefault();
const {name,value}=e.target;
setstate({...state,[name]:value})

}

const submit=()=>{
  dispatch(Addtodo({...state,
    id:id,
    input:state.input,
    ischecked:false,
  
   }))
  setstate({input:""})
  storage();
 
}

// Fetching all the todos from Redux-slice([state.todos])
const todos=useSelector((state)=>{
  return state.todo.todos;

})
console.log(todos)
// Edit logic-----------------------

const edit=(e)=>{
  const id=e.target.id;
  const itm=todos.filter(elem=>{
   return elem.id===id
  })
  setstate({input: itm[0].input})
  dispatch(Edittodos({id:id}))
  storage()
}
//  checkbox logic-----------------------------
const check=(e)=>{
setchecked(!checked);
const {name}=e.target;

let index= todos.map(elem=>{
  if(elem.id===name)
    return {...elem,ischecked:!elem.ischecked}
  return elem
  
})
dispatch(Checktodos(index))
storage();
}


// Storage-------------------------------
const storage=()=>{
  localStorage.setItem("todo",JSON.stringify(todos))
}

    
useEffect(() => {
  let str= localStorage.getItem("todo")
  let obj=JSON.parse(str);
  dispatch(Rendertodos(obj))
}, [])
 
// ------------------------------------------------------
return (
  <>
     <div className='apps' >
   <h2>React-Redux Todo App</h2>
   <h3>Add items</h3>
 
   <input type="text" name='input' value={state.input} onChange={change}/><br />
   <button type="submit" onClick={submit} >Add to list</button>
   <br /><br />
   <h3>Your Todos</h3>

    {(todos.length===0)?<h2>Nothing to show</h2>:
     
   todos.map(elem=>{
    console.log(elem)
  return(  
   <div key={elem.id}>
 <h2 className="check">
  <div>
    <input type="checkbox"onChange={check} name={elem.id} />
  </div>
   <h3>{elem.input}</h3>
 </h2>
 
  
    <span>
    <button className='btn' name="" id={elem.id} onClick={edit}>Edit</button>
    <button className='btn' id={elem.id} onClick={()=>dispatch(Removetodos({id:elem.id,states:elem.ischecked}))} >Delete</button>
    </span>
    </div>)
 
  })} 

   </div>
   </>        
)}
   
export default App;



   
  
 
  
 
 


  
 


 




 

   




        










          



   

     


