import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const { login } = useAuth()

    const submithandler = (e) => {
        e.preventDefault();
        try {
            setError('');
            setLoading(true);
            login(email, password);
            setEmail('')
            setPassword('')

        } catch (e) {
            console.log(e.message)
            setError(e.message)
            setLoading(false)
        }
    }

    return (
        <>
            <form onSubmit={submithandler}>
                <div className='container'>
                    <h3 className='text-center mt-5'>Login to your existing account</h3>
                    <input type="email" placeholder='Enter your Email' value={email} onChange={(e) => setEmail(e.target.value)} className='form-control mt-5' />
                    <input type="password" placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} className='form-control mt-2' />
                    {error && <h4 className='text-danger'>{error}</h4>}
                    <button type='submit' className='form-control btn-primary mt-5' disabled={loading}>Login</button>
                    <h4 className='text-center mt-3'>I have no account <Link to="/signin">Sign Up</Link></h4>
                </div>
            </form>
        </>
    );
}

export default Login;
