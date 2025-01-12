import React, { useRef } from 'react'

const AddItem = ({newItem,setNewItem,handleSubmit}) => {

  const inputref = useRef()

  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor='addItem'>Add Item</label>
        <input 
          autoFocus
          id='additem'
          type='text'
          placeholder='Add Item'
          required
          ref={inputref}
          value={newItem}
          onChange={(e)=>setNewItem(e.target.value)}>
        </input>
        <button type='submit' aria-label='Add Item' onClick={()=>inputref.current.focus()}>
            +
        </button>  
    </form>
    
  )
}

export default AddItem