import Login from './components/authentication/Login';
import Signup from './components/authentication/Signup';
import VerifyEmailCode from './components/authentication/VerifyEmailCode';
import ResendEmailVerifyCode from './components/authentication/ResendEmailVerifyCode';
import ForgotPassword from './components/authentication/ForgotPassword';
import ValidateForgotPasswordToken from './components/authentication/ValidateForgotPasswordToken'
import ConfirmForgotPassword from './components/authentication/ConfirmForgotPassword'
import FacebookConnect from './components/social/FacebookConnect'
import InstagramConnect from './components/social/InstagramConnect';
import AllSocialApps from './components/social/AllSocialApps';

import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='signup' element={<Signup/>}></Route>
          <Route path='verify-email-code' element={<VerifyEmailCode/>}></Route>
          <Route path='resend-email-verify-code' element={<ResendEmailVerifyCode/>}></Route>
          <Route path='forgot-password' element={<ForgotPassword/>}></Route>
          <Route path='validate-forgot-password-token' element={<ValidateForgotPasswordToken/>}></Route>
          <Route path='confirm-forgot-password' element={<ConfirmForgotPassword/>}></Route>
          <Route path='insta' element={<InstagramConnect />}></Route>
          <Route path="facebook" element={<FacebookConnect />}></Route>
          <Route path="all-social-apps" element={<AllSocialApps />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;