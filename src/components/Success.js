import { useAuth } from '../context/AuthContext';

const Success = () => {
    const { currentUser } = useAuth()
    const logined = currentUser.metadata

    return (
        <>
            <h1 className='text-bold text-center mt-5'>Congrats! <span className='text-danger'>{currentUser.displayName}</span> <br /> <p className='mt-3'>you can create your account successfully</p></h1>
            <br />
            <br />
            <br />
            <div className='container'>
                <h2 className='text-center mb-3'>Your Account Status:-</h2>
                <h4> User Id: {currentUser.uid}</h4>
                <h4> Account Name: {currentUser.displayName}</h4>
                <h4> Email: {currentUser.email}</h4>
                <h4> Email Verified: {currentUser.emailVerified === false ? ('Not Verified') : ('Verified')}</h4>
                <h4> Created At: {logined.creationTime}</h4>
                <h4> Last login: {logined.lastSignInTime}</h4>
            </div>
        </>
    );
}

export default Success;
