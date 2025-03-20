import {React , useState} from 'react'
import './Login.css'
function Login() {
    const[user , setUserName] = useState("")
    const[password,setPassword]=useState("")
    const[userError , setUserError] = useState("")
    const[passwordError , setPasswordError] = useState("")
    const onChangeUsername=(event)=>{
         setUserName(event.target.value)
    }
    const onChangePassword=(event)=>{
        setPassword(event.target.value)
    }
    const onUserBlur = () =>{
        setUserError(user.trim()===""?'Please Enter  a valid Username':"")
    }
    const onPasswordBlur = () =>{
        setPasswordError(password.trim()===""?'Please Enter  a valid Password':"")
    }


  return (
    <div className='form_container'>
         <form className='login_form'>
            <label htmlFor='name'>Username</label>
            <input id='name' value={user} onBlur={onUserBlur} onChange={onChangeUsername} placeholder='Username' type='text'/>
            {userError&&<p style={{color:"red"}}>{userError}</p>}
            <label htmlFor='password'>Password</label>
            <input id='password' value={password} onBlur={onPasswordBlur} onChange={onChangePassword} placeholder='Password' type='password'/>
            {passwordError&&<p style={{color:"red"}}>{passwordError}</p>}
            <button type='submit' className='btn_login'>Login</button>
         </form>
    </div>
  )
}

export default Login