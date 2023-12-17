import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const ForgotPasswordPage = () => {

    const [email, setEmail] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [success, setSuccess] = useState('');

    const navigate = useNavigate();

    return success ? {
        
    }
}
