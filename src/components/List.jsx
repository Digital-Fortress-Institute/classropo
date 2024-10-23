import React, {useContext, useEffect} from 'react'
import { ClassContext } from '../ClassContext'
import Item from './Item';

const List = () => {
let {movie, setMovie, mysearch } = useContext(ClassContext);

// useEffect(() => {
//   const getApi = async () => {
//    let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&key=AIzaSyD8PtGw7UNYhfOGaYrzITtYoPcES3hN7iY&q=${mysearch}`
//     const response = await fetch(url); 
//     const data = await response.json();
//     setMovie(data.items) 


//   }
 
//   getApi()
// }, [setMovie, mysearch])
 
// useEffect(() => {
//   console.log(movie)
// }, [movie]);

  return (
    <div className='flex flex-wrap justify-center'>
       {movie.map((x,   index) => (
          <Item key={index++} x={x} /> 
       ))} 

    </div>
  )
}

export default List