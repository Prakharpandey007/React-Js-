import { useState } from 'react'

// import './App.css'

function App() {
 const [color,setcolor]=useState("olive");

  return (
   
<div className="w-full h-screen duration-200"
style={{backgroundColor:color}}>
<div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
<div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
  <buton onClick={()=> setcolor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}}>Red</buton>
  <buton  onClick={()=> setcolor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"green"}}>green</buton>
  <buton onClick={()=> setcolor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"blue"}}>blue</buton>
  <buton onClick={()=> setcolor("black")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"black"}}>black</buton>
</div>
</div>
</div>
  )
}

export default App
