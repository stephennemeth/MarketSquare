import { useState, useContext } from 'react'
import { useNavigate } from "react-router-dom";
import {AppContext} from '../App'

import axios from 'axios'

const SignUpForm = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')

    const {setAuthState, darkMode, setUser} = useContext(AppContext)

    const checkFields = () => {
        if (!firstName || !lastName || !email || !number || !username || !password || !confirm) {
            throw new Error("Please ensure that all fields are filled out")
        }

        if (password !== confirm) {
            throw new Error("Passwords are not the same")
        }
    }
    const onSubmit = async (event) => {
        try {
            event.preventDefault()
            checkFields()
            await createUserAndLogin()
            navigate('/')
        } catch (error) {
            alert(error.message)
        }
    }

    const createUserAndLogin = async () => {
        const newUser = {firstName, lastName, email, number, username, password}
        const signUpResponse = await axios.post("http://localhost:8082/api/users/", newUser).catch((error) => {
            if (error.response.data.status === 1 ) {
                throw new Error("A user with that username already exists")
            } else {
                throw new Error("There was an error making your account")
            }
        })
        console.log(signUpResponse)
        if (signUpResponse) {
            localStorage.setItem("token", signUpResponse.data.token)
            localStorage.setItem("id", signUpResponse.data.createResponse._id)
            setUser({name: signUpResponse.data.createResponse.firstName, token: signUpResponse.data.token, id : signUpResponse.data.createResponse._id})
            setAuthState(true)
        }
    }

    return (
        <form onSubmit={onSubmit} className='sign-up-form'>
            <div className={darkMode ? 'sign-up-form-container-dark' : 'sign-up-form-container'}>
                <div className='sign-up-form-title-container'>
                    <h2>
                        Sign Up
                    </h2>
                </div>
                <div className='text-field-container'>
                    <div className='sign-up-form-text-field-grid-container'>
                        <div className='text-field-row-grid1'>
                                <input className={darkMode ? 'text-field-grid-dark' : 'text-field-grid'} type='text' placeholder='First Name*' onChange={event => setFirstName(event.target.value)} />
                                <input className={darkMode ? 'text-field-grid-dark' : 'text-field-grid'} type='email' placeholder='Email*' onChange={event => setEmail(event.target.value)}/>
                        </div>
                        <div className='text-field-row-grid2'>
                                <input className={darkMode ? 'text-field-grid-dark' : 'text-field-grid'} type='text' placeholder='Last Name*' onChange={event => setLastName(event.target.value)}/>
                                <input className={darkMode ? 'text-field-grid-dark' : 'text-field-grid'} type='text' placeholder='Phone Number*' onChange={event => setNumber(event.target.value)}/>
                        </div>
                    </div>
                   <div className='text-field-row'>
                        <input className={darkMode ? 'text-field-dark' : 'text-field'} type='text' placeholder='Username*' onChange={event => setUsername(event.target.value)}/>
                        <input className={darkMode ? 'text-field-dark' : 'text-field'} type='password' placeholder='Password*' onChange={event => setPassword(event.target.value)}/>
                        <input className={darkMode ? 'text-field-dark' : 'text-field'} type='password' placeholder='Confirm Password*' onChange={event => setConfirm(event.target.value)}/>
                   </div>
                </div>
                <div className='sign-up-form-footer'>
                    <button type='submit' className='sign-up-form-submit-button'>SIGN UP</button>
                </div>
            </div>
        </form>
    )
}

export default SignUpForm