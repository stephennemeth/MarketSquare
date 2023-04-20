import { Navbar } from '../components/Navbar';

import '../css/signup.css'
import SignUpForm from '../components/SignUpForm';
export default function SignUpPage({ authState, setAuthState, setDarkMode, darkMode}) {

    return (
    <>
        <Navbar setDarkMode={setDarkMode} authState={authState} setAuthState={setAuthState} />
        <SignUpForm authState={authState} setAuthState={setAuthState} setDarkMode={setDarkMode} darkMode={darkMode} />
    </>
    );
}
