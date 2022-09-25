import './index.js';
import './App.css';
import { useState } from 'react';
import Axios from 'axios';


function App() {

  const [email, setEmail] = useState("");
  const [pass, setPassword] = useState("");
  const [id, setId] = useState("");
  
  const addUser = () => {
    Axios.post('http://localhost:3001/create', {
      email: email,
      pass: pass
    }).then(() => {
      console.log('success');
    });
  };
  //del user by id
  const delUser = () => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      console.log(response);
    });
  };
  

  return (
    <div className="App">
      <div className="information">
        <h1>Register</h1>
        <label>Email</label>
        <input type="text" onChange={(event) => {
          setEmail(event.target.value);
        }} />
        <label>Password</label>
        <input type="text" onChange={(event) => {
          setPassword(event.target.value);
        }} />
        <button onClick={addUser}>Register</button>
      </div>
      <label>DELETE</label>
      <input type="text" onChange={(event) => { setId(event.target.value) }} placeholder='Delete'></input>
      <button onClick={delUser}>Delete</button>
    </div>
  );
}

export default App;
