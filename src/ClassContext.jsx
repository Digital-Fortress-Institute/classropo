import React, { createContext, useState, useEffect } from 'react';


export const ClassContext = createContext();
const InfoContext = ({children}) => {
  const [movie, setMovie] = useState([]);
  // const [mysearch, setMysearch] = useState('');

    const getApi = async () => {
     let url = 'https://jsonplaceholder.typicode.com/posts';
      const response = await fetch(url); 
      const data = await response.json();
      // console.log(data)
      setMovie(data) 
      console.log(movie)  
    }
   
    // getApi()

   
  useEffect(() => {
    getApi()
  },[]);

  const addReview = async (newReview) => {
    let url = 'https://jsonplaceholder.typicode.com/posts';
    const response = await fetch(url, {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify(newReview)
    }); 
    const data = await response.json();
    setMovie([data, ...movie])

  }
  
  const deleteReview = async (id) => {
    if(window.confirm( 'Are you sure you want to delete this?')){
      await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method:'DELETE'
      })}
    setMovie(movie.filter((x) => x.id !== id))
    alert('Message deleted succeffully')

  }

  const editReview = async (id, newEditReview) => {
    let url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    const response = await fetch(url, {
      method:'PUT',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify(newEditReview)
    }); 
    const data = await response.json();
    setMovie(movie => movie.map((item) => item.id === id? data: item))

  }
// const myself = () => {
//   let display = JSON.parse(localStorage.getItem('tunde'))
//   console.log(display.name)
// }

//    const tunde = () => {
//     console.log('Welcome to class')
//    }


  return (
    <ClassContext.Provider value={{movie, setMovie, addReview, deleteReview, editReview}}>
        {children}
    </ClassContext.Provider>
  );
}

export default InfoContext;