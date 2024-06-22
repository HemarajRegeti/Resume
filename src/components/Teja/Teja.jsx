import React, { useState } from 'react';
import html2pdf from 'html2pdf.js';
import './Teja.css';

const Teja = () => {
  const [editable, setEditable] = useState(false); 

  const handleEdit = () => {
    setEditable(true); 
  };

  const handleDownload = () => {
    const element = document.getElementById('resume-container');

    const opt = {
      margin:       0.5,
      filename:     'resume.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().from(element).set(opt).save();
  };

  return (
    <div className="container" id="resume-container">
      <div className="row">
        <div className="col-xs-12" id="resHead">
          <h3>The Resume Of</h3>
          <h1>Jacob Johnson</h1>
          <a href="http://jacobjohnson.net"><h3>JacobJohnson.net</h3></a>
          <img src="http://jacobjohnson.net/img/logo.png" width="20%" alt="logo" />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-md-6" id="workExp">
          <h1 className="heading">Work Experience</h1>
          {editable ? (
            <>
              <input type="text" defaultValue="Carsforsale.com" /><br />
              <input type="text" defaultValue="Graphics Specialist" /><br />
              <input type="text" defaultValue="Oct. 2013 - Present" /><br />
              <textarea defaultValue="Managed the vehicle dealer website process..." /><br />
              <input type="text" defaultValue="Sioux Falls Stampede" /><br />
              <input type="text" defaultValue="Graphic Design Intern" /><br />
              <input type="text" defaultValue="Aug. 2012 - May 2013" /><br />
              <textarea defaultValue="Created graphics to be displayed on the video board..." /><br />
              <input type="text" defaultValue="Welcome Home Music" /><br />
              <input type="text" defaultValue="Co-owner / Designer" /><br />
              <input type="text" defaultValue="Feb. 2013 - Present" /><br />
              <textarea defaultValue="Created a YouTube channel to promote free Electronic Dance Music..." /><br />
            </>
          ) : (
            <>
              <h2 className="title">Carsforsale.com</h2>
              <h3 className="subtitle">Graphics Specialist</h3>
              <h4 className="date">Oct. 2013 - Present</h4>
              <p>Managed the vehicle dealer website process from conception to completion...</p>
              <h2 className="title">Sioux Falls Stampede</h2>
              <h3 className="subtitle">Graphic Design Intern</h3>
              <h4 className="date">Aug. 2012 - May 2013</h4>
              <p>Created graphics to be displayed on the video board, in TV ads, and other materials...</p>
              <h2 className="title">Welcome Home Music</h2>
              <h3 className="subtitle">Co-owner / Designer</h3>
              <h4 className="date">Feb. 2013 - Present</h4>
              <p>Created a YouTube channel to promote free Electronic Dance Music. I design logos, banners...</p>
            </>
          )}
        </div>
        <div className="col-xs-12 col-md-6" id="skillEdu">
          <h1 className="heading">Skills</h1>
          {editable ? (
            <>
              <input type="text" defaultValue="Design" /><br />
              <textarea defaultValue="Advanced knowledge of Adobe Creative Suite..." /><br />
              <input type="text" defaultValue="Code" /><br />
              <textarea defaultValue="Advanced knowledge of HTML5 and CSS3..." /><br />
            </>
          ) : (
            <>
              <h2 className="title">Design</h2>
              <p>Advanced knowledge of Adobe Creative Suite; Photoshop, Illustrator, InDesign...</p>
              <h2 className="title">Code</h2>
              <p>Advanced knowledge of HTML5 and CSS3. Experience with building responsive websites...</p>
            </>
          )}
          <h1 className="heading">Education</h1>
          {editable ? (
            <>
              <input type="text" defaultValue="Dakota State University" /><br />
              <input type="text" defaultValue="3.63 GPA" /><br />
              <input type="text" defaultValue="Aug. 2009 - May 2013" /><br />
              <textarea defaultValue="Bachelor of Science in Digital Arts & Design. Specialization: Computer Graphics" /><br />
            </>
          ) : (
            <>
              <h2 className="title">Dakota State University</h2>
              <h3 className="subtitle">3.63 GPA</h3>
              <h4 className="date">Aug. 2009 - May 2013</h4>
              <p>Bachelor of Science in Digital Arts & Design. Specialization: Computer Graphics</p>
            </>
          )}
        </div>
      </div>
      <div className="row">
        <div className="contact col-xs-12">
          <img width="100px" className="img-responsive" src="http://www.jacobjohnson.net/img/letter.png" alt="letter" />
          <h1 className="title">Contact</h1>
          <p className="subtitle">
            4600 E. 54th St. #200<br />
            Sioux Falls, SD 57110<br />
            <a href="tel:1-605-261-9968">605.261.9968</a><br />
            <a target="_blank" href="http://www.JacobJohnson.net">www.JacobJohnson.net</a><br />
            <a href="mailto:hello@JacobJohnson.net">hello@JacobJohnson.net</a><br />
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12">
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDownload}>Download</button>
        </div>
      </div>
    </div>
  );
};

export default Teja;
