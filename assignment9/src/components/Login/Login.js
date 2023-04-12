import React, {useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Login.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { Button } from 'react-bootstrap';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    async function login() {
      console.log(email, password);
      let item={email, password};
      let result = await fetch("http://localhost:5001/user/login/",{
          method: "POST",
          mode: 'cors',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(item)
        }
      )

      if (result.status !== 200) {
        alert("Login Failed");
        navigate("/");
      }
      else{
        navigate("/home");
      }

    };

  return (
  <div className="login-form mt-5">
    <h1>Welcome to the site</h1>
    <form>
      <br />
        <label>Email: </label>
        <input type="email" placeholder="Email" 
        onChange={(e) => setEmail(e.target.value)}/>
        <br /><br />
        <label>Password: </label>
        <input type="password" placeholder="password" 
        onChange={(e) => setPassword(e.target.value)}/>
        <br /><br />
        <Button onClick={login}>Login</Button>
    </form>
  </div>
  )
}

export default Login;