import React, { useContext } from 'react'
import './Todoitems.css'
import { Todocontext } from '../store/todo-items-store'

const Todoitems = () => {
 const {handledelete,todolists} = useContext(Todocontext)
  return (
    <div className="todo-list">
      {todolists.map((item, index) => (
        <div key={index} className="todo-item">
          <div className="todo-name">{item.name}</div>
          <div className="todo-date">{item.Date}</div>
          <button className="delete-button" onClick={()=> handledelete(item.name)}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default Todoitems
