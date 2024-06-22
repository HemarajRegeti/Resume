import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './ravikiran.css';

const Ravikiran = () => {
  const [isEditable, setIsEditable] = useState(false);

  const initialData = {
    name: 'Al Rayhan',
    designation: 'UI & UX Expert',
    contact: '9876543210',
    email: 'vipul_goyal@gridle.io',
    address: `24 Golden Tower
    Amborkhana, Sylhet.
    SYL-3RF87W`,
    workExperience: [
      {
        position: 'UI/UX Designer @Academy',
        duration: 'JAN 2016 - DEC 2016',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        position: 'Creative Director @DeviserWeb',
        duration: 'JAN 2016 - DEC 2016',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        position: 'Graphics Designer @Creative World',
        duration: 'JAN 2016 - DEC 2016',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
    ],
    education: [
      {
        degree: 'Art & Multimedia @Oxford University',
        duration: 'JAN 2016 - DEC 2016',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        degree: 'Post Graduation @Lorem',
        duration: 'JAN 2016 - DEC 2016',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        degree: 'TTMP Degree @Creative School',
        duration: 'JAN 2016 - DEC 2016',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
    ],
  };

  const [data, setData] = useState(initialData);

  const toggleEditable = () => {
    setIsEditable(!isEditable);
  };

  const handleInputChange = (e, section, index) => {
    const newData = { ...data };

    if (section === 'workExperience') {
      newData.workExperience[index][e.target.name] = e.target.value;
    } else if (section === 'education') {
      newData.education[index][e.target.name] = e.target.value;
    } else {
      newData[e.target.name] = e.target.value;
    }

    setData(newData);
  };

  const saveAndDownloadPDF = () => {
    const resumeContent = document.getElementById('resume-content');

    html2canvas(resumeContent).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const width = pdf.internal.pageSize.getWidth();
      const height = pdf.internal.pageSize.getHeight();
      pdf.addImage(imgData, 'PNG', 0, 0, width, height);
      pdf.save('resume.pdf');
    });
  };

  return (
    <div className="container">
      <div className="sidebar">
        <div className="sidebar-top">
          <img className="profile-image" src="1.jpg" alt="Profile" />
          <div className="profile-basic">
            {isEditable ? (
              <>
                <input
                  type="text"
                  name="name"
                  value={data.name}
                  onChange={(e) => handleInputChange(e)}
                />
                <input
                  type="text"
                  name="designation"
                  value={data.designation}
                  onChange={(e) => handleInputChange(e)}
                />
              </>
            ) : (
              <>
                <h1 className="name">{data.name}</h1>
                <h4 className="designation">{data.designation}</h4>
              </>
            )}
          </div>
        </div>
        <div className="profile-info">
          <p>{data.profileInfo}</p>
        </div>
        <div className="profile-info">
          <p className="key">Contact:</p>
          {isEditable ? (
            <input
              type="text"
              name="contact"
              value={data.contact}
              onChange={(e) => handleInputChange(e)}
            />
          ) : (
            <p className="value">{data.contact}</p>
          )}
        </div>
        <div className="profile-info">
          <p className="key">Email:</p>
          {isEditable ? (
            <input
              type="text"
              name="email"
              value={data.email}
              onChange={(e) => handleInputChange(e)}
            />
          ) : (
            <p className="value">{data.email}</p>
          )}
        </div>
        <div className="profile-info">
          <p className="key">Address:</p>
          {isEditable ? (
            <textarea
              name="address"
              value={data.address}
              onChange={(e) => handleInputChange(e)}
            />
          ) : (
            <p className="value">{data.address}</p>
          )}
        </div>
        <div className="profile-info">
          <a className="social-media" href="https://facebook.com/anupama.panchal" target="_blank">
            Facebook
          </a>
          <a className="social-media" href="https://facebook.com/anupama.panchal" target="_blank">
            Linkedin
          </a>
          <a className="social-media" href="https://facebook.com/anupama.panchal" target="_blank">
            Twitter
          </a>
          <a className="social-media" href="https://facebook.com/anupama.panchal" target="_blank">
            Instagram
          </a>
        </div>
        {isEditable ? (
          <button onClick={toggleEditable}>Save</button>
        ) : (
          <button onClick={toggleEditable}>Edit</button>
        )}
        <button onClick={saveAndDownloadPDF}>Download PDF</button>
      </div>

      <div className="content" id="resume-content">
        <div className="work-experience">
          <h1 className="heading">Work Experience</h1>
          {data.workExperience.map((exp, index) => (
            <div key={index} className="info">
              {isEditable ? (
                <>
                  <input
                    type="text"
                    name="position"
                    value={exp.position}
                    onChange={(e) => handleInputChange(e, 'workExperience', index)}
                  />
                  <input
                    type="text"
                    name="duration"
                    value={exp.duration}
                    onChange={(e) => handleInputChange(e, 'workExperience', index)}
                  />
                  <textarea
                    name="description"
                    value={exp.description}
                    onChange={(e) => handleInputChange(e, 'workExperience', index)}
                  />
                </>
              ) : (
                <>
                  <p className="sub-heading">{exp.position}</p>
                  <p className="duration">{exp.duration}</p>
                  <p>{exp.description}</p>
                </>
              )}
            </div>
          ))}
        </div>
        <div className="education">
          <h1 className="heading">Education</h1>
          {data.education.map((edu, index) => (
            <div key={index} className="info">
              {isEditable ? (
                <>
                  <input
                    type="text"
                    name="degree"
                    value={edu.degree}
                    onChange={(e) => handleInputChange(e, 'education', index)}
                  />
                  <input
                    type="text"
                    name="duration"
                    value={edu.duration}
                    onChange={(e) => handleInputChange(e, 'education', index)}
                  />
                  <textarea
                    name="description"
                    value={edu.description}
                    onChange={(e) => handleInputChange(e, 'education', index)}
                  />
                </>
              ) : (
                <>
                  <p className="sub-heading">{edu.degree}</p>
                  <p className="duration">{edu.duration}</p>
                  <p>{edu.description}</p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ravikiran;
