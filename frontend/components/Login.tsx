import React, { useState } from 'react';
import { loginUser } from '../services/apiService';

const LoginComponent = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginData, setLoginData] = useState<any>(null);
    const [error, setError] = useState<string>('');

    const handleLogin = async () => {
        try {
            const data = await loginUser(email, password);
            setLoginData(data);
            setError('');
        } catch (err: any) {
            setError(err.toString());
            setLoginData(null);
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <button onClick={handleLogin}>Login</button>
            {loginData && (
                <div>
                    <h3>Login Successful</h3>
                    <pre>{JSON.stringify(loginData, null, 2)}</pre>
                </div>
            )}
            {error && (
                <div>
                    <h3>Error</h3>
                    <p>{error}</p>
                </div>
            )}
        </div>
    );
};

export default LoginComponent;
