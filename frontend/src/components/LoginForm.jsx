import { useState, useContext } from 'react'
import { useNavigate } from "react-router-dom";
import '../css/login.css'
import {AppContext} from '../App'

import axios from 'axios'


const LoginForm = () => {

    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setAuthState, darkMode, setUser} = useContext(AppContext)

    const checkFields = () => {
        if (!username || !password) {
            throw new Error("Please ensure that all fields are filled out")
        }
    }
    const onSubmit = async (event) => {
        try {
            event.preventDefault()
            checkFields()
            await login()
            navigate('/')
        } catch (error) {
            alert(error.message)
        }
    }

    const goToSignUp = () => {
        navigate("/signup")
    }

    const login = async () => {
        const loginResponse = await axios.post("http://localhost:8082/api/users/login",
        {
            username,
            password
        })
        console.log(loginResponse.data)
        localStorage.setItem("token", loginResponse.data.token)
        localStorage.setItem("id", loginResponse.data.id)
        setUser({name : loginResponse.data.name, token: loginResponse.data.token, id : loginResponse.data.id})
        setAuthState(true)
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