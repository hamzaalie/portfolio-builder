import React from 'react';
import './Home.css';

// Import your images
import step1Image from '../images/step1.svg';
import step2Image from '../images/step2.svg';
import step3Image from '../images/step3.svg';
import twoColumnImage from '../images/twoColumnImage1.svg';
import featureImage1 from '../images/featureImage1.svg';
import featureImage2 from '../images/featureImage2.svg';
import featureImage3 from '../images/featureImage3.svg';
import sign_up from '../images/sign_up.svg';
import create from '../images/create.svg';
import download from '../images/download.svg';

import { useNavigate } from 'react-router-dom';




const Home = () => {

  const navigate = useNavigate();
  
  const CooseTemlates = () =>{
    navigate("/");
  }

  return (
    <div>
      <header className="hero">
        <div className="hero-content">
          <h1>Only 2% of Portfolios make it past the first round. Be in the top 2%
</h1>
          <p>Use professional field-tested Portfolio templates that follow the exact ‘Portfolio rules’ employers look for. Easy to use and done within minutes - try now for free!

</p>

<button onClick={CooseTemlates} className="create-cv-btn">Create Your Portfolio</button>

        </div>
      </header>


      <section className="features-section full-width-section">
        <h2>Features Designed to Help You Win Your Dream Job</h2>
        <div className="features">
          {/* Feature 1 */}
          <div className="feature">
            <img src={featureImage1} alt="Feature 1" />
            <h3>Easy online Portfolio builder</h3>
            <p>Create an awesome Portfolio in minutes, without leaving your web browser.</p>
          </div>

          {/* Feature 2 */}
          <div className="feature">
            <img src={featureImage2} alt="Feature 2" />
            <h3>Automatic spell-checker</h3>
            <p>Our built-in spell-checker takes care of the grammar for you. Create a Portfolio with zero errors.</p>
          </div>

          {/* Feature 3 */}
          <div className="feature">
            <img src={featureImage3} alt="Feature 3" />
            <h3>Your data is safe</h3>
            <p>Your data is kept private and protected by strong 256-bit encryption.</p>
          </div>

          {/* Add similar blocks for remaining features */}
        </div>
      </section>
      <section className="features-section2 full-width-section ">
        <div className="features">
          {/* Feature 1 */}
          <div className="feature">
            <img src={featureImage1} alt="Feature 1" />
            <h3>Automatic summary </h3>
            <p>Create a powerful Portfolio profile or cover letter in one click. Writer’s block is no longer an obstacle.</p>
          </div>

          {/* Feature 2 */}
          <div className="feature">
            <img src={featureImage2} alt="Feature 2" />
            <h3>Approved templates</h3>
            <p>Professionally-designed Portfolio templates and examples. Just edit and download in 5 minutes.</p>
          </div>

          {/* Feature 3 */}
          <div className="feature">
            <img src={featureImage3} alt="Feature 3" />
            <h3>AI pre-written phrases</h3>
            <p>Use the power of AI and data analysis, choose pre-generated effective phrases and keywords.</p>
          </div>

          {/* Add similar blocks for remaining features */}
        </div>
      </section>

      


      

      <section className="how-to-create-resume full-width-section">
        <h2>How to Create Your Portfolio</h2>
        <div className="steps">
          <div className="step">
            <img src={sign_up} alt="Step 1" />
            <div>
              <h3>1. Sign Up</h3>
              <p>We’ve made sure that signing up to our Portfolio maker tools is even more convenient than usual. Use one of the most common networks used by professionals (LinkedIn, Facebook or your Google account) or simply skip this step and enter your name and email address. We keep your data strictly confidential.</p>
            </div>
          </div>

          <div className="step">
            <img src={create} alt="Step 2" />
            <div>
              <h3>2. Create</h3>
              <p>Choose one of our beautiful, professionally designed Portfolio. Add your personal info and choose and edit the necessary sections. Customize the layout and visuals as much (or as little) as you want. We provide a ton of ready content with lots of room for your own creativity and needs.</p>
            </div>
          </div>

          <div className="step">
            <img src={download} alt="Step 3" />
            <div>
              <h3>3. Host Your Portfolio Online</h3>
              <p>Select a reliable hosting provider to store and serve your portfolio files. Popular choices include GitHub Pages, Netlify, Vercel, and platforms like WordPress or Wix. Consider factors like ease of use, storage capacity, and any associated costs.
</p>
            </div>
          </div>
        </div>

        <button onClick={CooseTemlates} className="create-cv-btn">Create Your Portfolio</button>
      </section>

      <section className="featured-templates full-width-section">
        <h2>Featured Templates</h2>
        <div className="templates">
          <div className="template">
            <h3>Modern Professional</h3>
            <p>An elegant template with a modern touch.</p>
          </div>

          <div className="template">
            <h3>Creative Innovator</h3>
            <p>Showcase your creativity with this unique template.</p>
          </div>
          <div className="template">
            <h3>Creative Innovator</h3>
            <p>Showcase your creativity with this unique template.</p>
          </div>
        </div>
      </section>


      

      <section className="get-started full-width-section">
        <h2>Get Started Today</h2>
        <p>Join thousands of professionals who have already created stunning portfolios. Get started now and boost your career!</p>
        <button onClick={CooseTemlates} className="create-cv-btn">Create Your Portfolio</button>
      </section>

      


    </div>
  );
};

export default Home;
