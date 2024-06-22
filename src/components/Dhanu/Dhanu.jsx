import React, { useState } from 'react';
import { saveAs } from 'file-saver';
import html2canvas from 'html2canvas';
import './dhanu.css'; 

const Dhanu = () => {
  const [editable, setEditable] = useState(false);

  const handleEdit = () => {
    setEditable(true);
  };

  const handleSave = () => {
    setEditable(false);
    
  };

  const handleDownload = () => {

    const resumeElement = document.getElementById('resume-content');

    html2canvas(resumeElement).then((canvas) => {
      const imageData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const width = pdf.internal.pageSize.getWidth();
      const height = pdf.internal.pageSize.getHeight();
      pdf.addImage(imageData, 'PNG', 0, 0, width, height);
      pdf.save('resume.pdf');
    });
  };

  return (
    <div id="resume-content" className="resume">
      <div id="header"></div>
      <div className="left"></div>
      <div className="stuff">
        <br /><br />
        <h1>Resume</h1>
        <h2>Emily</h2>
        <hr />
        <br />
        <p className="head">Interests</p>
        <ul contentEditable={editable}>
          <li>Drawing</li>
          <li>Photography</li>
          <li>Design</li>
          <li>Programming</li>
          <li>Computer Science</li>
        </ul>
        <p className="head">Skills</p>
        <ul contentEditable={editable}>
          <li>Web Design with HTML & CSS</li>
        </ul>
        <p className="head">Education</p>
        <ul contentEditable={editable}>
          <li>
            <a href="http://www.wiltonhighschool.org/pages/Wilton_High_School">
              Wilton High School
            </a>
          </li>
          <li>
            <a href="https://www.silvermineart.org/">
              Silvermine School of Arts
            </a>
          </li>
          <li>Codeacademy</li>
        </ul>
        <p className="head">Experience</p>
        <ul contentEditable={editable}>
          <li>Student Technology Intern for Wilton School District</li>
          <li>Babysitter</li>
        </ul>
        <p className="head">Extracurriculars</p>
        <ul contentEditable={editable}>
          <li>Recycling Club</li>
          <li>Gardening Club</li>
          <li>Book Club</li>
        </ul>
      </div>
      <div className="right"></div>
      <div id="footer">
        {editable ? (
          <button onClick={handleSave}>Save</button>
        ) : (
          <button onClick={handleEdit}>Edit</button>
        )}
        <button onClick={handleDownload}>Download</button>
        <h2 id="name">Emily</h2>
      </div>
    </div>
  );
};

export default Dhanu;
