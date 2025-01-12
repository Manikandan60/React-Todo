import React from 'react'
import ItemsList from './ItemsList'


const Content = ({items,handlecheck,handledelete}) => {
 
          
  return (
    <main>
      {(items.length)?(
        <ItemsList
        items={items}
        handlecheck={handlecheck}
        handledelete={handledelete} />
      ):(
        <p style={{marginTop:'2rem',color:'red'}}>Your list is empty</p>
      )}
      
      

    </main>   
     
  )
}

export default Content 