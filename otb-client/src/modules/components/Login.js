import React,  { useContext, useState, useRef } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import { Link } from 'react-router-dom';

// Component import
import Context from '../context/index';
import Form from './Form';

// Other import
import logo from '../resources/images/on-the-ball-cover.jpg';

const Login = () => {
    const context = useContext(Context.Context);
    const emailAddress = useRef();
    const password = useRef();
    const [errors, setErrors] = useState('');
    const user = {};

    const handleChange = (variable) => {
        const name = variable.current.id;
        const value = variable.current.value;
        user[name] = value;
    };

    const submit = event => {
        event.preventDefault();
        
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
                                        id="emailAddress"
                                        name="emailAddress"
                                        type="email"
                                        ref={emailAddress}
                                        onChange={() => handleChange(emailAddress)}
                                        placeholder="Email" />

                                        <label htmlFor="password">Password</label> 
                                        <input 
                                        id="password"
                                        name="password"
                                        type="password"
                                        ref={password}
                                        onChange={() => handleChange(password)}
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
