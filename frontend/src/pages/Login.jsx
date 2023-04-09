import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Login({ authState, setAuthState }) {
    const navigate = useNavigate();
            // TODO: Handle authentication
    return (
        <div>
            <h1>Login</h1>
            <p>authState: {authState.toString()}</p>
            <Button color="inherit" variant="outlined" onClick={() => setAuthState(!authState)}>Debug: Toggle authState</Button>
            <Button color="inherit" variant="outlined" onClick={() => navigate('/')}>Back Home</Button>
        </div>
    );
}

export default Login;