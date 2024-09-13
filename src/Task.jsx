import React from 'react';
import {myData} from '../src/data'
import Item from './components/Item';

const Task = () => {


    console.log(myData)
  return (
    <div>
        {myData.map((x) => {

            return(
                <Item key={x.id} tunde={x} />
            )  
        }

        )}
    </div>
  )
}

export default Task