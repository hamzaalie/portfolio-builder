// src/pages/ChooseYourTemplatesPage.js
import React from 'react';
import './ChooseYourTemplates.css';
import image1 from '../images/image1.jpg';
import sign_up from '../images/sign_up.svg';
import create from '../images/create.svg';
import download from '../images/download.svg';
import './Home.css';
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ChooseYourTemplatesPage from './ChooseYourTemplatesPage';










const Introduction = () => {
    const navigate = useNavigate();
  
    const CooseTemlates = () =>{
      navigate("/ChooseYourTemplatesPage");
    }
    
    return (

    <div>
    <header className="hero">
      <div className="hero-content">
        <h1>Building a Perfect Portfolio Has Never Been This Easy!

</h1>

      </div>
    </header>

    
    

    <section className="introdction">
        <div className="steps">
          <div className="step">
            <img src={sign_up} alt="Step 1" />
            <div>
              <h3>Choose a professional Portfolio template
</h3>
              <p>Selecting a professional Portfolio template is a crucial step towards presenting your skills and experience in a polished and impactful manner
</p>
            </div>
          </div>

          <div className="step">
            <img src={create} alt="Step 2" />
            <div>
              <h3>Enter your details</h3>
              <p>Entering your details ensures a personalized and tailored touch to your Portfolio, making it uniquely yours and professionally compelling</p>
            </div>
          </div>

          <div className="step">
            <img src={download} alt="Step 3" />
            <div>
              <h3>Download your Portfolio</h3>
              <p>Downloading your Portfolio marks the final step in bringing your professional story to life, ready to make a lasting impression.</p>
            </div>
          </div>
        </div>
        <div className='btn'>

        <button onClick={CooseTemlates} className="introduction-create-cv-btn">Create Your CV</button>
        </div>

      </section>


    </div>
  );
};

export default Introduction;
