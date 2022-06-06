import { Link } from 'react-router-dom';
import { useAuth } from "../context/AuthContext";

const HelloWorld = () => {
    const { currentUser, logout } = useAuth()
    return (
        <>
            <div className='containerr'>
                <div className='left'>
                    Firebase Authentication App
                </div>
                <div className='right'>
                    {currentUser ? (<> <div className='persons'></div>
                        <h3 className="names">{currentUser.displayName}</h3>
                        <Link to='/' className="log" onClick={logout}>Logout</Link></>) : (<Link to='/login' className="log" onClick={logout}>LogIn</Link>)}
                </div>
            </div>
        </>
    );
}

export default HelloWorld;

