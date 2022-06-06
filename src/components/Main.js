import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Main = () => {
    const { currentUser } = useAuth()
    return (
        <>
            <div className="container p-5">
                <h1 className="text-center">React User Authentication Using Firebase</h1>
                <br />
                <br />
                <h4 className="text-center">
                    By using this app user can create account directly only using their
                    email adress
                </h4>
                <h4 className="text-center">
                    They can also create account via google , facebook and github only one click
                </h4>
                <div className='d-flex justify-content-center mt-5'>
                    {currentUser ? <Link to='/success' className="btn-primary p-2 mt-5">See Account Details</Link> : <Link to='/signin' className="btn-primary p-2 mt-5">Click To SignIn</Link>}
                </div>
            </div>
        </>
    );
}

export default Main;
