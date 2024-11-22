import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Add your login logic here
        setSuccess(true);
        setTimeout(() => {
            navigate('/home');
        }, 1000);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-pink-500 via-blue-400 to-purple-500 text-white p-4">
            <div className="text-4xl font-bold mt-0 mb-6 text-center">
                <h1 className='mb-2'>Hello, welcome to my React Demo page!</h1>
                <h1>Please login before continue <span className="text-yellow-400">(^_^)</span></h1>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-gray-900 border border-10 border-black">
                <h1 className="text-3xl font-bold mb-4 text-center">Login</h1>
                <form onSubmit={handleLogin}>
                    <div className="relative mb-4">
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full p-2 border border-gray-500 rounded-2xl"
                            required
                        />
                    </div>
                    <div className="relative mb-4">
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-2 border border-gray-500 rounded-2xl"
                            required
                        />
                    </div>
                    <div className='flex justify-center'>
                        <button type="submit" className="flex justify-center bg-blue-500 hover:bg-yellow-400 text-white hover:text-black font-bold py-2 px-4 rounded transform transition-transform hover:scale-110">
                            Login
                        </button>
                    </div>
                </form>
                {success && (
                    <div className="mt-4 text-center text-green-500">
                        Login successful! Redirecting...
                    </div>
                )}
            </div>
        </div>
    );
};

export default Login;