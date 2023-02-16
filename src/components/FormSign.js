import React, { useState, useEffect } from 'react';
import '../styles/signup.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import useForm from '../pages/signup/hooks/useForm';
import validate from '../pages/signup/validateInfo';
import '../styles/signup.css';
import { AuthState } from '../context/AuthProvider';
import { useNavigate } from 'react-router-dom';


const FormSign = () => {
    const { createUser, user, setLoading, displayUser } = AuthState();

    const navigate = useNavigate();

    const [values, setValues] = useState({
        name: '',
        email: '',
        photoUrl: '',
        password: '',

    });
    const [errors, setErrors] = useState({});

    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();

        // 
        // setErrors(validate(values));
        // setIsSubmitting(true);
        // console.log(values.name, values.email, values.password);



        const email = values.email;
        const password = values.password;


        createUser(email, password)
            .then((res) => {
                const user = res.user;
                console.log(user);

                setValues({
                    name: '',
                    email: '',
                    photoUrl: '',
                    password: '',
                });
                handleUpdateUser();
                navigate('/');
            })
            .catch((err) => {
                setError(err.messege);
                console.log(err.messege);
            })
            .finally(() => {
                setLoading(false);
            })



    };


    const handleUpdateUser = () => {
        const name = values.name;
        const photoUrl = values.photoUrl;
        console.log(name, photoUrl);
        const profile = {
            displayName: name,
            photoURL: photoUrl
        };


        displayUser(profile)
            .then(() => { })
            .catch(err => console.error(err))
    }


    useEffect(
        () => {
            if (Object.keys(errors).length === 0 && isSubmitting) {

            }
        },
        [errors]
    );

    const submitForm = (e) => {
        console.log('you are succed');
    }
    const succesMessege = () => {
        return (
            <div className="success">
                <h3>You have successfully registered</h3>
            </div>
        );
    };
    return (
        <div className="sign-form">

            <div className="err_msg">
                <h2 className="text-center text-dark fw-bold fs-2">{error}</h2>

            </div>
            <Form onSubmit={handleSubmit} noValidate>
                <Row>
                    <Col md={6}>
                        <Form.Group className='mb-3' controlId="formBasicText">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Name"
                                id="name"
                                name='name'
                                value={values.name}
                                onChange={handleChange}
                            />
                            {errors.name && <p className="error">{errors.name} </p>}
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className='mb-3' controlId="formBasicEmail">
                            <Form.Label>Email </Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Email"
                                name='email'
                                value={values.email}
                                onChange={handleChange}
                            />
                            {errors.email && <p className="error">{errors.email} </p>}
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group className='mb-3' controlId="formBasicPassword">
                    <Form.Label> PhotoUrl</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="photo url"
                        name='photoUrl'
                        value={values.photoUrl}
                        onChange={handleChange}
                    />
                    {errors.confirmPassword && <p className="error">{errors.confirmPassword} </p>}
                </Form.Group>
                <Form.Group className='mb-3' controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name='password'
                        value={values.password}
                        onChange={handleChange}

                    />
                    {errors.password && <p className="error">{errors.password} </p>}
                </Form.Group>

                <div className="add-link">

                    <span className='helper-text'>Have an account?</span>
                    <a href="#">Log in</a>
                </div>
                <div className="sub-btn-area">
                    <Button className="sub-btn" type='submit'>Submit </Button>
                </div>
            </Form>
        </div>
    );
}

export default FormSign
