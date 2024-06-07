import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { setToken } from '../../utils/auth';
import { useAuth } from '../../context/auth';

const Login = () => {
    const ApiUrl = import.meta.env.VITE_API_ENDPOINT || "http://localhost:4000";
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setAuth } = useAuth();
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        console.log('Login'+import.meta.env.VITE_API_ENDPOINT)
        e.preventDefault();
        try {
            const res = await axios.post(`${ApiUrl}/login`, { email, password });
            setToken(res.data.token);
            setAuth(true);
            setError(null);
            navigate('/');
        } catch (error) {
            console.log(error);
            setError('Login failed. Please try again.');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6">Login</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Login
                    </button>
                </form>
                <p className="mt-4 text-sm text-gray-600">
                    Don't have an account? <Link to="/signup" className="text-blue-500 hover:underline">Sign Up</Link>
                </p>
            </div>
        </div>
    );
}

export default Login;
