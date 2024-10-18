import React, { createContext, useState } from 'react';


export const ClassContext = createContext();
const InfoContext = ({children}) => {
    const [movie, setMovie] = useState([]);
    const [mysearch, setMysearch] = useState('');


  return (
    <ClassContext.Provider value={{movie, setMovie, mysearch, setMysearch}}>
        {children}
    </ClassContext.Provider>
  );
}

export default InfoContext;