import { useState } from 'react'
import { Button, Typography, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Container } from '@mui/system';
import { Navbar } from '../components/Navbar';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import '../css/login.css'
import LoginForm from '../components/LoginForm';
export default function Login({ authState, setAuthState, setDarkMode}) {

    return (
        <>
            <Navbar setDarkMode={setDarkMode} authState={authState} setAuthState={setAuthState} />
            <LoginForm authState={authState} setAuthState={setAuthState} setDarkMode={setDarkMode} />
        </>
    );
}

