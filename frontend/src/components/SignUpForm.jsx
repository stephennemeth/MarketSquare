import { useState } from 'react'
import { Button, Typography, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Container} from '@mui/system';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

const SignUpForm = ({authState, setAuthState, setDarkMode}) => {
    const navigate = useNavigate();
    const [passwordError, setPasswordError] = useState(false)
    const [signUpState, setSignUpState] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        number: '',
        password: '',
        confirm: ''
    })

    const handleChange = (event) => {
        const {name, value} = event.target 
        setSignUpState((prevState) => ({
            ...prevState,
            [name] : value
        }))
    }

    const onSubmit = async (event) => {
        try {
            event.preventDefault()
            checkPasswords()
            navigate('/')
        } catch (error) {
            alert(error.message)
        }
    }

    const checkPasswords = () => {
        if (signUpState.password !== signUpState.confirm) {
            setPasswordError(true)
            throw new Error("Passwords do not match")
        }
    }

    return (
        <form onSubmit={onSubmit} className='sign-up-form'>
            <Container className='sign-up-form-container'>
                <Typography variant='h4'>
                    Sign Up
                </Typography>
                <Grid2 container spacing={2} className='text-field-container'>
                    <Grid2 item sx={12} sm={6}>
                        <TextField variant='outlined' className='text-field' name='firstName' label='First Name' onChange={handleChange} required />
                    </Grid2>
                    <Grid2 item sx={12} sm={6}>
                        <TextField variant='outlined' className='text-field' name='lastName' label='Last Name' onChange={handleChange} required />
                    </Grid2>
                    <Grid2 item sx={12} sm={6}>
                        <TextField variant='outlined' className='text-field' name='email' label='Email Address' onChange={handleChange} required />
                    </Grid2>                        
                    <Grid2 item sx={12} sm={6}>
                        <TextField variant='outlined' className='text-field' name='number' label='Phone Number' onChange={handleChange} required />
                    </Grid2>
                    <Grid2 item sx={12} sm={12}>
                        <TextField variant='outlined' className='text-field' name='username' label='Username' onChange={handleChange} required />
                    </Grid2>
                    <Grid2 item sx={12} sm={12}>
                        <TextField variant='outlined' className='text-field' type='password' name='password' label='Password' onChange={handleChange} error={passwordError} required />
                    </Grid2>
                    <Grid2 item sx={12} sm={12}>
                        <TextField variant='outlined' className='text-field' type='password' name='confirm' label='Confirm Password' onChange={handleChange} error={passwordError} required />
                    </Grid2>
                </Grid2>
                <Grid2 container className='sign-up-form-footer'>
                    <Button className="sign-up-form-submit-button" type='submit' variant='contained'>
                        Sign Up
                    </Button>
                </Grid2>
            </Container>
        </form>
    )
}

export default SignUpForm