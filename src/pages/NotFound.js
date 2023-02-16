import React from 'react';
import '../index.css';
import {Link} from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found-wrapper"> 
        <div className="not-found-content">
            <h2> 404</h2>
            <h3>page not found</h3>
            <Link to="/" ><button className='nomatch-btn'> Go to Home</button></Link>
        </div>
    </div>
  );
}

export default NotFound
