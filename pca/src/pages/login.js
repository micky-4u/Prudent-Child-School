import React, {useState} from 'react';
// import SideMenu from '../components/side-menu'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import '../css/login.css'
import { useNavigate } from 'react-router-dom';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
// import {}

const users = [
    {
        "UserId":"admin",
        "Password":"admin",
        
    }
]
const Login = () =>{

    const [userId, setUserId] = useState('')
    const [password, setPassword] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [role, setRole] =useState('');
    const navigate = useNavigate()


    const handleUserIdChange = (e) =>{
        setUserId(e.target.value)
    }

    const handleRole = (e) =>{
        setRole(e.target.value)
    }

    const handlePasswordChange = (e) =>{
        setPassword(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(users)

        const authUser = users.forEach((user) =>{
            user.UserId == userId && user.Password ==password
            setIsLoggedIn(true)
            setUserId("")

        })
        
        if(isLoggedIn){
            navigate("/dashboard")
        }else{
            alert("Invalid Username or Password")
        }

    }

    return(
        <div className='container'>
            <div className="leftview">
                <div className="logo-area">
                    
                        <div>
                            <img src="logo_prev_ui.png" alt="" height="50" width="50"/>
                        </div>
                    
                    <div>
                        <p>Login</p>
                    </div>
                </div>
                <div className="form-area">
                    <div className="radio-area"></div>
                    <div className="form-input">
                        <form action="" className='form' onSubmit={handleSubmit}>
                            <div>
                                <RadioGroup
                                        aria-labelledby="demo-controlled-radio-buttons-group"
                                        name="controlled-radio-buttons-group"
                                        value={role}
                                        onChange={handleRole}
                                        color='#5F1B27'
                                        style={{
                                            display:'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'space-between'
                                        }}
                                    >
                                        <FormControlLabel value="student" control={<Radio sx={{color:"#5F1B27",'&.Mui-checked': {color:'#5F1B27',},}}/>} label="Student" />
                                        <FormControlLabel value="staff" control={<Radio sx={{color:"#5F1B27",'&.Mui-checked': {color:'#5F1B27',},}} />} label="Staff" />
                                </RadioGroup>
                            </div>

                            <div className="input-div">
                                <label htmlFor="id">ID</label>
                                <input 
                                    type="text" 
                                    id="id" 
                                    placeholder='Eg 1198563' 
                                    onChange={handleUserIdChange}
                                    
                                    />
                            </div>

                            <div className="input-div">
                                <label htmlFor="pin">Pin</label>
                                <input 
                                    type="password" 
                                    id="password" 
                                    placeholder='Eg 43985' 
                                    onChange={handlePasswordChange}
                                />
                            </div>

                            <div className="remember-me">
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox />} label="Remember me" />
                                </FormGroup>
                            </div>
                            <div className="submit-div">
                                <button type='submit' > Login </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="rightview"></div>
        </div>
    )

}

export default Login;


