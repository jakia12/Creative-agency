import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import FormSign from '../../components/FormSign';
import '../../styles/signup.css';



const SignUp = () => {


    return (

        <>

            <section className="sign-banner sign-banner-bg">
                <div className="banner-content">
                    <ul className='sign-breadcrumb'>
                        <li>
                            <Link className='br-item add-slash ' to='/' >Home </Link>
                        </li>
                        <li>
                            <Link className='br-item' to='/signup' >SignUp</Link>
                        </li>
                    </ul>
                </div>
            </section>

            <section className='sign-bg signUp-area sec-spacing clearfix'>
                <Container>
                    <div className="sign-tite text-center">
                        <h2>Sign Up Now</h2>
                        <p>Lorem ipsum dolor sit imet</p>
                    </div>

                    <FormSign />

                </Container>
            </section>
        </>

    );
}

export default SignUp;

