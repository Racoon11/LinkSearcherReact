import React, { useState } from 'react';
import { generateToken, setToken } from "../../auth";
import { useNavigate } from 'react-router-dom';

export function LoginScreen() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (username === '' || password === '') {
            setError('Please enter login and password');
            return;
        }

        // Проверяем логин/пароль
        if (username === 'admin' && password === 'admin') {
            const token = generateToken();
            setToken(token);
            navigate('/admin'); // перенаправляем на главную
        } else {
            setError('Incorrect login or password');
        }
    };

    return (
    <div className="container">
        <div className="row">
            <div className="col-4"></div>
            <div className="col-4">
                <h3>Admin login Form</h3>
            </div>
        </div>
        <div className="row">
            <div className="col-4"></div>
            <div className="col-4">
                {error && (
                    <p className="error">
                        {error}
                    </p>
                )}
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email-label" className="form-label">Email address</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="email-label"
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password-label" className="form-label">Password</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            id="password-label" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            <div className="col-4"></div>
        </div>
    </div>
    );
}