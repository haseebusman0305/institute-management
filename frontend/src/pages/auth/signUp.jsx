import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { setToken } from '../../utils/auth';
import { useAuth } from '../../context/auth';
import { Typography, Button, Input } from '@mui/material'; // Import Material-UI components as needed

const SignUp = () => {
    const navigate = useNavigate();
    const ApiEndpoint = import.meta.env.VITE_API_ENDPOINT || "http://localhost:4000";
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setAuth } = useAuth();
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${ApiEndpoint}/signup`, { name, email, password });
            setToken(res.data.token);
            setAuth(true);
            setError(null);
            navigate('/');
        } catch (error) {
            console.log(error);
            setError('Sign up failed. Please try again.');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <Typography variant="h4" className="font-bold mb-6">
                    Sign Up
                </Typography>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <Typography htmlFor="name" variant="body1">
                            Name
                        </Typography>
                        <Input
                            type="text"
                            id="name"
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <Typography htmlFor="email" variant="body1">
                            Email
                        </Typography>
                        <Input
                            type="email"
                            id="email"
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <Typography htmlFor="password" variant="body1">
                            Password
                        </Typography>
                        <Input
                            type="password"
                            id="password"
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {error && <Typography variant="body2" className="text-red-500">{error}</Typography>}
                    <Button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Sign Up
                    </Button>
                </form>
                <Typography className="mt-4 text-sm text-gray-600">
                    Already have an account?{' '}
                    <Link to="/login" className="text-blue-500 hover:underline">
                        Login
                    </Link>
                </Typography>
            </div>
        </div>
    );
}

export default SignUp;
