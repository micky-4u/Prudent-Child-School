import React, {useState} from 'react';
// import SideMenu from '../components/side-menu'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import '../css/login.css'
import { useNavigate } from 'react-router-dom';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { getAxisUtilityClass } from '@mui/x-charts/ChartsAxis';
import axios from 'axios'
// import {}

const Login = () =>{

    const [userId, setUserId] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [role, setRole] =useState('');
    const navigate = useNavigate()


    const handleUserIdChange = (e) =>{
        setEmail(e.target.value)
    }

    const handleRole = (e) =>{
        setRole(e.target.value)
    }

    const handlePasswordChange = (e) =>{
        setPassword(e.target.value)
    }

    const handleSubmit = async (e)=>{
        e.preventDefault()
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/v1/user/login/', {
                email,
                password
            });
            console.log(response.data.message)
            

            if(response.data.message === "Login Successful"){
                setIsLoggedIn(true)
                navigate("/dashboard")
                setEmail("")
                setPassword("")
            }
            
        } catch (error){
            console.log("Error Occured")
            console.log(error)
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
                                <label htmlFor="email">Email</label>
                                <input 
                                    type="text" 
                                    id="email" 
                                    placeholder='example@domain.com' 
                                    onChange={(e) => setEmail(e.target.value)}
                                    
                                    />
                            </div>

                            <div className="input-div">
                                <label htmlFor="pin">Pin</label>
                                <input 
                                    type="password" 
                                    placeholder='Eg 43985' 
                                    onChange={(e) => setPassword(e.target.value)}
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


