import { useState } from 'react'
import { Button, Typography, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Container} from '@mui/system';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

import axios from 'axios'

const SignUpForm = ({authState, setAuthState, setDarkMode, darkMode}) => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')

    const onSubmit = async (event) => {
        try {
            event.preventDefault()
            checkPasswords()
            await createUser()
            setAuthState(true)
            navigate("/")
        } catch (error) {
            alert(error.message)
        }
    }

    const createUser = async () => {
        const response = await axios
        .post(
            "http://localhost:8082/api/users/",
            {
                firstName: firstName,
                lastName: lastName,
                email: email,
                number: number,
                username: username,
                password: password
            }
        )

        if (response.status !== 201) {
            throw new Error("There was an error creating your account")
        }
    }

    const checkPasswords = () => {
        if (password !== confirm) {
            throw new Error("Passwords do not match")
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