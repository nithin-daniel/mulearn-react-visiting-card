import { useState } from 'react'
import './App.css'

const App = () => {
  // const [name, setName] = useState("");
  const [userData,setUserDate] = useState({
    name:"",
    email:"",
    designation:"",
    submit:false
  });

  const handleSubmit = () => {
    // Check if all fields are filled
    if (userData.name && userData.designation && userData.email) {
      setUserDate({...userData, submit: true});
    }
  };

  return (
    <>
      <div className="card">

            <input type="text" placeholder="Name" id="name" onChange={(e) => setUserDate({...userData, name:e.target.value})}/>
            <input type="email" placeholder="Email" id="email" onChange={(e) => setUserDate({...userData, email:e.target.value})}/>
            <input type="text" placeholder="Designation" id="Designation" onChange={(e) => setUserDate({...userData, designation:e.target.value})}/>

           <button onClick={handleSubmit}>Submit</button>
    </div>
    {userData.submit &&
    <div className="card">
      <h3>Visiting Card</h3>
          <span><strong>Name:</strong> {userData.name}</span><br />
          <span><strong>Designation:</strong> {userData.designation}</span><br />
          <span><strong>Email:</strong> {userData.email}</span>
    </div>
    }
    </>
  )
}

export default App
