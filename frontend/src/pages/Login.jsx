import { useState } from 'react'
import { Button, FormControl, InputLabel, Box, Typography, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FormLabel } from 'react-bootstrap';
import { Container, fontSize } from '@mui/system';
import { Navbar } from '../components/Navbar';
import { MaterialUISwitch } from "../components/Switch";
import { NavbarMenu } from "../components/NavbarMenu";
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

export default function Login({ authState, setAuthState }) {
    const navigate = useNavigate();
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

    const onSubmit = async () => {
        return
    }

    const goToSignUp = () => {
        navigate("/signup")
    }

    return (
        <>
            <Navbar />
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
                        maxWidth: '50%',
                        border: '2px solid #3f51b5',
                        borderRadius: 5,
                        padding: 5,
                    }}
                >
                    <Typography
                        variant="h4"
                    >
                        Login
                    </Typography>
                    <TextField
                        label="Username"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        required
                        onChange={handleChange}
                        sx={{
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
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        required
                        type="password"
                        onChange={handleChange}
                        sx={{
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
                                Login
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
                                onClick={goToSignUp}
                            >
                                Sign Up
                            </Button>
                       </Grid2>
                    </Grid2>
                </Box>
            </Container>
        </>
    );
}

