import React, {useContext, useState} from 'react';
import { ClassContext } from '../ClassContext';
import {Link} from 'react-router-dom'


const Form = () => {
  let { setMysearch, addReview, tunde} = useContext(ClassContext)
  
  const [title, setTitle] =useState('');
  const [body, setBody] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    let tunde = {title, body}
    addReview(tunde)
    setTitle('')
    setBody('')
    // setMysearch(film);
    // setFilm('');
    
    
  }
  
  return (
    <div className='bg-black p-[20px]'>
      <form action="" onSubmit={handleSubmit}>
      <div className='flex justify-between px-[50px]'>
      {/* <div>
          <h1 className='text-3xl font-bold text-white'>n<span className='text-[red]'>flix</span></h1>
        </div> */}



        <div>
          <input type="text" placeholder='Search...' className='rounded-lg' value={title}  onChange={(e) => setTitle(e.target.value)} />
          <textarea name="" id="" value={body}  onChange={(e) => setBody(e.target.value)}></textarea>
         
          <input className='p-2 bg-gray-400 rounded text-amber-900-lg' type="submit" />
        </div>
        
      </div>
      </form>
      <Link to="/form" className='bg-white'>
          Form
      </Link>
     
      {/* <button className='bg-white' onClick={tunde}>click me</button> */}
      
    </div>
  )
}

export default Form