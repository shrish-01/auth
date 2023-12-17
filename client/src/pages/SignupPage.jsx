/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useToken } from '../auth/useToken';
import axios from 'axios';

export const SignupPage = () => {
  const [ token, setToken ] = useToken();
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");

  const navigate = useNavigate();

  const onSignupClicked = async () => {
    const response = await axios.post('http://localhost:8080/api/signup', {
      email: emailValue,
      password: passwordValue,
    });

    const { token } = response.data;
    setToken(token);
    navigate('/sampleSheetPage');
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 justify-center items-center py-5">
      <div className="bg-white px-8 pt-6 pb-8 mb-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 rounded-xl shadow-md">
        <h2 className="font-semibold text-2xl text-gray-700 tracking-wide mb-5 text-center">
          Sign Up, Join us!
        </h2>
        <input
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
          type="email"
          placeholder="someone@gmail.com"
          className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4 rounded-xl"
        />
        <input
          value={passwordValue}
          onChange={(e) => setPasswordValue(e.target.value)}
          type="password"
          placeholder="password"
          className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4 rounded-xl"
        />
        <input
          value={confirmPasswordValue}
          onChange={(e) => setConfirmPasswordValue(e.target.value)}
          type="password"
          placeholder="confirm password"
          className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4 rounded-xl"
        />

        {/* <hr /> */}

        <button
          disabled={!emailValue || !passwordValue || passwordValue !== confirmPasswordValue}
          onClick={onSignupClicked}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline w-full mb-4"
        >
          Sign Up
        </button>

        <button className="text-gray-500 hover:text-gray-700 font-bold py-1 px-2 rounded focus:outline-none w-full mb-2">
          Forgot Password?
        </button>
        <Link to='/login'>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline w-full">
            Already a member? Login!
          </button>
        </Link>
      </div>
    </div>
  );
};
