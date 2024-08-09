import React, { useContext } from 'react'
import { Todocontext } from '../store/todo-items-store'

const Welcome = () => {
  const {todolists}=useContext(Todocontext)
  return (
    <>
    
 {todolists.length ==0 && <center>Welcome To Todo App</center>}
 </>
 )} 


export default Welcome