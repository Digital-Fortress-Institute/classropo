import React,{useState} from 'react'

const MyForm = () => {
    const [name, setName] = useState('');
    const [code, setCode] = useState('')
    const[message, setMessage] = useState([])

    const handleSubmit=(e) => {
        e.preventDefault();
        setMessage({name, code});
        setName('');
        setCode('')
        localStorage.setItem('tunde', JSON.stringify(message))

        

    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div>
                <input type="text" placeholder='Enter your code'  value={code} onChange={(e) => setCode(e.target.value)}/>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default MyForm