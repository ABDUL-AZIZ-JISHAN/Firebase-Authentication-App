
import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Auth from './Auth';
const SignIn = () => {
    const { signup } = useAuth()

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmPassword] = useState('')
    const [agree, setAgree] = useState(true)

    const submithandler = (e) => {
        e.preventDefault();
        if (password !== confirmpassword) {
            setError(`password doesn't match`)
        }
        else if (agree === false) {
            setError(`you have to agreed all terms and conditions`)
        }
        try {
            setError('');
            setLoading(true);
            signup(email, password, name);
            setAgree(false)
            setEmail('')
            setPassword('')
            setConfirmPassword('')
            setName('')

        } catch (e) {
            console.log(e.message)
            setError(e.message)
            setLoading(false)
        }
        <Navigate to='/success' replace />
    }
    return (
        <>
            <form onSubmit={submithandler}>
                <div className='container'>
                    <h2 className='text-center my-2'>Sign in for new account</h2>
                    <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} required placeholder='Enter your Name' className='form-control mr-5 mt-5 ' />
                    <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} required placeholder='Enter your Email' className='form-control mr-5 my-2 ' />
                    <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} required placeholder='Enter password' className='form-control mr-5 my-2 ' />
                    <input type="password" required value={confirmpassword} onChange={(e) => { setConfirmPassword(e.target.value) }} placeholder='Confirm password' className='form-control mr-5 my-2 ' />
                    <input type="checkbox" checked={agree} onChange={(e) => { setAgree(e.target.checked) }} required className='mt-3 mb-3' /> I agree to all terms and conditons
                    {error && <h4 className='text-danger '>{error}</h4>}
                    <button type='submit' disabled={loading} className='btn-primary form-control' >Create Account</button>
                </div>
            </form>
            <p className='text-center my-4'>Already have an account <Link className='d-inline-block' to="/login">Log in</Link></p>
            <br />
            <br />
            <br />
            <Auth />
        </>
    );
}

export default SignIn;
