import React from 'react';
import Slider from '../components/Slider';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col,} from 'react-bootstrap';

import { VscTools } from "react-icons/vsc";
import { VscGraph} from "react-icons/vsc";
import { VscServerProcess} from "react-icons/vsc";
import { VscLayers} from "react-icons/vsc";
import '../styles/home.css';


export default function Home() {
  return (
    <>
    <Slider/>
    <BenefitSection/>
    <GallarySection/>
    </>
  )
}


function BenefitSection(){
  return(
    <section className="benefit-section clearfix"> 
        <Container> 
            <div className="section-heading"> 
                <h2>our benefits</h2>
                <p>Lorem ipsum dolor sit amet consectetur elit</p>
            </div>
            <div className="design-seperator"></div>
            <Row> 
               
                 <Col md={4} className="bor-d" > 
                    <div className="benefit-box"> 
                      <span className='box-icon'> <VscTools /> </span>

                      <div className="box-content"> 
                          <h3>Clean & modern</h3>
                          <div className="box-divider"></div>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed don eiusmod tempor enim minim veniam quis notrud exercitation </p>

                      </div>
                      
                    </div>
                 </Col>

                 <Col md={4} className="bor-d" > 
                    <div className="benefit-box"> 
                      <span className='box-icon'> <VscGraph /> </span>

                      <div className="box-content"> 
                          <h3>unique design</h3>
                          <div className="box-divider"></div>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed don eiusmod tempor enim minim veniam quis notrud exercitation </p>

                      </div>
                      
                    </div>
                 </Col>
                 <Col md={4} className="bor-d" > 
                    <div className="benefit-box"> 
                      <span className='box-icon'> <VscServerProcess/> </span>

                      <div className="box-content"> 
                          <h3>Multipurpose</h3>
                          <div className="box-divider"></div>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed don eiusmod tempor enim minim veniam quis notrud exercitation </p>

                      </div>
                      
                    </div>
                 </Col>
                 <Col md={4} className="bor-d" > 
                    <div className="benefit-box"> 
                      <span className='box-icon'> <VscLayers/> </span>

                      <div className="box-content"> 
                          <h3>100% responsive</h3>
                          <div className="box-divider"></div>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed don eiusmod tempor enim minim veniam quis notrud exercitation </p>

                      </div>
                      
                    </div>
                 </Col>
                 <Col md={4} className="bor-d" > 
                    <div className="benefit-box"> 
                      <span className='box-icon'> <VscLayers/> </span>

                      <div className="box-content"> 
                          <h3>100% responsive</h3>
                          <div className="box-divider"></div>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed don eiusmod tempor enim minim veniam quis notrud exercitation </p>

                      </div>
                      
                    </div>
                 </Col>
                 <Col md={4} className="bor-d" > 
                    <div className="benefit-box"> 
                      <span className='box-icon'> <VscLayers/> </span>

                      <div className="box-content"> 
                          <h3>100% responsive</h3>
                          <div className="box-divider"></div>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed don eiusmod tempor enim minim veniam quis notrud exercitation </p>

                      </div>
                      
                    </div>
                 </Col>
                    
                    
                  
                  
               
            </Row>
        </Container>
    </section>
  );
}

function GallarySection(){
  return(
    <section className="gallery">
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit sed don eiusmod tempor enim minim veniam quis notrud exercitationLorem ipsum dolor sit amet consectetur adipisicing elit sed don eiusmod tempor enim minim veniam quis notrud exercitationLorem ipsum dolor sit amet consectetur adipisicing elit sed don eiusmod tempor enim minim veniam quis notrud exercitation</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit sed don eiusmod tempor enim minim veniam quis notrud exercitationLorem ipsum dolor sit amet consectetur adipisicing elit sed don eiusmod tempor enim minim veniam quis notrud exercitationLorem ipsum dolor sit amet consectetur adipisicing elit sed don eiusmod tempor enim minim veniam quis notrud exercitation</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit sed don eiusmod tempor enim minim veniam quis notrud exercitationLorem ipsum dolor sit amet consectetur adipisicing elit sed don eiusmod tempor enim minim veniam quis notrud exercitationLorem ipsum dolor sit amet consectetur adipisicing elit sed don eiusmod tempor enim minim veniam quis notrud exercitation</div>
    </section>
  );
}