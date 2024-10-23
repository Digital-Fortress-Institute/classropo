import React, { useContext, useState } from 'react';
import {Link} from 'react-router-dom'
import { ClassContext } from '../ClassContext';

const Item = ({x}) => {
  let {deleteReview, editReview} = useContext(ClassContext)
  const [isEditing, setIsEditing] = useState(false)
  const [getTitle,  setGetTitle] = useState(x.title);
  const [getBody, setGetBody] = useState(x.body)
  
  const handleEdit = () => {
    const updatedTitle = {
      title: getTitle,
      body: getBody,
      userId: x.userId
    }
    editReview(x.id, updatedTitle)
    alert('Item successfully updated')
    setIsEditing(false)
  }
  return (
  
    <div>
      {isEditing ?  (<>
        <div>
      <input type="text" value={getTitle} onChange={(e) => setGetTitle(e.target.value)} />

      <textarea name="" id="" value={getBody} onChange={(e) => setGetBody(e.target.value)} ></textarea>
    </div>
    <button onClick={handleEdit}>Save</button>
    <button onClick={() => setIsEditing(false)}>Cancle</button>
      
      </>): (   <div className='w-[320px] border-2 border-gray-500 m-10 p-4 rounded-lg'>
      <div>
        <h1 className='text-2xl font-bold'>{x.title}</h1>
      </div>
      <div>
        <p className='text-center'>{x.body}</p>
      </div>

      <div>
        
       <button onClick={() => deleteReview(x.id)} className='bg-gray-400 border-2 border-black'>Delete</button>
       <button className='ml-10 bg-gray-400 border-2 border-black' onClick={() => setIsEditing(true)}>Edit</button>
     
      </div>
    </div>)}
     
   


    
  
    
    </div>

    

   

  )
}

export default Item


  
 