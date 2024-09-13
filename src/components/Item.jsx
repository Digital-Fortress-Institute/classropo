import React from 'react'

const Item = ({tunde}) => {
  return (
    <div>
    <h1>{tunde.name}</h1>
    <p>{tunde.state}</p>
    <p>{tunde.profession}</p>
</div>
)
  
}

export default Item