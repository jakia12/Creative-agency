import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { AuthState } from '../../context/AuthProvider'
import { CatBanner } from '../Services';

const Orders = () => {
    const { user, logout } = AuthState();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`https://creeativeagency-server.vercel.app/orders?email=${user?.email}`, {

        })
            .then(res =>
                res.json()
            )
            .then(data => {
                setOrders(data);
            })


    }, []);

    const handleDelete = (order) => {
        const agree = window.confirm(`are you sure you want to delete ${order.serviceName}`);

        if (agree) {
            fetch(`https://creeativeagency-server.vercel.app/orders/${order._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = orders.filter((odr) => odr._id !== order._id);
                        console.log(remaining);
                        setOrders(remaining);
                    }
                })

        }
    }

    //update the orders

    const handleStatusUpdate = (id) => {
        fetch(`https://creeativeagency-server.vercel.app/orders/${id}`, {
            method: 'PATCH',
            headers: {
                'Content_Type': 'application/json'
            },
            body: JSON.stringify({ status: 'Approved' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if (data.matchedCount > 0) {
                    //     const remaining = orders.filter(odr => odr._id !== id);
                    //     const approving = orders.find(odr => odr._id === id);
                    //     approving.status = 'Approved'

                    //     const newOrders = [approving, ...remaining];
                    //     setOrders(newOrders);

                    const remaining = orders.filter((order) => order._id !== id);
                    const approving = orders.find(order => order._id === id);
                    approving.status = 'Approved';
                    const newOrders = [approving, ...remaining];

                    console.log(remaining, approving);
                    setOrders(newOrders);

                }
            })
    }

    return (
        <div className='orders_section'>
            <CatBanner />
            <h2 className="text-center fw-base fs-3">Orders</h2>

            <div className="container">
                <div className="row">
                    <div className="col-md-12 ">
                        {orders.map((order) => (
                            <div className="d-flex align-items-center gap-20 my-3">
                                <span className="customer me-5">{order.customer}</span>
                                <span className="name me-5">{order.serviceName}</span>
                                <span className="price me-5"> {order.price}</span>

                                <button
                                    className="btn btn-warning text-white me-5"
                                    onClick={() => handleStatusUpdate(order._id)}
                                >{order.status ? order.status : 'pending'}</button>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => handleDelete(order)}
                                >Delete</button>
                                <hr className='bg-light' />
                            </div>
                        ))

                        }
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Orders
