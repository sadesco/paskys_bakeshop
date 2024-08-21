/*
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector} from 'react-redux'
import Loader from '../components/Loader';
import Message from '../components/Message';
import FormContainer from '../components/FormContainer';
import { login } from '../actions/userActions'
import '../css/LoginScreen.css' 

function LoginScreen({location, history}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const redirect = location.search ? location.search.split('=')[1] : '/'


    const submitHandler = (e) => {
        e.preventDefault()
        // Dispatch login action here
        console.log('Submitted')
    }

    return (
    <FormContainer>
      <h1>Sign In</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='email'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
                type='email'
                placeholder='Enter Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            >

            </Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control
                type='password'
                placeholder='Enter Password'
                value={email}
                onChange={(e) => setPassword(e.target.value)}
            >
                
            </Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary' className='mt-3'>
            Sign In 
        </Button>

      </Form>


        <Row className='py-3'>
            <Col>
                New Customer? <Link 
                to={redirect ? `/register?redirect=${redirect}`: `/register`}>
                    Register
                </Link>    

            </Col>
        </Row> 

    </FormContainer>
  )
}

export default LoginScreen


import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate
import { useDispatch, useSelector} from 'react-redux'
import { Form, Button, Row, Col } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import '../css/LoginScreen.css';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { login } from '../actions/userActions'

function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch()

    const location = useLocation(); // Using the useLocation hook
    const navigate = useNavigate(); // Use useNavigate for navigation

    const redirect = location.search ? location.search.split('=')[1] : '/';

    const userLogin = useSelector(state => state.userLogin)
    const {error,loading, userInfo} = userLogin

    useEffect(()=> {
        if(userInfo){
            history.push(redirect)
        }
    }[history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault();
        // Dispatch login action here
        dispatch(login(email,password))
    };

    return (
        <FormContainer>
            <h1>Sign In</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Enter Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Enter Password'
                        value={password} // Corrected to use password state
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>

                <Button type='submit' variant='primary' className='mt-3'>
                    Sign In
                </Button>
            </Form>

            <Row className='py-3'>
                <Col>
                    New Customer?{' '}
                    <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
                        Register
                    </Link>
                </Col>
            </Row>
        </FormContainer>
    );
}

export default LoginScreen;

import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button, Row, Col } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import '../css/LoginScreen.css';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { login } from '../actions/userActions';

function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const location = useLocation(); // Using the useLocation hook
    const navigate = useNavigate(); // Use useNavigate for navigation

    const redirect = location.search ? location.search.split('=')[1] : '/';

    const userLogin = useSelector((state) => state.userLogin);
    const { error, loading, userInfo } = userLogin;

    useEffect(() => {
        if (userInfo) {
            navigate(redirect); // Use navigate instead of history.push
        }
    }, [navigate, userInfo, redirect]); // Corrected dependency array

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password)); // Dispatch login action here
    };

    return (
        <FormContainer>
            <h1>Sign In</h1>
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Enter Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Enter Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>

                <Button type='submit' variant='primary' className='mt-3'>
                    Sign In
                </Button>
            </Form>

            <Row className='py-3'>
                <Col>
                    New Customer?{' '}
                    <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
                        Register
                    </Link>
                </Col>
            </Row>
        </FormContainer>
    );
}

export default LoginScreen;
*/

import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // Updated imports
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import Message from '../components/Message';
import FormContainer from '../components/FormContainer';
import { login } from '../actions/userActions';

function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate(); // Use useNavigate for navigation
    const location = useLocation(); // Use useLocation for getting the query parameters

    const redirect = location.search ? location.search.split('=')[1] : '/';

    const userLogin = useSelector(state => state.userLogin);
    const { error, loading, userInfo } = userLogin;

    useEffect(() => {
        if (userInfo) {
            navigate(redirect); // Use navigate instead of history.push
        }
    }, [navigate, userInfo, redirect]); // Corrected dependencies

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password));
    };

    return (
        <FormContainer>
            <h1>Sign In</h1>
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Enter Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Enter Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>

                <Button type='submit' variant='primary'>
                    Sign In
                </Button>
            </Form>

            <Row className='py-3'>
                <Col>
                    New Customer?{' '}
                    <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
                        Register
                    </Link>
                </Col>
            </Row>
        </FormContainer>
    );
}

export default LoginScreen;
