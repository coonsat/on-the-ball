import React,  { useContext, useState } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import { Link } from 'react-router-dom';

// Component import
import Form from './Form';

// Other import
import logo from '../resources/images/on-the-ball-cover.jpg';

const Login = () => {
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState('');

    const handleChange = () => {};

    const submit = () => {
        console.log('Sign in');
    }

    return (
        <div className="container">
            <div className="main">
                <div className="login-container">
                    <div className="login-contents-wrapper">
                        <div className="login-contents">
                            <img className="logo" src={logo} />
                            <div className="aux-text">
                                <h2>On The Ball</h2>
                                <p>Observe. Plan. Execute</p>
                            </div>
                            <Form
                            errors={errors}
                            submit={() => submit}
                            submitButtonText={"Sign in"}
                            elements={() => (
                                <Fragment>
                                        <label htmlFor="emailAddress">Email Address</label>
                                        <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={emailAddress}
                                        onChange={handleChange}
                                        placeholder="Email" />

                                        <label htmlFor="password">Password</label> 
                                        <input 
                                        id="password"
                                        name="password"
                                        type="password"
                                        value={password}
                                        onChange={handleChange}
                                        placeholder="Password" />
                                </Fragment>
                            )}
                            >
                            </Form>
                            <div className="aux-text">
                                <p>Don't have an account?</p>
                                <Link to="/signup">Create one!</Link>
                            </div>
                        </div>
                    </div>
                </div>            
            </div>
        </div>
        
    )
}

export default Login;
