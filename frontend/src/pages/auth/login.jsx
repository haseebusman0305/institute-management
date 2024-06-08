import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { setToken } from '../../utils/auth';
import { useAuth } from '../../context/auth';
import { Button, Input, Typography, Link } from '@mui/material'; // Import Material-UI components as needed

const Login = () => {
    const ApiUrl = import.meta.env.VITE_API_ENDPOINT || "http://localhost:4000";
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setAuth } = useAuth();
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${ApiUrl}/login`, { email, password });
            setToken(res.data.token);
            setAuth(true);
            setError(null);
            navigate('/');
        } catch (err) {
            console.error(err);
            setError(err.response?.data?.message || 'Login failed. Please try again.');
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="mx-auto w-full max-w-[480px] rounded-2xl bg-white p-8 shadow-lg">
                <div className="mb-8 flex items-center justify-center">
                    <RouterLink to="#" prefetch={false}>
                        {/* Replace MountainIcon with your actual icon component */}
                        <img src="mountain-icon.svg" alt="Mountain Icon" className="h-8 w-8 text-gray-900" />
                    </RouterLink>
                </div>
                <div className="space-y-6">
                    <div className="space-y-3 text-center">
                        <Typography variant="h4" className="font-bold">
                            Welcome back
                        </Typography>
                        <Typography variant="body1" className="text-gray-500">
                            Enter your credentials to sign in.
                        </Typography>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-3">
                            <Typography htmlFor="username" variant="body1">
                                Username
                            </Typography>
                            <Input
                                id="username"
                                placeholder="Enter your username"
                                className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <Typography htmlFor="password" variant="body1">
                                    Password
                                </Typography>
                                <Link component={RouterLink} to="#" variant="body2" className="font-medium text-gray-900 hover:underline">
                                    Forgot password?
                                </Link>
                            </div>
                            <Input
                                id="password"
                                type="password"
                                placeholder="Enter your password"
                                className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        {error && <Typography variant="body2" className="text-red-500">{error}</Typography>}
                        <Button
                            type="submit"
                            className="w-full rounded-lg bg-gray-900 text-white py-3 font-medium hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900"
                        >
                            Sign in
                        </Button>
                    </form>
                    <Typography className="text-center text-gray-500">
                        Don't have an account?{' '}
                        <Link component={RouterLink} to="/signup" variant="body2" className="font-medium text-gray-900 hover:underline">
                            Sign up
                        </Link>
                    </Typography>
                </div>
            </div>
        </div>
    );
};

export default Login;
    