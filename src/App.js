import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, RouterProvider, createBrowserRouter, createRoutesFromElements, } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Services, { loader as serviceLoader } from './pages/Services';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Category from './pages/Services';
import Contact from './pages/Contact';
import Clothes from './pages/category/Clothes';
import SignUp from './pages/signup/SignUp.js';
import NotFound from './pages/NotFound';
import Root from './layout/Root';
import CheckOut, { loader as uServiceLoader } from './pages/CheckOut';
import Login from './pages/login/Login';
import PrivateRoute from './routes/PrivateRoute';
import Orders from './pages/orders/Orders';






function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route t="/" element={<Root />}>
      <Route exact path="/" element={<Home />} />

      <Route path="services" element={<Services />} loader={serviceLoader} />

      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/orders" element={<PrivateRoute><Orders /></PrivateRoute>} />

      <Route path="/checkout/:id" element={<PrivateRoute><CheckOut /></PrivateRoute>} loader={uServiceLoader} />
      <Route path="*" element={<NotFound />} />
    </Route>
  ));
  return (

    <div className="App">

      <RouterProvider router={router} />

    </div>

  );
}

export default App;
