import React, {  useState } from 'react'
import Todoapp from './components/Todoapp'
import Todoinput from './components/Todoinput'


import Todoitems from './components/Todoitems'
import './App.css'
import { Todocontext } from './store/todo-items-store'
import Welcome from './components/Welcome'

const App = () => {
 
  const [todolists,settodolists]=useState([])


const handleitems=(name,date)=>{
  //console.log(`${name},${date}`)
  settodolists((currentvalue)=>[...currentvalue,{name:name,Date:date}])
}


const handledelete=(name)=>{
  console.log("deleted",name)
  const lists= todolists.filter((item)=>item.name !== name)
  settodolists(lists)
}
  return (
   <Todocontext.Provider value={{todolists,
    handleitems,
    handledelete
   }}>
    <div className="app-container">
      <Todoapp />
      
      <Todoinput  />
      <Welcome/>
      <Todoitems  />
    </div>
    </Todocontext.Provider>
  )
}

export default App
