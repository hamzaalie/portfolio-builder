import React, { useState } from "react";
import Navbar from "./StickyNavbar";
import "../App.css";



const Education = () => {

   const[education, setEducation] = useState({
    schoolName : '',
    city : '',
    state : '',
    degree : '',
    fieldOfStudy : '',
    graduationDate : ''
    
   })

   const handlechange = (e) => {
    e.persist();
    setEducation({...education, [e.target.name] : e.target.value});
   }

   const saveEducationDetail = (e) =>{
    e.preventDefault();
    const data ={
      schoolName : education.schoolName,
      city : education.schoolName,
      state : education.schoolName,
      degree : education.schoolName,
      fieldOfStudy : education.schoolName,
      graduationDate : education.schoolName
   }
  }


  return (
    <div className="forms">
      <Navbar />
      

      <div className="container">
      <div className="heading">
            <p>EDUCATION</p>
            <span>Add information about your educational background.</span>
          </div>
        <form onSubmit={saveEducationDetail}>

          <div className="inputboxes">
            <div className="left-side">
              <label for="schoolName">School Name:</label>
              <input type="text" id="schoolName" name="schoolName" required placeholder="e.g., Your last school name" value={education.schoolName} onChange={handlechange}></input>
            </div>
            <div>
              <label for="city">City:</label>
              <input type="text" id="city" name="city" required placeholder="e.g., school city name" value={education.city} onChange={handlechange}></input>
            </div>
          </div>

          <div className="inputboxes">
            <div className="left-side">
              <label for="state">State:</label>
              <input type="text" id="state" name="state" required placeholder="e.g., sate name of your school" value={education.state} onChange={handlechange}></input>
            </div>
            <div>
              <label for="degree">Select a Degree:</label>
              <select id="degree" name="degree" required value={education.degree} onChange={handlechange}>
                <option value="bachelor">Bachelor's Degree</option>
                <option value="master">Master's Degree</option>
                <option value="doctorate">Doctorate</option>
              </select>
            </div>
          </div>

          <div className="inputboxes">
            <div className="left-side">
              <label for="fieldOfStudy">Field of Study:</label>
              <input type="text" id="fieldOfStudy" name="fieldOfStudy" required placeholder="e.g., Computer Science" value={education.fieldOfStudy} onChange={handlechange}></input>
            </div>
            <div>
              <label for="graduationDate">Graduation Date:</label>
              <input type="date" id="graduationDate" name="graduationDate" value={education.graduationDate} onChange={handlechange} required></input>
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
}

export default Education;