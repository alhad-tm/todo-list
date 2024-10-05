import React from 'react'
import { useState } from 'react'

const AddTodo = () => {
    const [addTodo,setAddTodo] = useState("")
    const [addItem,setAddItem] = useState([])
    


    const handleAddTodo=(e)=>{
        e.preventDefault();

      setAddItem([...addItem,addTodo])

        setAddTodo(""); // to clear input

    }
    console.log(addTodo);
    
  return ( 
    <div className='flex flex-col gap-6 text-black'>
<h1 className="text-red-500 bg-black text-3xl mt-8 p-8 ">Add Todo items</h1>

<form action="" onSubmit={handleAddTodo}>

<input className='bg-green-300 border text-black' type="text"  value={addTodo} onChange={(e)=>setAddTodo(e.target.value)} />

<button type='submit'>Add to itemlist</button>

</form>

<div className='flex flex-col items-start justify-start'>
    <h1>List items</h1>
{addItem.map((item,index)=>(
    <li className='' key={index}>{item}</li>   
))}

</div>




      
    </div>
  )
}

export default AddTodo
