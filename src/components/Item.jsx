import React from 'react';
import {Link} from 'react-router-dom'

const Item = ({x}) => {
  return (
  <Link to={`https://www.youtube.com/watch?v=${x.id.videoId}`}>
    <div className='w-[320px] border-2 border-gray-500 m-10 p-4 rounded-lg'>
      <div>
      <img src={x.snippet.thumbnails.high.url} alt="" />
      </div>
      <div>
        <p className='text-center'>{x.snippet.channelTitle}</p>
      </div>

      <div>
        <span className='mr-10'>{x.snippet.publishTime}</span>
        {/* <span >{x.snippet.publishedAt}</span> */}
      </div>
    </div>
  </Link>
  )
}

export default Item


  
 