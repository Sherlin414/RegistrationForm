import { useState } from 'react'

import './App.css'

function App() {
  const [userName, setUserName] = useState("")
  const[Email,setEmail]=useState("")
  const[Password,setPassword]=useState("")
  const[Result,setResult]=useState("")
  const[otp,setotp]=useState("")
  function handleSubmit(e)
  {
    e.defaultParameters();

    try{
      if(userName.trim()==""||Email.trim()=="")
      {
        return "Enter name and email";
      }
      if(Password<8||Password=="")
      {
        return "Password must be minimum 8 characters";
      }
    }
      finally{
      setResult("Form submitted successfully");
      }
    
  }

  return (
    <>
      <section id="center">
        <div>
          <h1>Registration form</h1>
          <form onSubmit={handleSubmit}>
            <input
            type="text"
            
             onClick={(e) => setName(e.target.value)}
            placeholder="Name">
            </input>
            <br></br>
            <input
            type="email"
            
             onClick={(e) => setEmail(() => (e.target.value))}
            placeholder="Email">
            </input>
            <br></br>
            <input
            type="password"
            
             onClick={(e) => setPassword(() => (e.target.value))}
            placeholder="Password">
            </input>
          </form>
          <br></br>
          <button
          type="button"
          className="counter"
          onClick={(e) => setResult(() => "submitted")}
          placeholder="Submit"
        >
          <h3> {Result}</h3>
        </button>
        <br></br>
        
        </div>
        <div>
          <input
            type="password"
            
             onClick={(e) => setotp(() => (e.target.value))}
            placeholder="otp">
            </input>
            <br></br>
            <button
          type="button"
          className="counter"
          onClick={(e) => setResult(() => "Verified successfully")}
          placeholder="Submit"
        ></button>
        </div>
      </section>

      
    </>
  )
}

export default App
