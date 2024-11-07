import React, { useState } from 'react'
import '../LoginSignup/Signup.css'
import { KeyOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';
import { Button } from "antd";


const LoginSignup = () => {

  const [action,setAction] = useState("Sign Up")
  
  return (
    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className='underline'></div>
      </div>
      <div className="inputs">
        {action === "Login" ? <div></div> : <div className="input">
          
          {/* <h2> Username </h2> */}
          <div className="img"><UserOutlined /></div>
          <input type="text" placeholder="Enter your Username" />
        </div>}

        

        <div className="input">
          {/* <h2> Email</h2> */}
          <div className="img"><MailOutlined /></div>

          <input type='email' placeholder="Enter your Email"></input>
        </div>

        <div className="input">
          {/* <h2> Password </h2> */}
          <div className="img"><KeyOutlined /></div>

          <input type="text" placeholder="Enter your password" />
        </div>
        {action === "Sign Up" ? <div></div> : <div className="forgot-password">Forgot Password! <span>Click here</span></div>}
        
      </div>

      <div className="submit-container">
        <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}> Sign Up
        </div>
        <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}> Login
        </div>
      </div>
    </div>

  )
}

export default LoginSignup
