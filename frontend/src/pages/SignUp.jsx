import { useState } from 'react'
import { Button, Typography, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Container} from '@mui/system';
import { Navbar } from '../components/Navbar';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

import '../css/signup.css'
import SignUpForm from '../components/SignUpForm';
export default function SignUpPage({ authState, setAuthState, setDarkMode}) {

    return (
    <>
        <Navbar setDarkMode={setDarkMode} authState={authState} setAuthState={setAuthState} />
        <SignUpForm authState={authState} setAuthState={setAuthState} setDarkMode={setDarkMode} />
    </>
    );
}
