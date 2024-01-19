import React from "react";
import "../App.css";
import Navbar from "./StickyNavbar";


const Experience = () => {
  const[experience, setExperience] = useState({
    employment : '',
    jobTitle : '',
    city : '',
    state : '',
    startDate : '',
    endDate : ''
    
   })

   const handlechange = (e) => {
    e.persist();
    setExperience({...experience, [e.target.name] : e.target.value});
   }

   const saveEducationDetail = (e) =>{
    e.preventDefault();
    const data ={
      employment : experience.employment,
      jobTitle : experience.jobTitle,
      city : experience.city,
      state : experience.state,
      startDate : experience.startDate,
      endDate : experience.endDate
   }
  }
  return (
    <div className="forms">
      <Navbar />


      <div class="container">
        <form on onSubmit={saveEducationDetail}>
          <div className="head">
            <div className="heading">
              <p>EXPERIENCE</p>
              <span>List your work experience, from the most recent to the oldest. Feel free to use our pre-written examples.</span>
            </div>
          </div>
          <div class="inputboxes">
            <div class="left-side">
              <label for="employment" class="Label">Employment Status</label>
              <input type="text" id="employment" name="employment" placeholder="e.g., Full-time, Part-time, Self-employed" value={experience.employment} onChange={handlechange}></input>

            </div>

            <div class="input-group">
              <label for="jobTitle" class="Label">Job Title</label>
              <input type="text" id="jobTitle" name="jobTitle" placeholder="e.g., Web Developer" value={experience.jobTitle} onChange={handlechange}></input>
            </div>
          </div>

          <div class="inputboxes">
            <div class="left-side">
              <label for="city" class="Label">City</label>
              <input type="text" id="city" name="city" placeholder="e.g., Islamabad" value={experience.city} onChange={handlechange}></input>
            </div>

            <div>
              <label for="state" class="Label">State</label>
              <input type="text" id="state" name="state" placeholder="e.g., Panjab" value={experience.state} onChange={handlechange}></input>
            </div>
          </div>

          <div class="inputboxes">
            <div class="left-side">
              <label for="startDate" class="Label">Start Date</label>
              <input type="date" id="startDate" name="startDate" value={experience.startDate} onChange={handlechange}></input>
            </div>

            <div>
              <label for="endDate" class="Label">End Date</label>
              <input type="date" id="endDate" name="endDate" value={experience.endDate} onChange={handlechange}></input>
            </div>
          </div>

          <div className="exp-btns">
            <button type="back" className="btn-back" id="back-btn">Back</button>
            <button type="save" className="btn-save" id="save-btn">SAVE & NEXT</button>
          </div>
        </form>
      </div>


    </div>

  )
};


export default Experience;