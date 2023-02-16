import React from 'react';
import {Link,useParams} from 'react-router-dom';
import '../styles/about.css';

function About() {
  return (
     
      <AboutBanner/>
    
  )
}

export default About;

const AboutBanner = () => {
  return (
    <section className="about-banner ab-bg"> 
        <div className="banner-content"> 
        <h3>Home / About</h3>
        <Link to="/"> <button> Go home</button></Link>
        </div>

    </section>
  );
}
