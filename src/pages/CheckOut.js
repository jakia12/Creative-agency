import React from 'react'
import { useLoaderData } from 'react-router-dom';
import { AuthState } from '../context/AuthProvider';
import { getSingleService } from '../utils/api';
import { CatBanner } from './Services'

const CheckOut = () => {
    const { _id, title, name, price } = useLoaderData();

    //user global data
    const { user, loader } = AuthState();

    const handleCheckout = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = `${form.firstName.value} ${form.lastName.value} `;
        const email = user?.email || 'unregistered';
        const messege = form.messege.value;
        const phone = form.phone.value;

        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            messege
        }

        //send data to the database
        fetch('https://creeativeagency-server.vercel.app/ orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Order placed successfully')
                    form.reset();

                }
            })
            .catch(er => console.error(er));


    }



    return (
        <div>
            <CatBanner />
            <h1 className='text-center fs-3 fw-semibold py-5 '>{title} </h1>
            <h3 className='text-center fs-4 fw-base pb-3 '>Price: ${price} </h3>


            {/* form data */}
            <div className="form_wrapper mx-auto my-5">
                <form onSubmit={handleCheckout} action="">

                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">First name </label>
                        <input
                            name="firstName"
                            type="text" className="form-control" id="exampleFormControlInput1" placeholder="First name" required />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">last Name</label>
                        <input
                            name="lastName"
                            type="text" className="form-control" id="exampleFormControlInput1" placeholder="last name" required />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Phone number</label>
                        <input
                            name="phone"
                            type="text" className="form-control" id="exampleFormControlInput1" placeholder="phone number" required />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Your email</label>
                        <input
                            name="email"
                            defaultValue={user?.email}
                            type="text" className="form-control" id="exampleFormControlInput1" placeholder="Your email"
                            readOnly
                        />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Your Messege</label>
                        <textarea
                            name="messege"

                            type="text" className="form-control" id="exampleFormControlInput1" placeholder="Your messege"
                            required
                        >


                        </textarea>
                    </div>
                    <div className="text-center btn btn-primary w-100">
                        <button type='submit' className="text-white  check_btn fw-normal fs-5 btn btn-primary">Check out</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default CheckOut;

export const loader = ({ params }) => {
    const uId = params.id;
    return getSingleService(uId);
}
