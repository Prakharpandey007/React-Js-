import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';
export default function Github() {
    const data= useLoaderData()
//     const [data,setData]=useState([]);
//     useEffect(()=>{
// fetch('https://api.github.com/users/Prakharpandey007')
// .then(response=>response.json())
// .then(data=>{
//     console.log(data);
//     setData(data);
// })
//     },[])
  return (
    <div className='text-center m-4 p-4 text-3xl '>Github followers:{data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300}/>
    
     </div>

  );
}

export const githubInfoloader=async ()=>{
   const response=await  fetch('https://api.github.com/users/Prakharpandey007')
   return response.json(); 
}
