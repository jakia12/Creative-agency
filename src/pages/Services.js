import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/category.css';
import { getServices } from '../utils/api';
import { useEffect } from 'react';
import { useState } from 'react';

const Services = () => {
  // const { services, count } = useLoaderData();

  //state for pagination
  const [services, setServices] = useState([]);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  const [count, setCount] = useState(0);

  const pages = Math.ceil(count / size);

  useEffect(() => {
    const url = `https://creeativeagency-server.vercel.app/services?page=${page}&size=${size}`;
    console.log(page, size);
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setServices(data.services);
        setCount(data.count)

      })

  }, [page, size]);

  /**
   * count
   * perpage
   * pages= count/perpage 
   * pages = 6
   * currentpage (page)
   */


  return (
    <>
      <CatBanner />



      <section className="services py-5 ">
        <div className="container">
          <h2 className="fw-semibold fs-3 text-center">Our services</h2>
          <div className="row">
            {
              services.map((service) => (
                <div className="col-md-4" key={service._id}>
                  <div className="card" >
                    <img src={service.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title"> {service.title}</h5>
                      <p className="card-text">${service.price}</p>

                      <Link to={`/checkout/${service._id}`}>
                        <button className="btn btn-primary">Check Out</button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
          <div className="text-center d-flex align-items-center justify-content-center py-5">
            {
              [...Array(pages).keys()].map((number) => (
                <button
                  className={`py-2 px-3 mx-2 border rounded ${page === number ? "bg-primary text-white" : ""}`}
                  key={number}
                  onClick={() => setPage(number)}
                >
                  {number + 1}
                </button>

              ))
            }
            <select name="" id="" onChange={e => setSize(e.target.value)}>
              <option value="5">5</option>
              <option value="10" selected>10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>

          </div>
        </div>
      </section>
    </>


  );
}

export default Services;

export const CatBanner = () => {
  return (
    <section className="cat-banner bg-image">
      <div className="banner-content">
        <h3>Home / Category</h3>
        <Link to="/"> <button className='cta-btn'> Go home</button></Link>
      </div>

    </section>
  );
};



export const loader = () => {
  return getServices();
}


