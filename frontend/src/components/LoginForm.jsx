import { useState, useContext } from 'react'
import { Button, Typography, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Container } from '@mui/system';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import '../css/login.css'
import {AppContext} from '../App'

import axios from 'axios'


const LoginForm = () => {

    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {auth, setAuthState, darkMode, setDarkMode, user, setUser} = useContext(AppContext)


    const onSubmit = async (event) => {
        try {
            event.preventDefault()
            const response = await login()
            setUser({name : response.data.name})
            setAuthState(true)
            navigate("/")
        } catch (error) {
            alert(error.message)
        }
    }

    const goToSignUp = () => {
        navigate("/signup")
    }

    const login = async () => {
        const response = await axios
            .put(
                "http://localhost:8082/api/users/login",
                {
                    username : username,
                    password : password
                }
            )
        return response
    }

    return (
        <form onSubmit={onSubmit} className='sign-up-form'>
            <div className={darkMode ? 'sign-up-form-container-dark' : 'sign-up-form-container'}>
                <div className='sign-up-form-title-container'>
                    <h2>
                        Login
                    </h2>
                </div>
                <div className='text-field-container'>
                   <div className='text-field-row'>
                        <input className={darkMode ? 'text-field-dark' : 'text-field'} type='text' placeholder='Username*' onChange={event => setUsername(event.target.value)}/>
                        <input className={darkMode ? 'text-field-dark' : 'text-field'} type='password' placeholder='Password*' onChange={event => setPassword(event.target.value)}/>
                   </div>
                </div>
                <div className='sign-up-form-footer'>
                    <button type='submit' className='login-form-submit-button'>LOGIN</button>
                    <button className='login-form-submit-button' onClick={goToSignUp}>SIGN UP</button>
                </div>
            </div>
        </form>
    )
}

export default LoginForm