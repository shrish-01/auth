import { Layout } from '../Layout';
import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';
import {SampleSheetPage} from './pages/SampleSheetPage';
import { PleaseVerifyEmailPage } from './pages/PleaseVerifyEmailPage';
import { EmailVerificationLandingPage } from './pages/EmaillVerificationLandingPage';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signup' element={<SignupPage />} />
            <Route path='/sampleSheetPage' element={<SampleSheetPage />} />
            <Route path='/verifyEmailPage' element={<PleaseVerifyEmailPage />} />
            <Route path='/verify-email/:verificationString' element={<EmailVerificationLandingPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
