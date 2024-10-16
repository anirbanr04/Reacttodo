import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  todos:[]
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
   Addtodo: (state,action) => {
     state.todos.push(action.payload)
    },
 
    Checktodos: (state,action) => {
      state.todos=action.payload;
    },


    Rendertodos:(state,action)=>{
state.todos=action.payload;
    },
    
    
     Removetodos: (state,action) => {
    const {id,states}=action.payload;
    
    const newtodo=state.todos.filter(elem=>{
     if(states===true){
       return elem.id!==id
   
     }
     return elem.id;
   })
   state.todos=newtodo;
 },
 
   
 Edittodos: (state,action) => {
 
 const{id}=action.payload;
 const newtodo=state.todos.filter(elem=>{
   return elem.id!=id;
  })
 state.todos=newtodo;
 
 }}
 })

    
  
    

// Action creators are generated for each case reducer function
export const { Addtodo,Removetodos,Checktodos,Edittodos,Rendertodos } = todoSlice.actions

export default todoSlice.reducer
   

  




  

 

    

  
   
    

  
   















  
  
     
     



   
   

  
      
     
