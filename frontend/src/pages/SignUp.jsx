import { useState } from 'react'
import { Button, FormControl, InputLabel, Box, Typography, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FormLabel } from 'react-bootstrap';
import { Container, fontSize } from '@mui/system';
import { Navbar } from '../components/Navbar';
import { MaterialUISwitch } from "../components/Switch";
import { NavbarMenu } from "../components/NavbarMenu";
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

export default function SignUpPage({ authState, setAuthState, setDarkMode}) {
    const navigate = useNavigate();
    const [signUpState, setSignUpState] = useState({
        firstname: '',
        lastname: '',
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

    const onSubmit = async () => {
        return
    }

    const goToLogin = () => {
        navigate("/login")
    }

    return (
        <>
            <Navbar setDarkMode={setDarkMode} authState={authState}/>
            <Container
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                    width: '100%',
                    mt: 10,
                  }}
            >
                <Box 
                    component='form'
                    onSubmit={onSubmit}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: '100%',
                        maxWidth: '60%',
                        border: '2px solid #3f51b5',
                        borderRadius: 5,
                        padding: 3,
                    }}
                >
                    <Typography
                        variant="h4"
                    >
                        Sign Up
                    </Typography>
                    <Grid2
                        container 
                        spacing={5}
                        sx={{
                            display: 'flex',
                            width: "100%",
                            justifyContent: 'center',
                            alignItems: 'center',
                            mt: 1
                        }}
                    >
                        <Grid2 item>
                            <TextField
                                label="First Name"
                                name="firstname"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                required
                                onChange={handleChange}
                                sx={{
                                    width: '100%',
                                    '& .MuiOutlinedInput-root': {
                                    borderRadius: 10,
                                    },
                                    '& .MuiOutlinedInput-input': {
                                    borderRadius: 10,
                                    },
                                }}
                            />
                        </Grid2>
                        <Grid2 item>
                            <TextField
                                label="Last Name"
                                name="lastname"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                required
                                onChange={handleChange}
                                sx={{
                                    width: '100%',
                                    '& .MuiOutlinedInput-root': {
                                    borderRadius: 10,
                                    },
                                    '& .MuiOutlinedInput-input': {
                                    borderRadius: 10,
                                    },
                                }}
                            />
                        </Grid2>
                    </Grid2>
                    <Grid2
                        container 
                        spacing={5}
                        sx={{
                            display: 'flex',
                            width: "100%",
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Grid2 item>
                            <TextField
                                label="Email"
                                name="email"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                required
                                onChange={handleChange}
                                sx={{
                                    width: '100%',
                                    '& .MuiOutlinedInput-root': {
                                    borderRadius: 10,
                                    },
                                    '& .MuiOutlinedInput-input': {
                                    borderRadius: 10,
                                    },
                                }}
                            />
                        </Grid2>
                        <Grid2 item>
                            <TextField
                                label="Phone Number"
                                name="number"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                required
                                onChange={handleChange}
                                sx={{
                                    width: '100%',
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: 10,
                                    },
                                    '& .MuiOutlinedInput-input': {
                                        borderRadius: 10,
                                    },
                                }}
                            />
                        </Grid2>
                    </Grid2>
                    <TextField
                        label="Username"
                        name="username"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        required
                        onChange={handleChange}
                        sx={{
                            width: '70%',
                            '& .MuiOutlinedInput-root': {
                              borderRadius: 10,
                            },
                            '& .MuiOutlinedInput-input': {
                              borderRadius: 10,
                            },
                          }}
                    />
                    <TextField
                        label="Password"
                        name="password"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        required
                        type="password"
                        onChange={handleChange}
                        sx={{
                            width: '70%',
                            '& .MuiOutlinedInput-root': {
                              borderRadius: 10,
                            },
                            '& .MuiOutlinedInput-input': {
                              borderRadius: 10,
                            },
                          }}
                    />
                    <TextField
                        label="Confirm Password"
                        name="confirm"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        required
                        type="password"
                        onChange={handleChange}
                        sx={{
                            width: '70%',
                            '& .MuiOutlinedInput-root': {
                              borderRadius: 10,
                            },
                            '& .MuiOutlinedInput-input': {
                              borderRadius: 10,
                            },
                          }}
                    />
                    <Grid2 
                        container 
                        spacing={5}
                        sx={{
                            display: 'flex',
                            width: "100%",
                            justifyContent: 'center',
                            alignItems: 'center',
                            mt: 1
                        }}
                    >
                       <Grid2 item>
                            <Button
                                variant="contained"
                                sx={{
                                    fontSize: 16,
                                    borderRadius: '50px',
                                    width: '120px'
                                }}
                            >
                                Sign Up
                            </Button>
                       </Grid2>
                       <Grid2>
                            <Button
                                variant="contained"
                                sx={{
                                    fontSize: 16,
                                    borderRadius: "50px",
                                    width: '120px'
                                }}
                                onClick={goToLogin}
                            >
                                Login
                            </Button>
                       </Grid2>
                    </Grid2>
                </Box>
            </Container>
        </>
    );
}
