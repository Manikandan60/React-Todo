import Content from "./Content"
import Header from "./Header"
import Footer from "./Footer"
import { useState } from 'react'
import AddItem from "./AddItem"


function App() {
  const [items,setitems] = useState(JSON.parse
    (localStorage.getItem('todo_list'))
)

   const [newItem,setNewItem] = useState('')

   const addItem = (item)=>{

    const id = items.length ? items[items.length-1].id+1 : 1
    const addNewItem = {id, checked:false, item}
    const ListItems = [...items,addNewItem]

    setitems(ListItems)
    localStorage.setItem("todo_list",JSON.stringify(ListItems))
   }

   const handlecheck = (id)=>{
      const listitems = items.map((item) => item.id === id ? {...item,checked:!item.checked} : item)
      setitems(listitems)
      localStorage.setItem("todo_list",JSON.stringify(listitems))
   } 
   const handledelete = (id) =>{
    const listitems = items.filter((item) => item.id !== id)
    setitems(listitems)
    localStorage.setItem("todo_list",JSON.stringify(listitems))

   }
   const handleSubmit = (e) =>{
    e.preventDefault()
    if(!newItem) return
    addItem(newItem)
    setNewItem('')
   }

  return (
  <div className="App">
    <Header />
    <AddItem 
      newItem={newItem}
      setNewItem={setNewItem}
      handleSubmit={handleSubmit}
    />
    <Content 
      items={items}
      handlecheck={handlecheck}
      handledelete={handledelete} /> 
    <Footer 
      length={items.length}/>
  </div>
 
  )
} 

export default App
