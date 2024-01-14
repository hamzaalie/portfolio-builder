// src/pages/ChooseYourTemplatesPage.js
import React from 'react';
import './ChooseYourTemplates.css';
import portfolio1 from '../images/portfolio1.png';
import portfolio2 from '../images/portfolio2.jpg';
import portfolio3 from '../images/portfolio3.jpg';


import { useNavigate } from 'react-router-dom';





const ChooseYourTemplatesPage = () => {
  const navigate = useNavigate();
  
  const portfoliodetails = () =>{
    navigate("/portfolio-details");
  }

  return (

    <div>
    <header className="hero">
      <div className="hero-content">
        <h1>Choose Your Template
</h1>

      </div>
    </header>

    
    <div className="choose-templates-page-container">
      {/* Section 1: Image Section */}
      <section className="image-section">
        {/* Image 1 */}
        <div className="template-image" id="template1">
          <img src= {portfolio1} alt="Template 1" />
          <div className="overlay">
          <button onClick={portfoliodetails}>Select Template</button>
          </div>
        </div>

        {/* Image 2 */}
        <div className="template-image" id="template2">
          <img src={portfolio2} alt="Template 2" />
          <div className="overlay">
          <button onClick={portfoliodetails}>Select Template</button>
          </div>
        </div>

        {/* Image 3 */}
        <div className="template-image" id="template3">
          <img src={portfolio3} alt="Template 3" />
          <div className="overlay">
          <button onClick={portfoliodetails}>Select Template</button>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
};

export default ChooseYourTemplatesPage;
