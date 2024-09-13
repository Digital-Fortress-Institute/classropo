import React from 'react'
import Button from './Button'

const Header = ({title}) => {
  return (
    <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <h1>{title}</h1>
        <Button  text='Add'/>
    </div>
  )
}

export default Header