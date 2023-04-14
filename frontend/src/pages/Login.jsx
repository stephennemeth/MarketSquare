import { useState } from 'react'
import { Button, FormControl, InputLabel, Box, Typography, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FormLabel } from 'react-bootstrap';
import { Container, fontSize } from '@mui/system';
import { Navbar } from '../components/Navbar';
import { MaterialUISwitch } from "../components/Switch";
import { NavbarMenu } from "../components/NavbarMenu";
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import '../css/login.css'
export default function Login({ authState, setAuthState, setDarkMode}) {
    const navigate = useNavigate();
    const [usernameError, setUsernameError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [loginState, setLoginState] = useState({
        username: '',
        password: ''
    })

    const handleChange = (event) => {
        const { name, value } = event.target 
        setLoginState((prevState) => ({
            ...prevState,
            [name] : value
        }))
    }

    const onSubmit = async (event) => {
        event.preventDefault()
        setAuthState(true)
        navigate('/')
    }

    const goToSignUp = () => {
        navigate("/signup")
    }

    return (
        <>
            <Navbar setDarkMode={setDarkMode} authState={authState} setAuthState={setAuthState} />
            <form className='login-form' onSubmit={onSubmit}>
                <Container className='login-form-container'>
                    <Typography variant='h4'>
                        Login
                    </Typography>
                    <Grid2 container spacing={2} className='text-field-container'>
                        <Grid2 item sx={12} sm={12}>
                            <TextField variant='outlined' className='text-field' type='text' name='username' label='Username' onChange={handleChange} error={usernameError} required />
                        </Grid2>
                        <Grid2 item sx={12} sm={12}>
                            <TextField variant='outlined'className='text-field' type='password' name='confirm' label='Password' onChange={handleChange} error={passwordError} required />
                        </Grid2>
                    </Grid2>
                    <Grid2 container className='sign-up-form-footer' spacing={1}>
                        <Button className="login-form-submit-button" type='submit' variant='contained'>
                            Login
                        </Button>
                        <Button className="login-form-submit-button" variant='contained' onClick={goToSignUp}>
                            Sign Up
                        </Button>
                    </Grid2>
                    <Button color="inherit" variant="outlined" onClick={() => setAuthState(!authState)}>Debug: Toggle authState</Button>
                </Container>
            </form>
        </>
    );
}

