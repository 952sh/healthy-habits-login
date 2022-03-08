import {useRef, useState, useEffect} from 'react';
import './Login.css';

const Login = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const[password, setPassword] = useState('');
    const[errorMessage, setError] = useState('');
    const[login, setLogin] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, []
    )

    useEffect(() => {
        setError('');
    }, [user,password]
    )

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user, password);
        setUser('');
        setPassword('');
        setLogin(true);
    }

    return(
        <>
        <div>
            <h1>Healthy Habits Tracker</h1>
        </div>
        <img className='login-img' src='img/heartHealthy.jpg' alt='Heart Healthy.' />
            {login ? (
                <section>
                    {/* Add router link to Profile page here!!! */}
                    <p>Placeholder for successful login.</p>
                </section>) : (

        <section>
            <p ref={errRef} className={errorMessage ? "errorMessage" : "offscreen"}
            aria-live="assertive">{errorMessage}</p>
            <div className='login-content'>
            <form onSubmit={handleSubmit} className='form'>
                <h2>Login:</h2>
                <label htmlFor='username' className='login-label'>Username: </label>
                <input 
                    className='login-inputs'
                    type='text' 
                    id='username' 
                    ref={userRef} 
                    autoComplete='off'
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required>
                </input>

                <label htmlFor='password' className='login-label'>Password: </label>
                <input 
                    className='login-inputs'
                    type='password' 
                    id='password' 
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required>
                </input>

                <button className='login-btn'>Login</button>

                <p>
                <span className='login-act-btn' type='submit'>
                    Need to create an account? Click
                    {/* add router link to Create Account page here!!! */}
                    <a href='create account page'> here</a>
                </span>
            </p>
            </form>
            </div>

            

        </section>
    )}
    </>
    )
}
export default Login

