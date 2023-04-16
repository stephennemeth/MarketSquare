import { Navbar } from '../components/Navbar';
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

