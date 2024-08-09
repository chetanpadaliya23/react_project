import React, { useContext, useRef} from 'react'
import './Todoinput.css'
import { Todocontext } from '../store/todo-items-store'

const Todoinput = () => {
  const {handleitems} = useContext(Todocontext)
 const todoevent =useRef()
 const dateevent =useRef()

const handleitem=(e)=>{
  //console.log(todoevent.current)
  e.preventDefault();
  const todoname=todoevent.current.value
  const date=dateevent.current.value
  dateevent.current.value=""
  todoevent.current.value=""
   handleitems(todoname,date)
}
  return (
    <form   onSubmit={handleitem} >
     
    <div className="input-container">
      <input type="text" className="input-text"  ref={todoevent} placeholder="Enter item" />
      <input type="date" className="input-date" ref={dateevent}  />
      <button className="add-button" type='submit'>Add</button>

    </div>
    </form>
  )
}

export default Todoinput
