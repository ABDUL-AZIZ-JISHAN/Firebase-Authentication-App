import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Error from './components/Error';
import HelloWorld from './components/HelloWorld';
import Login from './components/Login';
import Main from './components/Main';
import PrivateRoute from './components/PrivateRoute';
import SignIn from './components/SignIn';
import Success from './components/Success';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <HelloWorld />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/signin' element={<PrivateRoute><SignIn /></PrivateRoute>} />
          <Route path='/login' element={<PrivateRoute><Login /></PrivateRoute>} />
          <Route path='/success' element={<Success />} />
          <Route path='/*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
// <AuthProvider>
//         <HelloWorld />
//         <SignIn/>
//       {/* <Login/> */}
//       </AuthProvider>