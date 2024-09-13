import React, {useState, useEffect} from 'react'

const Form = () => {
    const [name, setName] = useState('');
    const [stateOrigin, setStateOrigin] = useState('');
    const [profession, setProfession] = useState('');
    const[message, setMessage] = useState('')

const handleSubmit = (e) => {
    e.preventDefault()
    setMessage([name, stateOrigin, profession])
}

// let handleplus = () => {
//     setName(name + 1)
// }

// let handleminus = () => {
//     setName(name - 1)
// }
  return (
    <div>

            {/* <div>
                <button onClick={handleplus}>+</button>
                <span>{name}</span>
                <button onClick={handleminus}>-</button>
            </div> */}
        <form action="" onSubmit={handleSubmit}>

          
            <div>
                <label htmlFor="">Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter your name'/>
            </div>
            <div>
                <label htmlFor="">State</label>
                <input type="text" value={stateOrigin} onChange={(e) => setStateOrigin(e.target.value)} placeholder='Enter your state'/>
            </div>
            <div>
                <label htmlFor="">Profession</label>
                <input type="text" value={profession} onChange={(e) => setProfession(e.target.value)} placeholder='Enter your profesion'/>
            </div>


            <button type='submit'>Submit</button>
        </form>
        {message}
    </div>
  )
}

export default Form