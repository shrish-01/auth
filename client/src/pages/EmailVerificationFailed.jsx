import { useNavigate } from 'react-router-dom';

export const EmailVerificationFailed = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Oppsiee!</h1>
            <p>
                Encountered some issues while verifying your email..
            </p>
            <button onClick={() => navigate('/signup')}>Signup again!</button>
        </div>
    )
}