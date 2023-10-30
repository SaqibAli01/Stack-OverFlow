
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AppBar from './pages/AppBar';
import Homes from './pages/Homes';
import Footer from './components/Footer/Footer';
import SignUp from './components/User/SignUp';
import VerificationCode from './components/User/VerificationCode';
import ReSendVerifyCode from './components/User/ReSendVerifyCode';
import SignIn from './components/User/SignIn';
import Profile from './components/User/Profile';

function App() {
  return (
    
    <BrowserRouter>
    <AppBar/>
      <Routes>
          <Route path="/" element={<Homes />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/verificationCode" element={<VerificationCode />} />
          <Route path="/ReSendVerifyCode" element={<ReSendVerifyCode />} />
          <Route path="/accounts" element={<Profile />} />

      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
