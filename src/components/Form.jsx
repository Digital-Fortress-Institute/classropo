import React, {useContext, useState} from 'react';
import { ClassContext } from '../ClassContext';


const Form = () => {
  let { setMysearch} = useContext(ClassContext)
  
  const [film, setFilm] =useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setMysearch(film);
    setFilm('');
    
    
  }
  
  return (
    <div className='bg-black p-[20px]'>
      <form action="" onSubmit={handleSubmit}>
      <div className='flex justify-between px-[50px]'>
      <div>
          <h1 className='text-3xl font-bold text-white'>n<span className='text-[red]'>flix</span></h1>
        </div>



        <div>
          <input type="text" placeholder='Search...' className='rounded-lg' value={film}  onChange={(e) => setFilm(e.target.value)} />
          <input className='p-2 bg-gray-400 rounded text-amber-900-lg' type="submit" />
        </div>
        
      </div>
      </form>
      
    </div>
  )
}

export default Form