import { } from 'firebase/auth'
import React from 'react'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { AuthState } from '../../context/AuthProvider'
import { CatBanner } from '../Services'

const Login = () => {
    const { login, user, setLoading } = AuthState();

    //error handling state

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [errordata, setErrordata] = useState('');

    const [values, setValues] = useState({
        name: '',
        email: '',
        photoUrl: '',
        password: '',

    });

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = values.email;
        const password = values.password;
        console.log(email, password);
        login(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                // setValues({
                //     email: '',
                //     password: ''
                // });
                // navigate(from, { replace: true });
                const currentUser = {
                    email: user.email,

                };
                console.log(currentUser);
                fetch('https://creeativeagency-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then((response) => {
                        // if (!response.ok) {
                        //     throw new Error("HTTP error " + response.status);
                        // }
                        return response.json();
                    })
                    .then(data => {
                        if (data.status === 'success')
                            alert(data.message)
                        else
                            alert('something went wrong :(')
                        console.log(data);
                        // local storage is the easiest but not the best place to store jwt token
                        localStorage.setItem('genius-token', data.token);

                    })
                    .catch(err => console.log(err))

            })
            .catch((err) => {
                console.log(err);
                setErrordata(err.messege);
                console.log(errordata);
            })
            .finally(() => {
                setLoading(false);
            })

    }

    return (
        <section className='login_section py-5 my-5'>
            <CatBanner />
            <div className="container">

                <div className="form_wrapper mx-auto my-5">
                    <div className="error_msg">
                        <h2 className="text-center fs-3 fw-base text-dark">
                            {errordata}
                        </h2>
                    </div>
                    <form onSubmit={handleSubmit} action="">



                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Your email</label>

                            <input
                                type="text"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                className="form-control" id="exampleFormControlInput1" placeholder="Your email" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Your Password </label>
                            <input
                                type="password"
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                                class="form-control" id="exampleFormControlInput1" placeholder="phone number"
                            />
                        </div>
                        <div className="text-center btn btn-primary w-100">
                            <button type='submit' className="text-white  check_btn fw-normal fs-5"> Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Login




