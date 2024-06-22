import React, { useState } from 'react';
import html2canvas from 'html2canvas'; 
import jsPDF from 'jspdf'; 
import './Minister.css';

const Minister = () => {
  const [editable, setEditable] = useState(false); 

  const [resumeContent, setResumeContent] = useState({
    name: 'James Moriarty',
    cell: '555-666-7777',
    web: 'moriarty.com',
    email: 'napoleon@crime.com',
    objective:
      'I am a reserved but ambitious young professional seeking a career that fits my professional skills, personality, and murderous tendencies. My good birth, excellent education and phenomenal mathematical faculty have allowed me to advance the prospects of several criminal enterprises.',
    education: {
      university: 'Oxford University',
      major: 'Applied Mathematics',
      minor: 'Romance Languages'
    },
    skills: {
      office: 'Office and records management, database administration, event organization, customer support, travel coordination',
      computer: 'Microsoft productivity software (Word, Excel, etc), Adobe Creative Suite, Windows'
    },
    experience: [
      {
        title: 'Consulting Criminal',
        location: 'London',
        period: '1892 – present',
        responsibilities: [
          'Development within the criminal underworld',
          'Conducted negotiations with several rogue governments'
        ]
      },
      {
        title: 'The Coldstream Guards',
        location: 'London',
        period: '1889 – 1888',
        responsibilities: [
          'Recruiting, training and terrorizing young men.'
        ]
      },
      {
        title: 'Oxford University',
        location: 'Professor of Mathematics',
        period: '1885 – 1888',
        responsibilities: [
          'Published papers in binomials, asteroid dynamics and game theory',
          'Intimidated students'
        ]
      }
    ],
    hobbies: 'World domination, Social Manipulation, Murder Most Foul',
    references: 'Available on request'
  });

  const handleEdit = () => {
    setEditable(!editable); 
  };

  const handleDownload = () => {

    const element = document.getElementById('resume'); 

    html2canvas(element).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgWidth = 210;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save('resume.pdf'); 
    });
  };

  const handleChangeObjective = (e) => {
    setResumeContent({
      ...resumeContent,
      objective: e.target.value
    });
  };

  const handleChangeEducation = (field, e) => {
    setResumeContent({
      ...resumeContent,
      education: {
        ...resumeContent.education,
        [field]: e.target.value
      }
    });
  };

  const handleChangeSkills = (field, e) => {
    setResumeContent({
      ...resumeContent,
      skills: {
        ...resumeContent.skills,
        [field]: e.target.value
      }
    });
  };

  const handleChangeExperience = (index, field, e) => {
    const updatedExperience = [...resumeContent.experience];
    updatedExperience[index][field] = e.target.value;
    setResumeContent({
      ...resumeContent,
      experience: updatedExperience
    });
  };

  const handleChangeHobbies = (e) => {
    setResumeContent({
      ...resumeContent,
      hobbies: e.target.value
    });
  };

  return (
    <div id="resume">
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/james-moriarty.jpg" alt="James Moriarty" />
      <h1>{resumeContent.name}</h1>
      <p>Cell: <a href="#">{resumeContent.cell}</a></p>
      <p>Web: <a href="#">{resumeContent.web}</a></p>
      <p>Email: <a href="#">{resumeContent.email}</a></p>
      
      {editable ? (
        <textarea
          value={resumeContent.objective}
          onChange={handleChangeObjective}
          style={{ width: '100%', minHeight: '100px', marginBottom: '10px' }}
        />
      ) : (
        <p id="objective">{resumeContent.objective}</p>
      )}

      <dl>
        <dt>Education</dt>
        <dd>
          <h2>{resumeContent.education.university}</h2>
          {editable ? (
            <>
              <input
                type="text"
                value={resumeContent.education.major}
                onChange={(e) => handleChangeEducation('major', e)}
                style={{ width: '100%', marginBottom: '6px' }}
              />
              <input
                type="text"
                value={resumeContent.education.minor}
                onChange={(e) => handleChangeEducation('minor', e)}
                style={{ width: '100%' }}
              />
            </>
          ) : (
            <p>
              <strong>Major:</strong> {resumeContent.education.major}<br/>
              <strong>Minor:</strong> {resumeContent.education.minor}
            </p>
          )}
        </dd>
      </dl>

      <dl>
        <dt>Skills</dt>
        <dd>
          <h2>Office Skills</h2>
          {editable ? (
            <textarea
              value={resumeContent.skills.office}
              onChange={(e) => handleChangeSkills('office', e)}
              style={{ width: '100%', minHeight: '100px', marginBottom: '10px' }}
            />
          ) : (
            <p>{resumeContent.skills.office}</p>
          )}
          
          <h2>Computer skills</h2>
          {editable ? (
            <textarea
              value={resumeContent.skills.computer}
              onChange={(e) => handleChangeSkills('computer', e)}
              style={{ width: '100%', minHeight: '100px' }}
            />
          ) : (
            <p>{resumeContent.skills.computer}</p>
          )}
        </dd>
      </dl>

      <dl>
        <dt>Experience</dt>
        <dd>
          {resumeContent.experience.map((exp, index) => (
            <div key={index}>
              <h2>{exp.title}<span>{exp.location} - {exp.period}</span></h2>
              {editable ? (
                <>
                  <input
                    type="text"
                    value={exp.title}
                    onChange={(e) => handleChangeExperience(index, 'title', e)}
                    style={{ width: '100%', marginBottom: '6px' }}
                  />
                  <input
                    type="text"
                    value={exp.location}
                    onChange={(e) => handleChangeExperience(index, 'location', e)}
                    style={{ width: '100%', marginBottom: '6px' }}
                  />
                  <input
                    type="text"
                    value={exp.period}
                    onChange={(e) => handleChangeExperience(index, 'period', e)}
                    style={{ width: '100%', marginBottom: '6px' }}
                  />
                  <textarea
                    value={exp.responsibilities.join('\n')}
                    onChange={(e) => handleChangeExperience(index, 'responsibilities', e)}
                    style={{ width: '100%', minHeight: '100px', marginBottom: '10px' }}
                  />
                </>
              ) : (
                <ul>
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </dd>
      </dl>

      <dl>
        <dt>Hobbies</dt>
        <dd>
          {editable ? (
            <textarea
              value={resumeContent.hobbies}
              onChange={handleChangeHobbies}
              style={{ width: '100%', minHeight: '100px', marginBottom: '10px' }}
            />
          ) : (
            <p>{resumeContent.hobbies}</p>
          )}
        </dd>
      </dl>

      <dl>
        <dt>References</dt>
        <dd>{resumeContent.references}</dd>
      </dl>

      {editable ? (
        <div style={{ marginTop: '1rem' }}>
          <button onClick={handleEdit}>Save</button>
          <button onClick={handleDownload}>Download PDF</button>
        </div>
      ) : (
        <div style={{ marginTop: '1rem' }}>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default Minister;
