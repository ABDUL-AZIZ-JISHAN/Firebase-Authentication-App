import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Navigate } from 'react-router-dom';
import Authentication from "../firbase";

const Auth = () => {

    const via = (auth) => {
        const provider = new auth()
        signInWithPopup(Authentication, provider)
            .then((res) => {
                // do anything what you want 
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const signInHandle = (e) => {
        if (e.target.name === 'google') {
            via(GoogleAuthProvider)
        }
        else if (e.target.name === 'facebook') {
            via(FacebookAuthProvider)
        }
        else if (e.target.name === 'github') {
            via(GithubAuthProvider)
        }
        <Navigate to='/success' replace />
    }

    return (
        <>
            <div className='container px-5'>
                <div className='btn-wrapper'>
                    <button type='button' onClick={signInHandle} name='google' className='btn-primary p-2'>Google</button>
                    <button type='button' onClick={signInHandle} name='facebook' className='btn-primary p-2'>Facebook</button>
                    <button type='button' onClick={signInHandle} name='github' className='btn-primary p-2'>Github</button>
                </div>
            </div>
        </>
    );
}

export default Auth;
