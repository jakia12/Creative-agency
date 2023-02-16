import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';
import Logo from '../images/plogo.png';
import { AuthState } from '../context/AuthProvider';


function Header() {
  const { user, logout, setLoading, loading } = AuthState();

  const handleLogout = () => {
    logout()
      .then()
      .catch()
      .finally(() => {
        setLoading(false);
      })


  }
  return (
    <header className='header'>
      <div className="header-container">
        <nav className='navbar'>

          <div className="left-side">
            <Link to='/' > <img src={Logo} alt="" /></Link>
          </div>
          <div className="right-side">
            <ul className='main-menu' >
              <li>
                <Link className='item' to="/">Home</Link>
              </li>
              <li>
                <Link className='item' to="/services"> Services</Link>
              </li>
              <li>
                <Link className='item' to="/orders"> Orders</Link>
              </li>
              <li>
                <Link className='item' to="/signup">Sign up </Link>
              </li>

              {
                user?.uid ? (<li>
                  <button
                    className="btn btn-primary"
                    onClick={handleLogout}
                  >Logout</button>
                </li>) :
                  (<li>
                    <Link className='item' to="/login">Login </Link>
                  </li>)
              }


              {
                user?.uid ? (<li>
                  <img src={user.displayName} alt="" className="img-fluid rounded-circle" width="56px" height="56px" />
                </li>) :
                  ''
              }

            </ul>
          </div>

        </nav>

      </div>
    </header>

  )
}

export default Header
