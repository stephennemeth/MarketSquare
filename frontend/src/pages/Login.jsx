import { Navbar } from '../components/Navbar';
import '../css/login.css'
import LoginForm from '../components/LoginForm';
export default function Login({ authState, setAuthState, setDarkMode, darkMode}) {

    return (
        <>
            <Navbar setDarkMode={setDarkMode} authState={authState} setAuthState={setAuthState} />
            <LoginForm />
        </>
    );
}

