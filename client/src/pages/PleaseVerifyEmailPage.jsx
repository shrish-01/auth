import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const PleaseVerifyEmailPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/');
        }, 3000);
    }, [navigate]);

    return (
        <div>
            <h1>Thanks for signing up!</h1>
            <p>
                A verification email has been sent to your email address. Please verify your mail for complete access!
            </p>
        </div>
    )
};